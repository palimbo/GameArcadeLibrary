// Trofei della Sala Giochi: bronzo, argento e oro per ogni gioco.
// Si ricavano dai record già salvati (nessun dato in più), quindi chi ha già giocato li trova sbloccati.
//   Bronzo  · il punteggio indicato in qualsiasi difficoltà
//   Argento · il punteggio indicato a Normale o Difficile
//   Oro     · il punteggio indicato a Difficile
// Per i giochi a tempo (t: true) conta il tempo, e vale "entro".
// Le soglie vengono dalle partite di prova col bot (o da una stima sulle regole, dove il bot non c'è).
(() => {
  "use strict";
  // record key prefix → [bronzo, argento, oro] (and t for times)
  const DATA = {
    "pesca-best-": [13000, 38000, 27000],   // gara-di-pesca (bot)
    "volley-best-": [4100, 12000, 8400],   // pallavolo-da-spiaggia (bot)
    "coppa-best-": [26000, 77000, 54000],   // coppa-delle-nevi (bot)
    "neve-best-": [18000, 54000, 38000],   // palle-di-neve (bot)
    "acrobati-best-": [2600, 7900, 7000],   // acrobati-in-altalena (bot)
    "vetta-best-": [8000, 25000, 18000],   // vetta-ghiacciata (bot)
    "biplano-best-": [4000, 12000, 8000],   // biplano-ribelle (bot)
    "stanze-best-": [20000, 60000, 42000],   // stanze-del-tesoro (bot)
    "monociclo-best-": [5300, 16000, 11000],   // monociclo-matto (bot)
    "ladri-best-": [9000, 27000, 19000],   // ladri-di-carburante (bot)
    "panico-best-": [2600, 7900, 5500],   // panico-spaziale (bot)
    "gelato-best-": [5300, 16000, 11000],   // corsa-al-gelato (bot)
    "bolla-best-": [5400, 16000, 11000],   // bolla-pulita (bot)
    "cuori-best-": [3000, 7000, 7000],   // cuori-dal-cielo (bot)
    "mago-best-": [2500, 7000, 6000],   // sotterranei-del-mago (bot)
    "isola-best-": [2800, 8500, 6000],   // isola-della-frutta (bot)
    "orizzonte-best-": [8500, 26000, 18000],   // orizzonte-di-fuoco (bot)
    "tomba-best-": [4000, 12000, 10000],   // tomba-del-faraone (bot)
    "maligna-best-": [15000, 60000, 60000],   // stella-maligna (bot)
    "mirino-best-": [8500, 25000, 29000],   // mirino-stellare (bot)
    "cristallo-best-": [3800, 11000, 10000],   // castelli-di-cristallo (bot)
    "pennello-best-": [3000, 12000, 14000],   // pennello-svelto (stima)
    "gelatine-best-": [16000, 47000, 78000],   // sfida-delle-gelatine (bot)
    "rocce-best-": [5900, 18000, 12000],   // rocce-e-diamanti (bot)
    "stecca-best-": [3000, 8000, 9000],   // colpo-di-stecca (stima)
    "fenice-best-": [2500, 8000, 8000],   // fenice-spaziale (bot)
    "zoo-best-": [4000, 12000, 8500],   // guardiano-dello-zoo (bot)
    "raggio-best-": [3800, 11000, 12000],   // raggio-traente (bot)
    "rampa-best-": [27000, 80000, 56000],   // rampa-dei-colori (bot)
    "raid-best-": [3000, 9100, 6400],   // raid-sul-fiume (bot)
    "colpo-best-": [5500, 17000, 12000],   // colpo-da-sotto (bot)
    "talpa-best-": [37000, 110000, 92000],   // martella-la-talpa (bot)
    "salta-best-": [1900, 5600, 3900],   // salta-e-sperona (bot)
    "canestro-best-": [190, 560, 400],   // canestro-pazzo (bot)
    "acchiappa-best-": [14000, 42000, 50000],   // acchiappabombe (bot)
    "cittadella-best-": [3800, 12000, 12000],   // cittadella-stellare (bot)
    "idraulico-best-": [3900, 12000, 8200],   // idraulico-lampo (bot)
    "pillole-best-": [20000, 61000, 55000],   // pillole-pazze (bot)
    "tiro-best-": [32000, 95000, 66000],   // tiro-a-segno (bot)
    "carri-best-": [2000, 6200, 6500],   // carri-di-latta (bot)
    "setmatch-best-": [5000, 20000, 22000],   // set-e-match (stima)
    "minigolf-best-": [3000, 6000, 6500],   // minigolf-pazzo (stima)
    "fortezza-best-": [5000, 15000, 18000],   // fortezza-spaziale (stima)
    "formichine-best-": [2000, 8000, 9000],   // formichine (stima)
    "spirale-best-": [5000, 20000, 22000],   // spirale-galattica (stima)
    "coccinella-best-": [3000, 10000, 12000],   // coccinella (stima)
    "calcetto-best-": [5000, 15000, 18000],   // calcetto-arcade (stima)
    "volo-best-": [5000, 20000, 22000],   // volo-fantastico (stima)
    "rampe-best-": [3000, 10000, 12000],   // rampe-e-fango (stima)
    "sergente-best-": [5000, 15000, 18000],   // sergente-di-ferro (stima)
    "basi-best-": [5000, 20000, 22000],   // basi-stellari (stima)
    "fiume-best-": [5000, 15000, 18000],   // giu-per-il-fiume (stima)
    "cavaliere-best-": [5000, 15000, 18000],   // cavaliere-in-mutande (stima)
    "castelli-best-": [3000, 12000, 14000],   // castelli-e-cannoni (stima)
    "banca-best-": [3000, 10000, 12000],   // banca-del-west (stima)
    "colonne-best-": [2000, 10000, 14000],   // colonne-di-gemme (stima)
    "bowling-best-": [100, 150, 180],   // bowling-strike (stima)
    "zona-best-": [5000, 15000, 18000],   // zona-di-battaglia (stima)
    "elisoccorso-best-": [3000, 10000, 12000],   // elisoccorso (stima)
    "biglia-best-": [2000, 6000, 7000],   // biglia-pazza (stima)
    "canguro-best-": [3000, 10000, 12000],   // mamma-canguro (stima)
    "periscopio-best-": [2000, 4000, 4500],   // periscopio (stima)
    "quattrore-best-": [2000, 6000, 5000],   // quattro-re (stima)
    "circuito-best-": [2000, 6000, 7000],   // circuito-mini (stima)
    "giungla-best-": [8000, 25000, 28000],   // esploratore-giungla (stima)
    "cripta-best-": [3000, 10000, 12000],   // cripta-degli-eroi (stima)
    "strada-best-": [3000, 10000, 12000],   // caccia-su-strada (stima)
    "asso-best-": [8000, 30000, 35000],   // asso-dei-cieli (stima)
    "elettrico-best-": [1500, 5000, 6000],   // labirinto-elettrico (stima)
    "mostro-best-": [3000, 10000, 12000],   // mostro-in-citta (stima)
    "sciame-best-": [5000, 25000, 28000],   // sciame-galattico (stima)
    "guantoni-best-": [5000, 15000, 18000],   // guantoni-d-oro (stima)
    "atletica-best-": [5000, 12000, 14000],   // campioni-atletica (stima)
    "circo-best-": [5000, 15000, 18000],   // clown-del-circo (stima)
    "agente-best-": [3000, 10000, 12000],   // agente-segreto (stima)
    "difensore-best-": [5000, 20000, 22000],   // difensore-stellare (stima)
    "villa-best-": [3000, 10000, 12000],   // villa-dei-gatti (stima)
    "porcellina-best-": [3000, 10000, 12000],   // porcellina-arciera (stima)
    "pilota-best-": [5000, 20000, 22000],   // pilota-del-tempo (stima)
    "oro-best-": [3000, 10000, 12000],   // cercatore-d-oro (stima)
    "rally-best-": [5000, 15000, 18000],   // rally-bandiere (stima)
    "draghi-best-": [10000, 40000, 45000],   // bolle-di-drago (stima)
    "kungfu-best-": [5000, 15000, 18000],   // torre-kung-fu (stima)
    "robotico-best-": [5000, 20000, 25000],   // assalto-robotico (stima)
    "pattuglia-best-": [3000, 10000, 12000],   // pattuglia-lunare (stima)
    "vortice-best-": [3000, 10000, 12000],   // vortice (stima)
    "strillone-best-": [3000, 10000, 12000],   // strillone (stima)
    "scala-best-": [1500, 4000, 4500],   // scalagrattacieli (stima)
    "serpente-best-": [2000, 8000, 9000],   // serpentone (stima)
    "panino-best-": [4000, 15000, 18000],   // mastro-panino (stima)
    "miccia-best-": [5000, 25000, 30000],   // capitan-miccia (stima)
    "pinguino-best-": [5000, 20000, 22000],   // pinguino (stima)
    "conquista-best-": [5000, 20000, 22000],   // conquista (stima)
    "incursione-best-": [3000, 10000, 12000],   // incursione (stima)
    "saloon-best-": [2000, 6000, 7000],   // saloon (stima)
    "scavatore-best-": [3000, 12000, 14000],   // scavatore (stima)
    "scimmione-best-": [3000, 10000, 12000],   // scimmione (stima)
    "giostra-best-": [5000, 20000, 22000],   // giostra-volante (stima)
    "saltacubi-best-": [3000, 10000, 12000],   // saltacubi (stima)
    "millepiedi-best-": [3000, 10000, 12000],   // millepiedi (stima)
    "hockey-best-": [1500, 2500, 2500],   // hockey-da-tavolo (stima)
    "allunaggio-best-": [800, 2500, 2500],   // allunaggio (stima)
    "palloni-best-": [3000, 12000, 14000],   // scoppia-palloni (stima)
    "flipper-best-": [20000, 60000, 70000],   // flipper (stima)
    "bombe-best-": [3000, 10000, 12000],   // mattoni-e-bombe (stima)
    "asteroidi-best-": [5000, 15000, 18000],   // asteroidi (stima)
    "castello-best-": [10000, 30000, 35000],   // difesa-del-castello (stima)
    "scie-best-": [1500, 5000, 6000],   // scie-di-luce (stima)
    "bolle-best-": [5000, 20000, 22000],   // spara-bolle (stima)
    "meteore-best-": [3000, 15000, 18000],   // pioggia-di-meteore (stima)
    "rana-best-": [2000, 8000, 9000],   // rana-in-fuga (stima)
    "spaccamattoni-best-": [5000, 20000, 22000],   // spaccamattoni (stima)
    "blocchi-best-": [3000, 15000, 25000],   // blocchi-cadenti (stima)
    "pugni-best-": [5000, 20000, 22000],   // pugni-di-fuoco (stima)
    "space-defender-hiscore": [5000, 20000, 22000],   // space-defender (stima)
    "crystal-wars-best-": [900, 600, 600, 1],   // crystal-wars (stima)
    "volpe-saltante-best-": [5000, 15000, 18000],   // volpe-saltante (stima)
    "lama-doro-best-": [3000, 10000, 12000],   // lama-d-oro (stima)
    "corsa-tramonto-best-": [240, 200, 190, 1],   // corsa-al-tramonto (stima)
    "topo-goloso-best-": [3000, 10000, 12000],   // topo-goloso (stima)
  };
  const TIERS = [
    { id: "b", name: "Bronzo", icon: "🥉", diffs: ["facile", "normale", "difficile"], where: "in qualsiasi difficoltà" },
    { id: "s", name: "Argento", icon: "🥈", diffs: ["normale", "difficile"], where: "a Normale o Difficile" },
    { id: "g", name: "Oro", icon: "🥇", diffs: ["difficile"], where: "a Difficile" },
  ];
  const get = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const keyFor = (base, sd, d) => (sd ? (d === "normale" ? base : `${base}-${d}`) : base + d);
  function fmt(v, t) {
    if (!t) return Math.round(v).toLocaleString("it-IT");
    const m = Math.floor(v / 60), s = Math.round(v - m * 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  }
  // the trophies of one game, worked out from its saved records
  function status(base, sd) {
    const row = DATA[base];
    if (!row) return null;
    const t = !!row[3];
    const best = {};
    for (const d of ["facile", "normale", "difficile"]) {
      const v = parseFloat(get(keyFor(base, sd, d)));
      best[d] = v > 0 ? v : null;
    }
    return TIERS.map((tier, i) => {
      const goal = row[i];
      const got = tier.diffs.some((d) => best[d] !== null && (t ? best[d] <= goal : best[d] >= goal));
      return { ...tier, goal, got, text: `${t ? "entro " : ""}${fmt(goal, t)}${t ? "" : " punti"} ${tier.where}` };
    });
  }
  function played(base, sd) { return ["facile", "normale", "difficile"].some((d) => parseFloat(get(keyFor(base, sd, d))) > 0); }
  window.SalaTrofei = { DATA, TIERS, status, played, keyFor, count: () => Object.keys(DATA).length * 3 };
})();
