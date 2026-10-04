// Imprese della Sala Giochi: il terzo livello dei traguardi.
//   Livello 1 · i trofei di punteggio (bronzo, argento, oro) in shared/trofei.js, per tutti i giochi
//   Livello 2 · traguardi di progresso ("arriva al livello 5"): scelti di non farli, li coprono già i livelli 1 e 3
//   Livello 3 · le imprese: due o tre prodezze caratteristiche di ogni gioco, una per una
// Un gioco segnala un'impresa con  window.dispatchEvent(new CustomEvent("sala:impresa", { detail: "id" }))
// e shared/iniziali.js la salva (localStorage "sala-imprese"), fa comparire l'avviso e la elenca nei menu.
// Le imprese si aggiungono a gruppi di giochi; quelli che non ne hanno ancora restano senza elenco.
(() => {
  "use strict";
  // record key prefix of the game (as in trofei.js) → its feats
  const LIST = {
    "botte-best-": [   // botte-da-strada
      { id: "senza", name: "Senza un graffio", desc: "finisci una missione senza perdere vite" },
      { id: "tris", name: "Tre in un colpo", desc: "colpisci tre Corvi con un colpo solo (un barile lanciato fa al caso tuo)" },
      { id: "mani", name: "A mani nude", desc: "stendi un Bestione senza usare armi contro di lui" },
    ],
    "dj-best-": [   // notte-da-dj
      { id: "combo", name: "Combo piena", desc: "finisci una canzone senza nessun BAD e nessun POOR" },
      { id: "scratch", name: "Re dello scratch", desc: "prendi 20 scratch di fila senza sbagliarne uno" },
      { id: "aaa", name: "Tripla A", desc: "supera una canzone con il voto AAA" },
    ],
    "soccorso-best-": [   // soccorso-lunare
      { id: "piazzola", name: "Atterraggio di precisione", desc: "posati sulla piazzola più piccola, quella da 150" },
      { id: "ondata", name: "Ondata perfetta", desc: "salva tutti e sei gli astronauti di un'ondata senza perdere moduli" },
      { id: "dischi", name: "Tiro al disco", desc: "abbatti 3 dischi volanti nella stessa ondata" },
    ],
    "pallino-best-": [   // il-viaggio-di-pallino
      { id: "banchetto", name: "Banchetto", desc: "mangia 4 fantasmi con la stessa pillola" },
      { id: "aereo", name: "Abbattuto in volo", desc: "mangia un fantasma in aereo" },
      { id: "liscio", name: "Viaggio liscio", desc: "arriva in fondo a un'andata o a un ritorno senza perdere vite" },
    ],
    "tubi-best-": [   // tubi-e-topi
      { id: "artificiere", name: "Artificiere", desc: "calcia via 3 bombe nello stesso stage" },
      { id: "piccioni", name: "Due piccioni", desc: "scaccia 2 topi con un colpo solo di chiave" },
      { id: "calda", name: "Acqua sempre calda", desc: "riempi la vasca senza farla mai scendere sotto il 30%" },
    ],
    "pinguini-best-": [   // guerra-dei-pinguini
      { id: "tutte", name: "Tutte di là", desc: "vinci un round mandando tutte e dieci le palle dall'altra parte" },
      { id: "sponda", name: "Tiro di sponda", desc: "stordisci il rivale con una palla che ha rimbalzato su una sponda" },
      { id: "netto", name: "Due a zero", desc: "batti un avversario senza perdere neanche un round" },
    ],
    "campanelle-best-": [   // campanelle-volanti
      { id: "arcobaleno", name: "Arcobaleno", desc: "prendi una campanella di ognuno dei cinque colori nella stessa partita" },
      { id: "filotto", name: "Filotto giallo", desc: "prendi una campanella gialla da 5.000" },
      { id: "capo", name: "Capo senza graffi", desc: "sconfiggi un capo senza farti colpire durante lo scontro" },
    ],
    "salomone-best-": [   // la-chiave-del-mago
      { id: "drago", name: "Ammazzadraghi", desc: "togli il pavimento a un drago e fallo spiaccicare" },
      { id: "lampo", name: "Mago lampo", desc: "esci da una sala con più di metà candela ancora accesa" },
      { id: "gemma", name: "Cacciatore di gemme", desc: "prendi una gemma" },
    ],
    "manopole-best-": [   // hockey-a-manopole
      { id: "cappotto", name: "Cappotto", desc: "vinci una partita 3 a 0" },
      { id: "portiere", name: "Gol del portiere", desc: "segna con il tuo portiere" },
      { id: "rimonta", name: "Rimonta", desc: "vinci una partita dopo essere stato sotto di due gol" },
    ],
    "forza-best-": [   // pugno-da-record
      { id: "max", name: "999!", desc: "fai segnare al display il massimo, 999 kg" },
      { id: "primo", name: "Al primo colpo", desc: "batti tre campioni di fila, ognuno con il primo pugno" },
      { id: "acciaio", name: "Pugni d'acciaio", desc: "tira tre pugni da 950 kg o più nella stessa partita" },
    ],
    "trappola-best-": [   // trappola-aliena
      { id: "capo", name: "Giù il capo", desc: "seppellisci il capo rosso" },
      { id: "lampo", name: "Quartiere lampo", desc: "libera un quartiere in meno di 40 secondi" },
      { id: "illeso", name: "Ronda tranquilla", desc: "libera un quartiere senza perdere vite" },
    ],
    "pachinko-best-": [   // pachinko-della-fortuna
      { id: "sette", name: "Tris di sette", desc: "fai scattare la febbre con 7 7 7" },
      { id: "doppia", name: "Doppia febbre", desc: "fai scattare due febbri nella stessa partita" },
      { id: "porta", name: "Porta piena", desc: "fai entrare 6 biglie nella porta durante una sola febbre" },
    ],
    "rotola-best-": [   // rotola-e-centra
      { id: "cento", name: "Angolo da 100", desc: "fai entrare la pallina in un buco da 100" },
      { id: "duecento", name: "Doppio cento", desc: "due palline nei buchi da 100 nello stesso round" },
      { id: "centro", name: "Tris al centro", desc: "tre palline di fila nel 50 al centro" },
    ],
    "monete-best-": [   // cascata-di-monete
      { id: "smeraldo", name: "Smeraldo", desc: "fai cadere uno smeraldo dal bordo davanti" },
      { id: "gemma", name: "Gemma doppia", desc: "vinci un rubino o uno smeraldo con i punti doppi attivi" },
      { id: "valanga", name: "Valanga", desc: "fai cadere 6 monete davanti in un secondo" },
    ],
    "pinza-best-": [   // pinza-fortunata
      { id: "drago", name: "Il drago!", desc: "porta nello scivolo il drago, il peluche più grosso" },
      { id: "doppietta", name: "Doppietta", desc: "vinci due peluche nello stesso tentativo" },
      { id: "gettone", name: "Gettone d'oro", desc: "vinci il gettone d'oro" },
    ],
    "cresta-best-": [   // cresta-lunare
      { id: "tre", name: "Razzo completo", desc: "aggancia il terzo stadio e vola con tutti e tre" },
      { id: "aggancio", name: "Aggancio perfetto", desc: "aggancia uno stadio quasi fermo e perfettamente allineato" },
      { id: "intatta", name: "Ondata intatta", desc: "supera un'ondata senza perdere stadi" },
    ],
    "regiungla-best-": [   // re-della-giungla
      { id: "coccodrilli", name: "Domatore", desc: "stendi 3 coccodrilli con il coltello nello stesso fiume" },
      { id: "salvata", name: "Salvataggio", desc: "salva l'esploratrice dai cannibali" },
      { id: "perfetto", name: "Giro perfetto", desc: "supera tutte e quattro le prove di un giro senza perdere vite" },
    ],
  };
  const KEY = "sala-imprese";
  const load = () => { try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { return new Set(); } };
  function status(base) {
    const list = LIST[base];
    if (!list) return null;
    const got = load();
    return list.map((f) => ({ ...f, got: got.has(`${base}:${f.id}`) }));
  }
  // records a feat; returns it the first time, null if unknown or already done
  function unlock(base, id) {
    const f = (LIST[base] || []).find((x) => x.id === id);
    if (!f) return null;
    const got = load(), k = `${base}:${id}`;
    if (got.has(k)) return null;
    got.add(k);
    try { localStorage.setItem(KEY, JSON.stringify([...got])); } catch { /* ignore */ }
    return f;
  }
  const count = () => Object.values(LIST).reduce((n, l) => n + l.length, 0);
  const done = () => { const got = load(); let n = 0; for (const [b, l] of Object.entries(LIST)) for (const f of l) if (got.has(`${b}:${f.id}`)) n++; return n; };
  window.SalaImprese = { LIST, status, unlock, count, done };
})();
