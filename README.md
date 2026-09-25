# Game Arcade Library

Raccolta di giochi arcade per il browser. Ogni gioco è un singolo file HTML senza dipendenze: basta aprirlo.

## 🕹️ Sala Giochi — `index.html`

Apri `index.html` nella cartella principale per la pagina di raccolta: mostra tutti i 12 giochi con copertina, genere, comandi e i tuoi record per ogni difficoltà (Facile, Normale, Difficile). Tocca «Gioca» per avviare un gioco; in ogni gioco il pulsante «← Sala Giochi» in alto a sinistra (visibile nei menu) riporta alla raccolta.

## Giochi

### 🚀 Space Defender — `games/space-defender/index.html`

Sparatutto spaziale a ondate in stile arcade classico.

- **Difficoltà:** scegli tra **Facile** (5 vite, nemici lenti, più power-up), **Normale** (3 vite) e **Difficile** (2 vite, nemici aggressivi) nella schermata iniziale o dopo il game over; ogni difficoltà ha il suo record
- **Comandi (tastiera):** `←` `→` oppure `A` `D` per muoversi, `SPAZIO` per sparare, `P` per la pausa, `INVIO` per iniziare; nel menu `←` `→` o `1` `2` `3` per scegliere la difficoltà
- **Comandi (touch):** tocca una difficoltà per iniziare, poi trascina il dito per muovere la nave; lo sparo è automatico
- **Nemici:** grunt (rosa), zigzag (viola), tank (arancioni, sparano mirato) e un **boss ogni 5 ondate**
- **Power-up:** `S` triplo sparo · `R` fuoco rapido · `O` scudo · `♥` vita extra
- Difficoltà crescente, effetti sonori sintetizzati, record salvati nel browser

Per giocare apri `games/space-defender/index.html` nel browser.

### ⚔️ Guerra dei Cristalli — `games/crystal-wars/index.html`

Strategico in tempo reale (RTS): raccogli cristalli, costruisci la base, addestra un esercito e distruggi tutti gli edifici nemici.

- **Economia:** i lavoratori raccolgono cristalli e li portano al quartier generale; ci sono giacimenti vicino alle basi e al centro della mappa
- **Costruire:** premi «Caserma», «Torre» o «Quartier generale» nel pannello in basso (sempre visibili) e tocca la mappa: il lavoratore più vicino, o quello selezionato, va a costruire
- **Edifici:** Caserma (◆150, addestra soldati e arcieri), Torre (◆100, difesa automatica), Quartier generale (◆400, deposito extra e lavoratori)
- **Unità:** Lavoratore (◆50), Soldato (◆60, robusto, corpo a corpo), Arciere (◆75, colpisce a distanza); massimo 40 unità
- **Avversario:** l'IA raccoglie, costruisce, si difende e attacca a ondate sempre più grandi
- **Difficoltà:** Facile, Normale, Difficile (cambiano economia dell'IA, tempi e dimensione degli attacchi e cristalli iniziali); viene salvato il miglior tempo di vittoria per ciascuna
- **Comandi (mouse/touch):** tocca un'unità per selezionarla, trascina per selezionarne tante, doppio tocco per tutte quelle dello stesso tipo; poi tocca il terreno per muoverle, un nemico per attaccarlo, i cristalli per raccoglierli (con il mouse funziona anche il tasto destro). Con un edificio selezionato, tocca il terreno per impostare il punto di raccolta
- **Tasti:** `C` caserma · `T` torre · `G` quartier generale · `Q` `W` addestra dall'edificio selezionato · `A` seleziona l'esercito · `S` lavoratori inattivi · `H` quartier generale · `Esc` annulla · `P` pausa
- Su telefono è consigliato giocare in orizzontale

Per giocare apri `games/crystal-wars/index.html` nel browser.

### 🦊 Volpe Saltante — `games/volpe-saltante/index.html`

Platform a scorrimento laterale in 4 livelli: Prati verdi, Colline al tramonto, Notte stellata e Il castello.

- **Obiettivo:** raggiungi la bandiera in fondo a ogni livello prima che scada il tempo
- **Boss finale:** alla fine del castello il **Lupo Re** chiude il cancello alle tue spalle. Attacca caricando (se sbatte contro il muro resta stordito), balzando (all'atterraggio crea onde d'urto da saltare) e, quando è ferito, lanciando palle di fuoco. Saltagli in testa per colpirlo: 3 colpi a Facile, 4 a Normale, 6 a Difficile. Sconfitto lui compare la bandiera finale
- **Nemici:** saltaci sopra per schiacciarli (tieni premuto il salto per rimbalzare più in alto); i pipistrelli volano avanti e indietro
- **Da raccogliere:** monete (ogni 50 monete una vita extra), cuori, blocchi «?» da colpire da sotto
- **Ostacoli e aiuti:** burroni, spine, molle che ti lanciano in alto, piattaforme mobili, checkpoint
- **Difficoltà:** Facile (5 vite, 3 cuori, nemici lenti), Normale (3 vite, 2 cuori), Difficile (3 vite, 1 cuore, nemici veloci, niente checkpoint); record salvato per ciascuna
- **Comandi (tastiera):** `←` `→` o `A` `D` per muoversi, `SPAZIO` / `↑` / `W` per saltare (più a lungo tieni premuto, più salti in alto), `P` pausa
- **Comandi (touch):** pulsanti ◀ ▶ in basso a sinistra, tocca la metà destra dello schermo per saltare; meglio in orizzontale

Per giocare apri `games/volpe-saltante/index.html` nel browser.

### ⚔️ Lama d'Oro — `games/lama-d-oro/index.html`

Picchiaduro a scorrimento fantasy in stile *Golden Axe*: attraversa il villaggio in fiamme, la foresta oscura, il castello del Signore dell'Ascia e infine la torre del Re Oscuro.

- **Tre eroi giocabili**, da scegliere nella schermata iniziale:
  - **Guerriero:** equilibrato; magia del **tuono** (fino a 6 pozioni)
  - **Amazzone:** veloce, spada lunga, salta più in alto ma ha meno vita; magia del **fuoco**, la più potente (fino a 6 pozioni)
  - **Nano:** lento e con l'ascia corta, ma colpisce fortissimo e ha più vita; magia del **terremoto**, al massimo già con 4 pozioni

- **Combattimento:** combo di 3 spadate (l'ultima atterra il nemico), salto e attacco in salto
- **Nemici:** soldati, scheletri, cavalieri corazzati e cavalieri del drago; attaccano a gruppi, gli altri aspettano il loro turno
- **Gnomi ladri:** colpiscili per far cadere le pozioni blu. La **magia** usa tutte le pozioni: più ne hai (fino a 6), più fulmini colpiscono tutti i nemici sullo schermo
- **Draghi:** disarciona il cavaliere e sali in sella al draghetto: invece della spada sputi fuoco (se vieni colpito cadi di sella)
- **Boss:** il Signore dell'Ascia (livello 3), con un'enorme ascia, cariche e rinforzi
- **Boss finale:** il **Re Oscuro** (livello 4), molto più difficile: si teletrasporta (e sparisce se lo colpisci troppe volte di fila), lancia sfere oscure che ti inseguono (saltale o distruggile con la spada), evoca fulmini su cerchi che compaiono a terra, richiama scheletri e ha una spadata che atterra. Sotto metà vita diventa più veloce e lancia più incantesimi; la quantità di incantesimi dipende dalla difficoltà
- **Difficoltà:** Facile (5 vite, nemici più deboli, un attaccante alla volta), Normale (3 vite), Difficile (2 vite, nemici più forti, fino a 3 attaccanti); record salvato per ciascuna
- **Menu:** `↑` `↓` per scegliere l'eroe, `←` `→` per la difficoltà, `INVIO` per iniziare (oppure tocca le schede)
- **Tastiera:** frecce o WASD per muoversi, `J`/`Z` spada, `K`/`X`/`SPAZIO` salto, `L`/`C` magia, `P` pausa
- **Touch:** levetta virtuale a sinistra (trascina il dito), pulsanti SPADA, SALTO e MAGIA a destra; meglio in orizzontale

Per giocare apri `games/lama-d-oro/index.html` nel browser.

### 🏎️ Corsa al Tramonto — `games/corsa-al-tramonto/index.html`

Corsa automobilistica arcade in pseudo-3D in stile *OutRun*: guida una decappottabile rossa su strade con curve e saliscendi, tra il traffico, contro il tempo.

- **5 tappe:** Costa del Sole, Deserto Rosso, Passo Alpino, Città di Notte e Autostrada del Tramonto, ognuna con paesaggio e colori propri
- **Checkpoint:** a fine tappa guadagni secondi extra; se il tempo finisce la corsa è persa
- **Guida:** fuori strada rallenti e puoi schiantarti contro palme, cactus, pini ed edifici; tamponare il traffico ti fa perdere velocità (camion compresi)
- **Nitro:** spinta extra di velocità, in numero limitato per corsa
- **Difficoltà:** Facile (più tempo, traffico leggero, 4 nitro), Normale (3 nitro), Difficile (poco tempo, traffico intenso e veloce, 2 nitro); miglior tempo salvato per ciascuna
- **Tastiera:** `↑`/`W` accelera, `↓`/`S` frena, `←` `→` sterza, `SPAZIO` nitro, `P` pausa
- **Touch:** ◀ ▶ a sinistra, GAS, FRENO e NITRO a destra; meglio in orizzontale

Per giocare apri `games/corsa-al-tramonto/index.html` nel browser.

### 🐭 Topo Goloso — `games/topo-goloso/index.html`

Inseguimento nel labirinto in stile *Pac-Man*: guida un topolino che mangia briciole di formaggio, inseguito da quattro gatti.

- **Obiettivo:** mangia tutte le briciole del labirinto per passare al livello successivo (sempre più veloce)
- **Gatti:** ognuno ha il suo carattere, come i fantasmi dell'originale: **Rosso** ti insegue, **Rosa** ti taglia la strada, **Azzurro** lavora in coppia con il Rosso, **Arancio** è imprevedibile. Alternano fasi di caccia e di ritirata negli angoli
- **Formaggio grande:** i gatti diventano blu e scappano; mangiali per 200, 400, 800 e 1600 punti. Quando lampeggiano stanno per tornare pericolosi
- **Bonus:** frutta sotto la casetta dei gatti, tunnel laterali per scappare, vita extra a 10.000 punti
- **Difficoltà:** Facile (5 vite, gatti più lenti, formaggio che dura di più), Normale, Difficile (gatti veloci, formaggio breve); record salvato per ciascuna
- **Comandi:** frecce o WASD, `P` pausa; su telefono croce direzionale o scorrimento del dito sul labirinto (si gioca bene anche in verticale)

Per giocare apri `games/topo-goloso/index.html` nel browser.

### 🔥 Pugni di Fuoco — `games/pugni-di-fuoco/index.html`

Picchiaduro a incontri uno contro uno in stile *Street Fighter*: scegli un lottatore e affronta gli altri quattro, poi il boss finale, il **Maestro Oscuro**. Incontri al meglio dei 3 round, 60 secondi a round.

- **Lottatori:**
  - **Kenji** (karate, equilibrato): Onda del Drago, Pugno del Cielo, super Super Onda
  - **Lina** (kung fu, rapidissima): Calcio Vortice, Calcio Fulmine, super Tempesta di Calci
  - **Bruno** (lotta, lento ma devastante): Carica del Toro, Presa Atomica, super Tuffo del Vulcano
  - **Zara** (ninjutsu, sfuggente): Shuriken, Passo d'Ombra (teletrasporto), super Danza delle Ombre
  - **Tonio** (pugilato elettrico, potente da vicino): Palla di Fulmine, Scarica Elettrica, super Tempesta Elettrica
- **Modalità 2 giocatori (Sfida):** due persone sullo stesso dispositivo scelgono lottatore (anche il Maestro Oscuro) e arena; tastiera divisa (G1: WASD + F G H T, G2: frecce + J K L I) oppure due set di comandi touch, uno per lato dello schermo; conteggio delle vittorie e rivincita
- **Tecnica:** tieni indietro per parare (abbassato per i colpi bassi, in piedi per i salti); pugno o calcio si concatenano in combo e possono essere annullati in speciali; avanti + pugno da vicino è una proiezione; spazzata e speciali atterrano l'avversario
- **Barra super:** si riempie colpendo e venendo colpiti; piena, scatena la super del lottatore
- **Arene:** Il Dojo, Il Mercato Notturno, Il Porto, Tetti della Città, La Piazza e Tempio del Vulcano
- **Difficoltà:** Facile, Normale, Difficile (cambiano riflessi, parate, antiaerei e aggressività del computer); record salvato per ciascuna
- **Tastiera:** frecce o WASD per muoversi, `J` pugno, `K` calcio, `L` speciale (`↓` + `L` seconda speciale), `SPAZIO` super, `P` pausa
- **Touch:** levetta a sinistra, PUGNO, CALCIO, SPECIALE e SUPER a destra; meglio in orizzontale

Per giocare apri `games/pugni-di-fuoco/index.html` nel browser.

### 🧱 Blocchi Cadenti — `games/blocchi-cadenti/index.html`

Puzzle a blocchi che cadono in stile *Tetris*: incastra i sette pezzi e completa le righe orizzontali per farle sparire.

- **Punteggio:** singola 100, doppia 300, tripla 500, **quadrupla** 800 (per il livello); T-spin, combo e bonus «di fila» (×1,5) per quadruple e T-spin consecutivi; +2000 per livello se svuoti tutto il campo
- **Livelli:** ogni 10 righe sali di livello e i blocchi cadono più veloci (fino al livello 20)
- **Aiuti:** pezzo fantasma che mostra dove atterrerà, anteprima dei prossimi pezzi, **scorta** per mettere da parte un pezzo; rotazioni con i «wall kick» moderni
- **Difficoltà:** Facile (caduta più lenta, 5 pezzi in anteprima, più tempo per appoggiare), Normale (3 in anteprima), Difficile (parti dal livello 5 e ogni tanto una fila di detriti sale dal fondo); ogni difficoltà ha il suo record
- **Comandi (tastiera):** `←` `→` muovi · `↓` scendi · `SPAZIO` caduta istantanea · `↑` o `X` ruota · `Z` ruota al contrario · `C` scorta · `P` pausa · `M` musica
- **Comandi (touch):** pulsanti in basso, oppure trascina sul campo per muovere, tocca per ruotare, scorri veloce in giù per far cadere; in verticale scorta e anteprima vanno sopra il campo
- Musica di sottofondo sintetizzata (la melodia popolare russa *Korobeiniki*), attivabile e disattivabile

Per giocare apri `games/blocchi-cadenti/index.html` nel browser.

### 🔨 Spaccamattoni — `games/spaccamattoni/index.html`

Rompi-mattoni in stile *Arkanoid*: guida la racchetta, fai rimbalzare la pallina e abbatti tutti i mattoni di 9 muri, poi affronta il boss finale, **il Guardiano**.

- **Muri:** Benvenuto, Scalini, Fortezza, Rombo, Cuore, Invasori, Colonne, Scacchiera, Labirinto; i mattoni argentati vanno colpiti più volte (sempre di più nei muri avanzati), quelli d'oro non si rompono
- **Il Guardiano:** un blocco gigante che si muove, ti guarda e spara sfere di energia alla racchetta (evitale!); più è ferito, più diventa veloce e spara a ventaglio. Ogni tanto lascia cadere una capsula
- **Capsule:** `E` Allarga · `C` Colla (la pallina si attacca alla racchetta) · `L` Laser · `S` Lento · `M` Multi (tre palline) · `V` Vita
- **Rimbalzi:** l'angolo dipende da dove la pallina colpisce la racchetta; la pallina accelera a ogni colpo
- **Difficoltà:** Facile (5 vite, pallina lenta, racchetta larga), Normale (3 vite), Difficile (pallina veloce, racchetta stretta, Guardiano più resistente); ogni difficoltà ha il suo record; vita extra ogni 25.000 punti
- **Comandi:** mouse per muovere e clic per lanciare/sparare, oppure `←` `→` / `A` `D` e `SPAZIO`; `P` pausa
- **Touch:** trascina il dito in qualsiasi punto dello schermo per muovere la racchetta, tocca per lanciare; con il laser si spara da solo mentre tieni il dito giù. Pensato per giocare in verticale

Per giocare apri `games/spaccamattoni/index.html` nel browser.

### 🐸 Rana in Fuga — `games/rana-in-fuga/index.html`

Gioco di attraversamento in stile *Frogger*: porta cinque ranocchie nelle tane sull'altra riva.

- **La strada:** cinque corsie di auto, camion, trattori e un'auto da corsa velocissima
- **Il fiume:** salta su tronchi e tartarughe (che ti trasportano con la corrente); alcune tartarughe si immergono, e se finisci in acqua o vieni trascinato fuori dallo schermo perdi una vita
- **Le tane:** riempile tutte e cinque per passare al livello successivo; una mosca in una tana vale +200. Dal livello 2 un serpente striscia nell'erba a metà strada, dal livello 3 un coccodrillo si nasconde nelle tane e tutte le tartarughe si immergono; il traffico accelera a ogni livello
- **Tempo:** ogni rana ha un tempo limite; i secondi avanzati diventano punti
- **Punti:** 10 per ogni passo in avanti, 50 + tempo avanzato per ogni tana, 1000 per aver riempito tutte le tane; vita extra ogni 20.000 punti
- **Difficoltà:** Facile (5 vite, traffico lento, 40 secondi), Normale (3 vite, 30 secondi), Difficile (traffico veloce, 25 secondi); ogni difficoltà ha il suo record
- **Comandi:** frecce o `W` `A` `S` `D` per saltare · `P` pausa
- **Touch:** croce direzionale, oppure scorri il dito nella direzione del salto; un tocco sul campo = salto in avanti

Per giocare apri `games/rana-in-fuga/index.html` nel browser.

### ☄️ Pioggia di Meteore — `games/pioggia-di-meteore/index.html`

Gioco di difesa in stile *Missile Command*: una pioggia di meteore sta per colpire sei città, e tu le difendi con i fuochi d'artificio lanciati da tre postazioni.

- **Come funziona:** mira un punto del cielo e il fuoco esplode lì; ogni meteora che attraversa lo scoppio viene distrutta e a sua volta esplode, con possibili reazioni a catena. Anticipa la traiettoria: il fuoco impiega un po' ad arrivare (quello della postazione centrale è più veloce)
- **Fuochi contati:** ogni postazione ne ha un numero limitato per ondata; una postazione colpita resta fuori uso fino all'ondata dopo
- **Ondate:** sempre più meteore e più veloci; poi arrivano meteore che si dividono in volo, comete azzurre che schivano i fuochi e dischi volanti che sganciano meteore
- **Punti:** meteora 25, cometa 125, disco volante 100, moltiplicati per il livello dell'ondata (fino a ×6); a fine ondata bonus per ogni fuoco avanzato e ogni città salva; una città bonus ogni 10.000 punti ricostruisce una città distrutta
- **Fine partita:** quando tutte le città sono state colpite
- **Difficoltà:** Facile (meteore lente, 12 fuochi per postazione), Normale (10 fuochi), Difficile (meteore veloci, 9 fuochi, divisioni già dalla 2ª ondata); ogni difficoltà ha il suo record
- **Comandi:** mouse per mirare e clic per sparare dalla postazione più vicina; `A` `S` `D` sparano dalla postazione sinistra, centrale o destra; senza mouse, frecce per mirare e `SPAZIO` per sparare; `P` pausa
- **Touch:** tocca il cielo dove vuoi far esplodere un fuoco

Per giocare apri `games/pioggia-di-meteore/index.html` nel browser.

### 🫧 Spara Bolle — `games/spara-bolle/index.html`

Puzzle in stile *Puzzle Bobble*: spara bolle colorate verso il soffitto e liberalo prima che scenda troppo.

- **Regole:** quando tre o più bolle dello stesso colore si toccano scoppiano; le bolle che restano senza appiglio al soffitto cadono e valgono ancora più punti
- **Il soffitto:** dopo un certo numero di tiri che non fanno scoppiare nulla scende di una fila; se le bolle superano la linea tratteggiata la partita finisce
- **Aiuti:** mirino a puntini che mostra la traiettoria (anche i rimbalzi sulle pareti) e bolla di riserva da scambiare con quella pronta; ogni colore ha anche un simbolo (cuore, stella, goccia, foglia, luna, sole) per riconoscerlo meglio
- **Livelli:** 12 livelli con forme diverse e sempre più colori (da 3 a 6); dal livello 3 arrivano le **bombe**, che fanno esplodere tutte le bolle vicine; bonus di fine livello più alto se usi pochi tiri
- **Difficoltà:** Facile (mirino lungo, soffitto ogni 10 tiri a vuoto, un colore in meno), Normale (mirino medio, ogni 8 tiri), Difficile (mirino corto, ogni 6 tiri, una fila in più); ogni difficoltà ha il suo record
- **Comandi:** mouse per mirare e clic per sparare, clic destro o `C` per scambiare; oppure `←` `→` per mirare e `SPAZIO` per sparare; `P` pausa
- **Touch:** trascina il dito per mirare e lascialo per sparare (se lo lasci in basso il tiro si annulla); tocca la bolla di riserva per scambiarla

Per giocare apri `games/spara-bolle/index.html` nel browser.
