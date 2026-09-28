# Game Arcade Library

Raccolta di giochi arcade per il browser. Ogni gioco è un singolo file HTML senza dipendenze: basta aprirlo.

## 🕹️ Sala Giochi — `index.html`

Apri `index.html` nella cartella principale per la pagina di raccolta: mostra tutti i 54 giochi con copertina, genere, comandi e i tuoi record per ogni difficoltà (Facile, Normale, Difficile). Tocca «Gioca» per avviare un gioco; in ogni gioco il pulsante «← Sala Giochi» in alto a sinistra (visibile nei menu) riporta alla raccolta.

**Iniziali del record:** quando batti un record compare la schermata da sala giochi per inserire le tue tre iniziali (frecce ↑ ↓ per cambiare lettera, ← → per spostarti, oppure scrivile direttamente; su telefono i tasti ▲ ▼ e OK). Le iniziali vengono salvate insieme al record e compaiono nei menu del gioco e nella Sala Giochi. Il codice è condiviso da tutti i giochi in `shared/iniziali.js`.

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

### 🏍️ Scie di Luce — `games/scie-di-luce/index.html`

Duello di moto di luce in stile *Tron*: ogni moto lascia dietro di sé una scia che nessuno può attraversare. Chi tocca una scia (anche la propria) o il bordo dell'arena è fuori; l'ultimo in pista vince il round.

- **1 giocatore:** round dopo round contro moto guidate dal computer, sempre più numerose (fino a tre) e veloci; perdi una vita quando vieni eliminato. Punti per ogni tratto percorso, per ogni avversario che si schianta e per ogni round vinto
- **2 giocatori sullo stesso dispositivo:** sfida al meglio dei 5 round (vince chi arriva a 3)
- **Turbo ⚡:** accelera per un attimo, poi si ricarica (barra sotto il punteggio)
- **Difficoltà:** Facile (5 vite, moto più lente, il computer sbaglia spesso), Normale (3 vite, il computer calcola lo spazio libero prima di girare), Difficile (moto veloci, il computer prova a tagliarti la strada e usa il turbo); in 2 giocatori la difficoltà cambia la velocità
- **Comandi (1 giocatore):** frecce o `W` `A` `S` `D` per girare · `SPAZIO` turbo · `P` pausa
- **Comandi (2 giocatori):** Giocatore 1 `W` `A` `S` `D` + `Q` turbo · Giocatore 2 frecce + `INVIO` o `L` turbo
- **Touch:** ⟲ ⟳ per girare e ⚡ per il turbo (in 2 giocatori ognuno ha i suoi pulsanti, a sinistra e a destra), oppure scorri il dito sull'arena

Per giocare apri `games/scie-di-luce/index.html` nel browser.

### 🏰 Difesa del Castello — `games/difesa-del-castello/index.html`

Tower defense: goblin, lupi, orchi, troll e pipistrelli marciano lungo il sentiero verso il castello. Costruisci torri sul prato, potenziale e resisti a 8 ondate su ciascuna delle tre mappe (Il Prato, Il Deserto, La Valle Innevata); all'ultima ondata di ogni mappa arriva un **drago**.

- **Torri:** Arcieri (veloci, un bersaglio), Cannone (colpo ad area, non colpisce chi vola), Gelo (rallenta i nemici), Fulmine (salta da un nemico all'altro); Gelo e Fulmine ignorano l'armatura dei troll e del drago. Ogni torre si potenzia fino al livello 3 e si può vendere recuperando parte delle monete
- **Nemici:** goblin, lupi velocissimi, orchi resistenti, troll corazzati, pipistrelli volanti e il drago; diventano più forti a ogni ondata e a ogni mappa
- **Monete:** si guadagnano eliminando i nemici e superando le ondate; chiamare l'ondata in anticipo dà monete extra
- **Vite:** ogni nemico che raggiunge il castello costa una vita (il drago ne costa 5)
- **Difficoltà:** Facile (30 vite, 240 monete, nemici più deboli), Normale (20 vite, 180 monete), Difficile (15 vite, 150 monete, nemici più resistenti); ogni difficoltà ha il suo record
- **Comandi:** scegli una torre nella barra in basso (o tasti `1`–`4`) e clicca un prato libero; clicca una torre per potenziarla (`U`) o venderla (`V`); `SPAZIO` fa partire l'ondata, `F` raddoppia la velocità, `P` pausa
- **Touch:** scegli una torre, tocca un prato libero per vedere il raggio e tocca di nuovo per costruire

Per giocare apri `games/difesa-del-castello/index.html` nel browser.

### ☄️ Asteroidi — `games/asteroidi/index.html`

Sparatutto vettoriale in stile *Asteroids*: la tua navicella è in un campo di asteroidi e deve distruggerli tutti. I bordi dello schermo sono collegati: esci da un lato e rientri dall'altro.

- **Asteroidi:** quelli grandi si spezzano in due medi, i medi in due piccoli, sempre più veloci (20, 50 e 100 punti)
- **Dischi volanti:** quello grande spara a caso (200 punti), quello piccolo mira alla navicella (1000 punti); anche gli asteroidi possono distruggerli
- **Iperspazio:** fa sparire la navicella e la fa ricomparire in un punto a caso, per le situazioni disperate
- **Ondate:** a ogni ondata più asteroidi e più veloci; il battito di sottofondo accelera man mano che ne restano pochi; vita extra ogni 10.000 punti
- **Difficoltà:** Facile (5 vite, asteroidi lenti, dischi volanti meno precisi), Normale (3 vite), Difficile (asteroidi veloci e più numerosi, dischi volanti precisissimi); ogni difficoltà ha il suo record
- **Comandi:** `←` `→` ruota · `↑` spinta · `SPAZIO` fuoco · `SHIFT` o `H` iperspazio · `P` pausa
- **Touch:** ⟲ ⟳ per ruotare, ▲ spinta, ● fuoco (tieni premuto per sparare di continuo), ✧ iperspazio

Per giocare apri `games/asteroidi/index.html` nel browser.

### 💣 Mattoni e Bombe — `games/mattoni-e-bombe/index.html`

Battaglia a bombe in stile *Bomberman*: quattro bombaroli in un'arena piena di mattoni. Piazza le bombe per far saltare i mattoni e aprirti la strada, raccogli i potenziamenti e intrappola gli avversari nelle esplosioni, senza restarci tu. L'ultimo in piedi vince il round; vince chi arriva per primo a 3 round.

- **Potenziamenti** (nascosti sotto i mattoni): 💣 una bomba in più alla volta · 🔥 esplosione più lunga · 👟 più velocità
- **Esplosioni:** le fiamme si fermano contro i blocchi di pietra e al primo mattone; una bomba colpita dalle fiamme esplode subito, a catena
- **Morte improvvisa:** dopo 100 secondi l'arena si chiude a spirale
- **1 giocatore:** tu contro tre bombaroli del computer, torneo dopo torneo sempre più veloci; punti per mattoni, potenziamenti, avversari eliminati, round e tornei vinti. La partita finisce quando un avversario vince un torneo
- **2 giocatori sullo stesso dispositivo:** voi due più due bombaroli del computer
- **Difficoltà:** Facile (avversari lenti a reagire che a volte restano intrappolati), Normale (avversari che scappano dalle esplosioni), Difficile (avversari rapidi che ti danno la caccia); ogni difficoltà ha il suo record
- **Comandi (1 giocatore):** frecce o `W` `A` `S` `D` per muoverti · `SPAZIO` bomba · `P` pausa
- **Comandi (2 giocatori):** Giocatore 1 `W` `A` `S` `D` + `Q` o `SPAZIO` · Giocatore 2 frecce + `INVIO` o `L`
- **Touch:** croce direzionale e pulsante 💣 (in 2 giocatori ognuno ha i suoi comandi)

Per giocare apri `games/mattoni-e-bombe/index.html` nel browser.

### 🎡 Flipper — `games/flipper/index.html`

Flipper verticale con tre tavoli da scegliere nel menu: lancia la pallina con la molla e tienila in gioco con le due palette.

- **Luna Park:** tre respingenti (100 punti), tre bersagli abbattibili sulla sinistra e una buca che trattiene la pallina per un attimo (1.500 punti)
- **Abissi Marini:** quattro meduse-respingenti, bersagli sulla destra, la conchiglia che trattiene la pallina e il **vortice** al centro, che fa girare la pallina e dà punti finché ci resta dentro
- **Galassia:** pianeti con gli anelli, una **cometa** che attraversa il tavolo (500 punti) e il **buco nero**, che inghiotte la pallina e la fa uscire dal buco bianco (1.000 punti; ogni tre viaggi **SUPERNOVA** da 5.000). Dopo ogni viaggio il buco nero resta chiuso per qualche secondo
- **In tutti i tavoli:** due fionde, tre corsie luminose in alto e il moltiplicatore fino a ×5; premendo le palette le luci delle corsie scorrono, così puoi allinearle
- **Bersagli:** abbattili tutti per 2.500 punti; la seconda volta scatta la **MULTIBALL** con tre palline in gioco
- **Salvapalla:** subito dopo il lancio, se la pallina cade viene restituita
- **Bonus di fine pallina:** tutto ciò che colpisci accumula un bonus, moltiplicato per il moltiplicatore quando perdi la pallina
- **Difficoltà:** Facile (5 palline, salvapalla di 10 secondi, tavolo meno inclinato), Normale (3 palline, 6 secondi), Difficile (3 palline, 3 secondi, tavolo più ripido); ogni tavolo ha un record per difficoltà, e la Sala Giochi mostra il migliore
- **Comandi:** `←` o `Z` paletta sinistra · `→` o `M` paletta destra · tieni premuto `SPAZIO` o `↓` per caricare la molla e lascia per lanciare · `P` pausa; nel menu `←` `→` cambiano tavolo
- **Touch:** tocca la metà sinistra o destra dello schermo per le palette; per lanciare tieni premuto sulla destra e lascia

Per giocare apri `games/flipper/index.html` nel browser.

### 🎈 Scoppia Palloni — `games/scoppia-palloni/index.html`

Sparatutto in stile *Pang*: palloni giganti rimbalzano davanti ai monumenti di tutto il mondo e tu li fai scoppiare con un arpione sparato verso l'alto.

- **Palloni:** ogni pallone colpito si divide in due più piccoli (quattro misure, da 50 a 200 punti); i più piccoli scoppiano. Se un pallone ti tocca perdi una vita e il livello ricomincia
- **Giro del mondo:** 15 livelli in cinque luoghi (Monte Fuji, Colosseo, Piramidi, Torre Eiffel, Torre di Pisa), ognuno con il suo sfondo e il suo colore dei palloni
- **Piattaforme:** quelle di pietra fermano l'arpione, quelle di vetro si rompono (100 punti)
- **Tempo:** ogni livello ha un tempo limite; i secondi che avanzano valgono 20 punti l'uno
- **Sorprese:** a volte un pallone lascia cadere un oggetto: doppio arpione, arpione fisso (resta appeso al soffitto), pistola a raffica, orologio (ferma i palloni per 5 secondi), scudo (para un colpo), dinamite (divide tutti i palloni fino ai più piccoli), frutta e vita extra
- **2 giocatori:** si gioca in coppia sullo stesso dispositivo, ognuno con il suo punteggio e le sue vite
- **Difficoltà:** Facile (5 vite, palloni più lenti, più tempo e più sorprese), Normale (3 vite), Difficile (3 vite, palloni più veloci, meno tempo); ogni difficoltà ha il suo record
- **Comandi (1 giocatore):** `←` `→` o `A` `D` per muoverti · `SPAZIO`, `↑` o `W` per sparare · `P` pausa
- **Comandi (2 giocatori):** giocatore 1 `A` `D` e `W` o `SPAZIO` · giocatore 2 `←` `→` e `↑` o `INVIO`
- **Touch:** pulsanti ◀ ▶ e ● sullo schermo; in due, ognuno ha i suoi pulsanti ai lati

Per giocare apri `games/scoppia-palloni/index.html` nel browser.

### 🚀 Allunaggio — `games/allunaggio/index.html`

Simulatore di atterraggio in stile *Lunar Lander*: porta il modulo sulle piazzole senza schiantarti, dosando il razzo e il carburante.

- **Pilotaggio:** il razzo spinge nella direzione in cui è inclinato il modulo; ruota per correggere la deriva orizzontale e raddrizzati prima di toccare il suolo
- **Atterraggio:** entrambi i piedi sulla piazzola, modulo quasi dritto e velocità basse (gli indicatori in alto diventano rossi quando sei troppo veloce o inclinato). Vicino al suolo la visuale fa uno zoom automatico
- **Punti:** 50 × il moltiplicatore della piazzola (×2, ×3, ×4, ×5: le piazzole piccole valgono di più); l'atterraggio perfetto vale il doppio e dà più carburante
- **Carburante:** è la tua unica risorsa: ogni atterraggio ne restituisce un po', ogni schianto ne costa 150. Quando finisce la missione è chiusa
- **Quattro mondi:** Luna (nessun vento), Marte (vento leggero), Io (gravità forte, con Giove nel cielo) e Titano (raffiche forti, con Saturno), tre stage ciascuno; poi il giro ricomincia con la gravità più forte
- **Difficoltà:** Facile (1.500 di carburante, gravità ridotta), Normale (1.000), Difficile (800, gravità più forte, atterraggi più delicati); ogni difficoltà ha il suo record
- **Comandi:** `←` `→` o `A` `D` ruota · `↑`, `W` o `SPAZIO` razzo · `↓` o `S` raddrizza il modulo · `P` pausa
- **Touch:** ⟲ ⟳ per ruotare, ◎ per raddrizzare, ▲ per il razzo

Per giocare apri `games/allunaggio/index.html` nel browser.

### 🏒 Hockey da Tavolo — `games/hockey-da-tavolo/index.html`

L'air hockey delle sale giochi su un tavolo verticale: il disco scivola sul cuscino d'aria, rimbalza sulle sponde e va mandato nella porta avversaria.

- **Contro il computer:** tre difficoltà (Facile, Normale, Difficile). Il computer attacca quando il disco è nella sua metà, prova i tiri di sponda, mira dal lato lasciato scoperto e difende la porta prevedendo i rimbalzi
- **2 giocatori:** sullo stesso dispositivo; su tablet o telefono ognuno trascina la sua racchetta nella sua metà del tavolo, e le scritte si girano verso chi gioca in alto
- **Opzioni:** partite a 5, 7 o 9 gol e la modalità **2 dischi**, con due dischi in gioco contemporaneamente
- **Record:** contro il computer ogni partita vinta dà punti in base allo scarto, ai gol segnati e alla velocità; ogni difficoltà ha il suo record
- **Comandi:** mouse (senza bisogno di cliccare), oppure frecce o `W` `A` `S` `D` · in 2 giocatori il blu usa le frecce e il rosso `W` `A` `S` `D` · `P` pausa
- **Touch:** trascina il dito per muovere la racchetta

Per giocare apri `games/hockey-da-tavolo/index.html` nel browser.

### 🐛 Millepiedi — `games/millepiedi/index.html`

Sparatutto in stile *Centipede*: un millepiedi scende a zigzag in un campo di funghi e tu, in fondo allo schermo, gli spari contro.

- **Il millepiedi:** avanza in orizzontale e ogni volta che sbatte contro un fungo o il bordo scende di una fila. Ogni segmento colpito diventa un fungo e spezza il millepiedi in due: il pezzo dietro prosegue con una testa nuova (testa 100 punti, segmento 10)
- **Funghi:** servono quattro colpi per distruggerli (1 punto). Quando perdi una vita, i funghi danneggiati vengono riparati e valgono 5 punti l'uno
- **Ragno:** rimbalza a zigzag nella tua zona e mangia i funghi; vale 300, 600 o 900 punti a seconda di quanto è vicino quando lo colpisci
- **Pulce:** dalla seconda ondata, se nella tua zona ci sono pochi funghi, cade dall'alto seminandone di nuovi; servono due colpi (200 punti)
- **Scorpione:** dalla terza ondata attraversa il campo e avvelena i funghi: il millepiedi che li tocca piomba dritto verso di te (1000 punti)
- **Ondate:** a ogni ondata cambiano i colori, il millepiedi è più veloce e arrivano teste sciolte in più; se il millepiedi raggiunge il fondo, nuove teste entrano dai lati
- **Vite:** vita extra ogni 12.000 punti
- **Difficoltà:** Facile (5 vite, millepiedi lento), Normale (3 vite), Difficile (3 vite, millepiedi veloce, più funghi, ragni scatenati); ogni difficoltà ha il suo record
- **Comandi:** mouse per muoverti e clic (tenuto) per sparare, oppure frecce o `W` `A` `S` `D` e `SPAZIO` · `P` pausa
- **Touch:** trascina il dito ovunque sullo schermo per muoverti, come una trackball; finché il dito è appoggiato spari

Per giocare apri `games/millepiedi/index.html` nel browser.

### 🟧 Saltacubi — `games/saltacubi/index.html`

Gioco isometrico in stile *Q\*bert*: salta di cubo in cubo lungo una piramide di 28 cubi e cambia il colore di tutte le facce superiori.

- **Livelli:** livello 1, basta un salto per cubo; livello 2, servono due salti (c'è un colore intermedio); livello 3, risaltare su un cubo finito lo fa tornare indietro; livello 4, due salti e il ritorno indietro. Ogni livello ha quattro giri con colori diversi, poi si ricomincia più veloci
- **Nemici:** le palle rosse rimbalzano giù dalla cima; la palla viola arrivata in fondo diventa **Coily**, il serpente che ti insegue
- **Dischi volanti:** ai lati della piramide; saltaci sopra per tornare in cima. Se Coily ti sta inseguendo, ti segue nel vuoto (500 punti). I dischi non usati valgono 50 punti a fine giro
- **Amici e disturbatori:** la palla verde congela tutti i nemici per qualche secondo; **Sam** rimette i colori com'erano, ma se lo prendi vale 300 punti
- **Punti:** 25 per cubo colorato, bonus a fine giro che cresce di giro in giro, vita extra a 8.000 punti e poi ogni 14.000
- **Difficoltà:** Facile (5 vite, nemici lenti e meno numerosi), Normale (3 vite), Difficile (3 vite, nemici veloci e numerosi); ogni difficoltà ha il suo record
- **Comandi:** le frecce sono ruotate di 45° come nel cabinato: `↑` su a destra, `→` giù a destra, `↓` giù a sinistra, `←` su a sinistra; in alternativa `Q` `E` `Z` `C` o il tastierino `7` `9` `1` `3` · `P` pausa
- **Touch:** quattro tasti in diagonale, oppure tocca lo schermo dalla parte verso cui vuoi saltare

Per giocare apri `games/saltacubi/index.html` nel browser.

### 🦤 Giostra Volante — `games/giostra-volante/index.html`

Duelli in volo in stile *Joust*: in sella a uno struzzo volante sbatti le ali per salire e sfidi i cavalieri nemici sopra un lago di lava.

- **La giostra:** quando due cavalieri si scontrano vince chi ha la lancia più in alto; alla stessa altezza si rimbalza entrambi
- **Nemici:** Predone rosso (500), Cacciatore grigio (750) e Signore Oscuro blu (1500), sempre più veloci e furbi
- **Uova:** ogni nemico disarcionato diventa un uovo. Raccoglilo (250, 500, 750, 1000 punti di fila, più 500 se lo prendi al volo) prima che si schiuda: altrimenti ne esce un cavaliere di grado superiore
- **Pericoli:** la lava sul fondo; dall'ondata 3 la mano del troll esce dalla lava e afferra chi vola basso; se un'ondata dura troppo arriva lo pterodattilo, che si abbatte solo colpendolo dritto nel becco
- **Ondate speciali:** ogni cinque ondate c'è l'ondata delle uova, e alcune ondate di sopravvivenza danno 3.000 punti se nessuno perde una vita
- **Schermo:** i bordi sono collegati, uscendo da un lato si rientra dall'altro
- **2 giocatori:** in cooperativa sullo stesso dispositivo, ognuno con il suo punteggio e le sue vite; vita extra ogni 20.000 punti
- **Difficoltà:** Facile (6 vite, nemici più lenti), Normale (4 vite), Difficile (3 vite, nemici veloci, uova che si schiudono in fretta); ogni difficoltà ha il suo record
- **Comandi:** 1 giocatore: `←` `→` o `A` `D` per girarti e correre, `SPAZIO`, `↑` o `W` per sbattere le ali (tieni premuto per continuare a volare) · 2 giocatori: giocatore 1 `A` `D` e `W`, giocatore 2 `←` `→` e `↑` · `P` pausa
- **Touch:** ◀ ▶ e ▲; in due, ognuno ha i suoi tasti ai lati

Per giocare apri `games/giostra-volante/index.html` nel browser.

### 🦍 Scimmione — `games/scimmione/index.html`

Piattaforme in stile *Donkey Kong*: lo Scimmione ha rapito Paolina e la tiene in cima a un cantiere. Sali lungo travi e scale per salvarla.

- **Le travi (25 m):** lo Scimmione lancia barili che rotolano giù per le travi inclinate e a volte scendono dalle scale. Saltali (100 punti) e arriva in cima da Paolina. I barili che finiscono nel bidone dell'olio fanno nascere dei fuochi che girano per il cantiere
- **I bulloni (100 m):** cammina sui bulloni gialli per toglierli (100 punti ciascuno); quando li hai tolti tutti e otto la struttura cede e lo Scimmione precipita. Dove hai tolto un bullone resta un buco da saltare. I fuochi ti inseguono tra i piani
- **Martello:** afferralo per spaccare barili (300, 500 o 800 punti) e fuochi (500) per qualche secondo; col martello in mano non puoi saltare né salire le scale
- **Cadute:** cadere da troppo in alto è fatale, e le scale rotte non si possono salire
- **Bonus:** il bonus tempo scende di continuo; quello che resta a fine schema si aggiunge al punteggio, e se arriva a zero perdi una vita
- **Livelli:** dopo i due schemi si ricomincia più veloci; vita extra a 10.000 punti e poi ogni 20.000
- **Difficoltà:** Facile (5 vite, barili lenti, più tempo), Normale (3 vite), Difficile (3 vite, barili veloci, più fuochi, meno tempo); ogni difficoltà ha il suo record
- **Comandi:** `←` `→` cammina · `↑` `↓` sali e scendi le scale · `SPAZIO` salta · `P` pausa
- **Touch:** croce direzionale a sinistra e tasto SALTA a destra

Per giocare apri `games/scimmione/index.html` nel browser.

### ⛏️ Scavatore — `games/scavatore/index.html`

Gioco in stile *Dig Dug*: scava gallerie nel sottosuolo e liberalo dai mostri.

- **Scavare:** muovendoti nella terra apri nuove gallerie (10 punti per ogni tratto nuovo); gli strati di terreno cambiano colore con la profondità
- **La pompa:** si spara lungo le gallerie; quando aggancia un nemico continua a premere per gonfiarlo finché scoppia. Se smetti di pompare, si sgonfia e riparte. Più in basso scoppia, più vale (da 200 a 500 punti)
- **Nemici:** Pooka (rosso con gli occhialoni) e Fygar, il drago verde che si ferma e sputa fuoco attraverso la terra; colpito di fianco vale il doppio. Ogni tanto diventano fantasmi e attraversano la terra per raggiungerti. L'ultimo nemico rimasto prova a scappare in superficie
- **Massi:** scava sotto un masso e dopo qualche istante cade: schiaccia i nemici (1.000 punti per uno, 2.500 per due e così via), ma anche te
- **Verdura bonus:** dopo due massi caduti appare al centro una verdura da raccogliere
- **Round:** ogni round ha più nemici e più draghi, e i nemici sono più veloci; vita extra a 10.000 punti e poi ogni 20.000
- **Difficoltà:** Facile (5 vite, nemici lenti), Normale (3 vite), Difficile (3 vite, nemici veloci, fantasmi frequenti); ogni difficoltà ha il suo record
- **Comandi:** frecce o `W` `A` `S` `D` per scavare e muoverti · `SPAZIO` pompa (premi più volte per gonfiare) · `P` pausa
- **Touch:** croce direzionale e tasto POMPA

Per giocare apri `games/scavatore/index.html` nel browser.

### 🍺 Saloon — `games/saloon/index.html`

Gioco del barista in stile *Tapper*: quattro banconi, clienti assetati che avanzano dalla porta e bibite alla spina da far scivolare verso di loro.

- **Servire:** alla spina riempi il boccale e lo lanci lungo il bancone. Il primo cliente assetato lo prende e viene spinto indietro; se esce dalla porta è servito (50 punti), altrimenti beve e torna avanti
- **Boccali vuoti:** chi ha finito di bere rilancia il boccale vuoto verso la spina: prendilo (100 punti) prima che cada dal bancone
- **Mance:** a volte un cliente lascia una moneta sul bancone: raccoglila camminando lungo il bancone (1500 punti) e arrivano le ballerine, che distraggono tutti i clienti per qualche secondo
- **Errori:** perdi una vita se un cliente arriva alla spina, se lanci una bibita che nessuno prende o se cade un boccale vuoto
- **Round:** ogni round ha più clienti, più veloci; ogni quattro round il locale cambia (saloon, stadio, locale rock, stazione spaziale)
- **Difficoltà:** Facile (5 vite, clienti lenti), Normale (3 vite), Difficile (3 vite, clienti veloci e numerosi); ogni difficoltà ha il suo record
- **Comandi:** `↑` `↓` cambia bancone · `←` `→` cammina lungo il bancone · `SPAZIO` riempi e lancia · `P` pausa
- **Touch:** croce a sinistra e tasto SERVI a destra

Per giocare apri `games/saloon/index.html` nel browser.

### ✈️ Incursione — `games/incursione/index.html`

Sparatutto a scorrimento orizzontale in stile *Scramble*: voli a bassa quota oltre le linee nemiche fino alla base segreta.

- **Armi:** il laser spara in avanti, le bombe cadono ad arco sui bersagli a terra (al massimo due in aria)
- **Carburante:** si consuma di continuo; colpisci i serbatoi FUEL per fare rifornimento (150 punti). Se si esaurisce, l'aereo perde quota e precipita
- **Sei settori:** Montagne (missili che decollano), Dischi volanti, Pioggia di meteore (indistruttibili: vanno schivati), Caverna, Labirinto (gallerie strette) e Base nemica. La barra in alto mostra a che punto sei
- **Bersagli:** missili 50 (80 se colpiti in volo), bersagli ? da 100 a 300, dischi volanti 100, base nemica 800 e missione compiuta. Se manchi la base, l'ultimo settore ricomincia
- **Vite:** toccare il terreno, un missile, un disco o una meteora costa una vita e si riparte dall'inizio del settore; vita extra a 10.000 punti e poi ogni 20.000
- **Missioni:** dopo la base si riparte con una nuova missione, più veloce e con un paesaggio diverso
- **Difficoltà:** Facile (5 vite, più carburante, meno missili), Normale (3 vite), Difficile (3 vite, più veloce, il carburante finisce in fretta); ogni difficoltà ha il suo record
- **Comandi:** frecce o `W` `A` `S` `D` per volare · `SPAZIO` o `Z` spara · `X` o `B` bomba · `P` pausa
- **Touch:** croce a sinistra, tasti BOMBA e FUOCO a destra

Per giocare apri `games/incursione/index.html` nel browser.

### 🟪 Conquista — `games/conquista/index.html`

Gioco di territorio in stile *Qix*: conquista il campo tracciando linee, mentre il Qix rimbalza nell'area libera.

- **Tracciare:** il segnalino corre lungo i bordi; tenendo premuto il tasto di tracciamento entri nell'area libera lasciando una linea. Quando la chiudi su un bordo, la zona senza Qix diventa tua
- **Veloce o lenta:** la linea veloce vale 100 punti per ogni 1% conquistato, quella lenta il doppio ma ti lascia esposto più a lungo
- **Pericoli:** il Qix ti distrugge se tocca la linea mentre la disegni; le scintille corrono lungo i bordi; se ti fermi a metà linea parte una miccia che la brucia fino a raggiungerti
- **Livelli:** conquista il 75% del campo per passare al livello successivo (1000 punti per ogni punto percentuale in più); più avanti arrivano un secondo Qix e più scintille, e i colori cambiano
- **Difficoltà:** Facile (5 vite, Qix lento), Normale (3 vite), Difficile (3 vite, Qix veloce, più scintille); ogni difficoltà ha il suo record
- **Comandi:** frecce per muoverti · tieni premuto `SPAZIO` per tracciare veloce, `X` per tracciare lento · `P` pausa
- **Touch:** croce a sinistra, tasti TRACCIA e LENTO a destra

Per giocare apri `games/conquista/index.html` nel browser.

### 🐧 Pinguino di Ghiaccio — `games/pinguino/index.html`

Labirinto di ghiaccio in stile *Pengo*: un pinguino contro le api delle nevi, a colpi di blocchi di ghiaccio.

- **Spingere:** un blocco con spazio libero davanti scivola finché non urta qualcosa e schiaccia le api sul suo cammino (400, 1600, 3200, 6400 punti in un colpo solo). Un blocco bloccato si frantuma (30 punti)
- **Uova:** alcune api dormono dentro uova nascoste nel ghiaccio (lampeggiano all'inizio del livello). Rompendo il blocco distruggi l'uovo (500 punti); ogni volta che un'ape muore ne nasce un'altra da un uovo
- **Il recinto:** spingendo il bordo elettrico stordisci le api che lo toccano; toccando un'ape stordita la elimini (100 punti)
- **Tre diamanti:** metti in fila i tre blocchi di diamante per 10.000 punti (5.000 se toccano il bordo) e stordire tutte le api
- **Api:** inseguono il pinguino e a volte mangiano il ghiaccio per aprirsi la strada; dopo un minuto diventano più veloci
- **Livelli:** finiscono quando tutte le api e le uova sono eliminate; più sei veloce, più bonus prendi (fino a 5.000 sotto i 20 secondi)
- **Difficoltà:** Facile (5 vite, api lente), Normale (3 vite), Difficile (3 vite, api veloci che rompono spesso il ghiaccio); ogni difficoltà ha il suo record
- **Comandi:** frecce o `W` `A` `S` `D` per muoverti · `SPAZIO` per spingere · `P` pausa
- **Touch:** croce a sinistra e tasto SPINGI a destra

Per giocare apri `games/pinguino/index.html` nel browser.

### 💣 Capitan Miccia — `games/capitan-miccia/index.html`

Piattaforme a salti in stile *Bomb Jack*: un supereroe col mantello deve raccogliere tutte le 24 bombe di ogni schermo.

- **Salti e planata:** tieni premuto per saltare altissimo; in aria premi di nuovo e tieni per planare lentamente
- **Miccia accesa:** una bomba alla volta ha la miccia accesa (200 punti invece di 100); prendendola si accende la successiva. Con almeno 20 micce accese nel round arriva un bonus da 10.000 a 50.000 punti
- **Nemici:** mummie che cadono sulle piattaforme e dopo un po' si trasformano in uccelli che ti inseguono in volo
- **Sfera P:** per 6 secondi trasforma i nemici in monete da 100, 200, 300… punti; la rara **sfera E** regala una vita
- **5 scenari:** Egitto, Grecia, Castello, Metropoli e Luna, ognuno con le sue piattaforme; i nemici accelerano a ogni round
- **Difficoltà:** Facile (5 vite, nemici lenti e meno numerosi), Normale, Difficile (nemici veloci e numerosi); record separati per ogni difficoltà
- **Comandi:** ← → per muoverti, SPAZIO/↑/Z per saltare, P per la pausa; su telefono pulsanti ◀ ▶ e SALTA

Per giocare apri `games/capitan-miccia/index.html` nel browser.

### 🍔 Mastro Panino — `games/mastro-panino/index.html`

Piattaforme e scale in stile *Burger Time*: un cuoco deve comporre quattro panini giganti facendo cadere gli ingredienti fino ai piatti.

- **Ingredienti:** cammina da un capo all'altro di pane, insalata, hamburger o fondo del panino per farlo cadere di un piano (50 punti). Se cade su un altro ingrediente, anche quello scende: a catena fino ai piatti
- **Nemici:** wurstel, uova e cetriolini ti inseguono per scale e piani. Schiacciali facendogli cadere addosso un ingrediente (500 punti) o falli salire su un ingrediente prima che cada: vengono portati giù (1.000, 2.000, 4.000…)
- **Pepe:** una spruzzata stordisce per 3 secondi i nemici davanti a te (100 punti), ma le dosi sono contate; ogni livello completato ne regala una
- **Tazzina di caffè:** compare a metà livello; prendila per un pepe in più e fino a 1.500 punti
- **3 cucine:** il Chiosco, la Tavola Calda e il Grand Hotel, con scale e piani diversi; i nemici aumentano a ogni livello
- **Difficoltà:** Facile (5 vite, 7 pepi, nemici lenti e meno numerosi), Normale, Difficile (nemici veloci e numerosi); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per camminare e salire le scale · `SPAZIO` o `Z` per il pepe · `P` pausa
- **Touch:** croce a sinistra e tasto PEPE a destra

Per giocare apri `games/mastro-panino/index.html` nel browser.

### 🐍 Serpentone — `games/serpentone/index.html`

Il classico *Snake* con otto labirinti: guida il serpente affamato senza sbattere contro i muri o morderti la coda.

- **Frutti:** mele, ciliegie, banane, uva e fragole; ognuno allunga il serpente di 3. Valgono 50 + 10 punti per livello, fino a 4 volte tanto se li mangi uno dopo l'altro in fretta
- **Stella d'oro:** compare ogni tanto per pochi secondi e vale 500 punti e più
- **La tana:** dopo 12 frutti si apre una tana; entrandoci passi al giardino successivo con un bonus di 1.000 × livello
- **8 giardini:** il Prato, i Quattro Sassi, il Passaggio, la Croce, le Colonne, le Stanze, la Spirale e il Labirinto. In alcuni i varchi nel bordo ti portano dall'altra parte dello schermo
- **Velocità:** il serpente accelera a ogni livello
- **Difficoltà:** Facile (5 vite, lento), Normale, Difficile (velocissimo); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per girare (si possono memorizzare due svolte di fila) · `P` pausa
- **Touch:** frecce sullo schermo oppure scorri il dito sul gioco

Per giocare apri `games/serpentone/index.html` nel browser.

### 🏢 Scalagrattacieli — `games/scalagrattacieli/index.html`

Arrampicata in stile *Crazy Climber*: scala a mani nude la facciata dei grattacieli fino all'elicottero che ti aspetta sul tetto.

- **Finestre:** puoi salire o spostarti solo verso una finestra aperta. Le tapparelle che scendono (rosse) avvisano che si sta chiudendo: se si chiude mentre la tieni scivoli giù di un piano, se si chiude mentre ci arrivi torni indietro
- **Pericoli:** gli inquilini arrabbiati lanciano vasi di fiori, le travi d'acciaio cadono dall'alto (un «!» rosso avvisa su quali colonne) e i piccioni sganciano i loro regalini
- **Palloncino:** ogni tanto ne sale uno accanto a te; afferralo per 1.000 punti e un passaggio di 5 piani
- **4 edifici:** il Palazzo degli Uffici (24 piani), l'Hotel al Tramonto (30), la Torre di Vetro (36) e il Grattacielo dei Record (42), sempre più stretti verso la cima
- **Punti:** 20 per ogni piano nuovo; in cima bonus di 1.000 × edificio più il bonus tempo che scende mentre sali
- **Difficoltà:** Facile (5 vite, poche finestre dispettose e pochi oggetti), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** tieni premuto ↑ o `W` per salire · ← → per spostarti di finestra · ↓ per scendere · `P` pausa
- **Touch:** ◀ ▶ a sinistra, ▲ ▼ a destra in orizzontale; croce sotto il gioco in verticale

Per giocare apri `games/scalagrattacieli/index.html` nel browser.

### 📰 Lo Strillone — `games/strillone/index.html`

Consegne in bici in stile *Paperboy*: ogni mattina pedali lungo Via dei Tigli e lanci il giornale verso le case a sinistra.

- **Abbonati:** le case colorate (con la bandierina rossa sulla cassetta) aspettano il giornale. Nella cassetta vale 250 punti, sullo zerbino 100
- **Disdette:** a fine giornata chi è rimasto senza giornale, o si ritrova un vetro rotto, disdice. Se nessuno disdice arriva un bonus di 3.000 punti e un nuovo abbonato; se non resta nessun abbonato è game over
- **Case grigie:** non sono abbonate; romperne i vetri vale 100 punti, rovesciare i bidoni 150
- **Pericoli:** idranti, buche, lavori in corso, auto parcheggiate e in arrivo, cani che ti rincorrono e skater che attraversano (un giornale ben tirato li ferma)
- **Giornali:** ne hai 10; raccogli i pacchi sulla strada per rifornirti
- **La settimana:** dal lunedì alla domenica e poi si ricomincia, con sempre più traffico
- **Difficoltà:** Facile (5 vite, strade tranquille), Normale, Difficile (traffico e cani ovunque); record separati per ogni difficoltà
- **Comandi:** ← → per sterzare · ↑ ↓ per accelerare e frenare · `SPAZIO` o `Z` per lanciare · `P` pausa
- **Touch:** croce a sinistra e tasto LANCIA a destra

Per giocare apri `games/strillone/index.html` nel browser.

### 🌀 Vortice — `games/vortice/index.html`

Sparatutto vettoriale in stile *Tempest*: la tua navicella ad artiglio gira sul bordo di un tunnel al neon e spara giù per le corsie.

- **Farfalle (rosse):** salgono cambiando corsia; arrivate in cima ti inseguono lungo il bordo e ti afferrano (150 punti)
- **Cisterne (viola):** colpite o arrivate in cima si dividono in due farfalle (100 punti)
- **Spinosi (verdi):** salgono lasciando una punta nella loro corsia e poi tornano giù (50 punti); le punte si accorciano sparandoci sopra
- **Colpi nemici:** salgono lungo la corsia; si possono abbattere
- **Superzapper:** uno per livello, distrugge tutti i nemici nel tunnel
- **Il tuffo:** quando il tunnel è vuoto ti tuffi nel successivo (bonus 500 × livello): cambia corsia per evitare le punte verdi!
- **8 tunnel:** Cerchio, Quadrato, Croce, V, Stella, Pianura, Triangolo e Onda, poi si ricomincia più veloci
- **Difficoltà:** Facile (5 vite, nemici lenti), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** ← → per girare sul bordo · `SPAZIO` o `Z` per sparare (tieni premuto) · `X` o ↓ superzapper · `P` pausa
- **Touch:** ⟲ ⟳ a sinistra, ZAP e FUOCO a destra

Per giocare apri `games/vortice/index.html` nel browser.

### 🚙 Pattuglia Lunare — `games/pattuglia-lunare/index.html`

Corsa e spari a scorrimento in stile *Moon Patrol*: guida il fuoristrada lunare lungo la strada dal punto A al punto Z.

- **Il cannone:** spara insieme in avanti (contro massi e carri armati) e verso l'alto (contro dischi volanti e bombe)
- **Ostacoli:** crateri piccoli e grandi e mine da saltare; massi da saltare o distruggere (quelli grandi vogliono due colpi); carri armati che sparano proiettili radenti
- **Dal cielo:** dischi volanti che sganciano bombe e bombardieri arancioni le cui bombe aprono nuovi crateri sulla strada
- **Velocità:** accelera o rallenta per saltare al momento giusto e schivare le bombe
- **Punti di controllo:** una lettera ogni tratto; se perdi una vita riparti dall'ultima. Ogni 5 lettere finisce una fase con bonus tempo
- **4 ambientazioni:** il Mare della Tranquillità, il Cratere Copernico, il Lato Oscuro e la Base Nemica, sempre più pericolose
- **Punti:** 50 per ogni salto di un ostacolo, 100 un masso (200 quello grande), 200 un disco volante, 300 un bombardiere, 500 un carro armato
- **Difficoltà:** Facile (5 vite, meno ostacoli e nemici), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** ← → per rallentare e accelerare · ↑ o `SPAZIO` per saltare · `Z` o `X` per sparare · `P` pausa
- **Touch:** ◀ ▶ a sinistra, FUOCO e SALTA a destra

Per giocare apri `games/pattuglia-lunare/index.html` nel browser.

### 🤖 Assalto Robotico — `games/assalto-robotico/index.html`

Sparatutto a due levette in stile *Robotron*: ti muovi in una direzione e spari in un'altra, nell'arena invasa dai robot.

- **Robot rossi:** marciano verso di te, sempre più veloci a ogni ondata (100 punti)
- **Giganti verdi:** indistruttibili; i colpi li respingono soltanto. Vagano per l'arena e schiacciano gli umani
- **Sfere:** fluttuano e generano droni che ti inseguono sparando scintille rimbalzanti (sfera 1.000, drone 150)
- **Ostacoli elettrici:** fermi ma letali al tocco; si possono distruggere (25)
- **La famiglia:** papà, mamma e bimbo vagano chiedendo aiuto; raggiungili per salvarli: 1.000, 2.000… fino a 5.000 punti ciascuno
- **Ondate:** finiscono quando restano solo i giganti e gli ostacoli; bonus 1.000 × ondata
- **Difficoltà:** Facile (5 vite, robot lenti e meno numerosi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** `W` `A` `S` `D` per muoverti · frecce per sparare in 8 direzioni, oppure tieni premuto il mouse per mirare · `P` pausa
- **Touch:** levetta sinistra per muoverti, levetta destra per sparare in qualsiasi direzione

Per giocare apri `games/assalto-robotico/index.html` nel browser.

### 🥋 Torre del Kung Fu — `games/torre-kung-fu/index.html`

Picchiaduro a piani in stile *Kung-Fu Master*: sali la pagoda un piano alla volta, a pugni e calci, contro orde di scagnozzi.

- **Attacchi:** pugno (veloce) e calcio (più lungo); da accovacciato colpiscono in basso, in salto a mezz'aria
- **Afferratori (viola):** ti bloccano e ti tolgono energia; scuotili di dosso premendo più volte ◀ ▶ (100 punti)
- **Nani saltellanti (verdi):** piccoli e rapidi, si colpiscono solo da accovacciati (300)
- **Lanciatori di coltelli (rossi):** tengono le distanze e lanciano coltelli alti (abbassati) o bassi (salta); due colpi per abbatterli (500). I coltelli si possono anche respingere
- **I maestri:** in fondo a ogni piano un boss con la sua barra di energia: il Maestro del Bastone, il Lanciatore di Boomerang, il Gigante, il Mago delle Ombre e il Signore della Torre. Quando lampeggia sta per colpire: abbassati se il colpo è alto, salta se è basso (2.000 × piano)
- **Tempo ed energia:** 90 secondi per piano; il tempo e l'energia avanzati diventano bonus
- **Difficoltà:** Facile (5 vite, nemici lenti, colpi meno dolorosi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** ← → per camminare · ↑ salta · ↓ abbassati · `Z` pugno · `X` calcio · `P` pausa
- **Touch:** croce a sinistra, PUGNO e CALCIO a destra

Per giocare apri `games/torre-kung-fu/index.html` nel browser.

### 🐉 Bolle di Drago — `games/bolle-di-drago/index.html`

Piattaforme e bolle in stile *Bubble Bobble*: un draghetto soffia bolle per catturare i mostri.

- **Bolle:** una bolla appena soffiata che colpisce un mostro lo intrappola; poi sale verso il soffitto. Toccala per farla scoppiare: il mostro diventa frutta da raccogliere
- **Catene:** le bolle che si toccano scoppiano insieme; ogni mostro della catena vale il doppio (1.000, 2.000, 4.000…) e dà frutta più preziosa, dalle ciliegie al diamante
- **Rimbalzi:** tieni premuto SALTA cadendo su una bolla vuota per rimbalzarci sopra e raggiungere i piani alti
- **Piattaforme:** si attraversano saltando dal basso; cadendo dal buco nel pavimento si rientra dall'alto
- **Mostri:** robottini a carica e fantasmi incappucciati che lanciano sassi. Se restano troppo nella bolla scappano, rossi e più veloci
- **Sbrigati:** se ci metti troppo i mostri si arrabbiano e poi arriva un fantasma invincibile
- **6 livelli** che poi ricominciano più difficili
- **Difficoltà:** Facile (5 vite, mostri lenti, bolle che tengono di più), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** ← → per camminare · ↑ o `SPAZIO` per saltare · `Z` o `X` per soffiare · `P` pausa
- **Touch:** ◀ ▶ a sinistra, BOLLA e SALTA a destra

Per giocare apri `games/bolle-di-drago/index.html` nel browser.

### 🏁 Rally delle Bandiere — `games/rally-bandiere/index.html`

Labirinto in auto in stile *Rally-X*: la tua auto blu corre in un grande labirinto che scorre, con un radar che mostra tutta la mappa.

- **Bandiere:** raccogline 10 per finire il round; valgono 100, 200, 300… una più dell'altra
- **Bandiere speciali:** la S (viola) raddoppia il valore delle successive, la L (verde) fa il pieno di carburante
- **Carburante:** scende col tempo; a secco l'auto va pianissimo. Quello avanzato a fine round vale 20 punti a goccia
- **Auto rosse:** ti inseguono lungo le strade; lascia una cortina di fumo e chi ci entra va in testacoda (il fumo consuma un po' di carburante)
- **Massi:** fermi sulla strada, da evitare
- **Radar:** sul pannello a destra, con le bandiere (gialle), gli inseguitori (rossi) e te (bianco)
- **4 paesaggi:** campagna, città, deserto e neve, con un labirinto nuovo a ogni round e sempre più inseguitori
- **Difficoltà:** Facile (5 vite, meno inseguitori, più carburante), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per sterzare (l'auto va sempre avanti) · `SPAZIO` o `Z` per il fumo · `P` pausa
- **Touch:** levetta a sinistra (basta un colpetto verso la direzione: la svolta viene fatta al primo incrocio utile) e tasto FUMO a destra

Per giocare apri `games/rally-bandiere/index.html` nel browser.

### ⛏️ Cercatore d'Oro — `games/cercatore-d-oro/index.html`

Rompicapo d'azione in stile *Lode Runner*: raccogli tutto l'oro del livello fra mattoni, scale e corde, senza mai poter saltare.

- **Oro:** 250 punti a lingotto; quando li hai presi tutti compare la scala segreta che porta all'uscita in alto (1.500 punti a livello)
- **Scavare:** apri una buca nel mattone in basso a sinistra o a destra; la buca si richiude da sola dopo qualche secondo
- **Guardie:** ti inseguono su scale e corde e possono rubare l'oro; se cadono in una buca restano intrappolate (75 punti) e lasciano l'oro. Se la buca si richiude con loro dentro, rinascono in alto (altri 75 punti)
- **Corde:** ci si appende e ci si sposta di lato; premi giù per lasciarsi cadere
- **4 livelli** che poi ricominciano più veloci; vita extra a 20.000 punti e poi ogni 30.000
- **Difficoltà:** Facile (5 vite, guardie lente, buche aperte più a lungo), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per muoversi · `Z`/`Q` scava a sinistra · `X`/`E` scava a destra · `P` pausa
- **Touch:** levetta a sinistra per muoversi e due tasti SCAVA (◀ e ▶) a destra

Per giocare apri `games/cercatore-d-oro/index.html` nel browser.

### ✈️ Pilota del Tempo — `games/pilota-del-tempo/index.html`

Duelli aerei in stile *Time Pilot*: il tuo jet resta al centro dello schermo e vira libero a 360° in un cielo senza confini, attraverso cinque epoche.

- **Epoche:** 1910 biplani, 1940 caccia a elica, 1970 elicotteri, 1983 jet supersonici, 2001 UFO nello spazio; poi si ricomincia, più veloci
- **Nemici:** ti inseguono virando e sparano; elicotteri e jet lanciano missili a ricerca (si possono abbattere, 150 punti), gli UFO sparano a ventaglio
- **Squadriglie:** gruppi di 5 aerei in formazione; abbatterli tutti vale 1.000 punti di bonus
- **Gigante dell'epoca:** abbatti abbastanza nemici (la barra in alto) e arriva il dirigibile, il bombardiere, l'elicottero da trasporto, il bombardiere strategico o la nave madre. Una freccia rossa sul bordo indica dove si trova; distruggilo per aprire il varco del tempo
- **Paracadutisti:** volaci sopra per salvarli (500, 1.000, 1.500… punti); la freccia verde li indica. Nel 2001 sono astronauti
- **Vite extra:** a 10.000 punti e poi ogni 40.000
- **Difficoltà:** Facile (5 vite, 28 nemici per epoca, spari lenti), Normale (40 nemici), Difficile (50 nemici, cieli affollati); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per virare, anche in diagonale · `SPAZIO` o `Z` tenuti premuti per sparare · `P` pausa
- **Touch:** levetta analogica a sinistra (spingi verso dove vuoi andare e l'aereo vira da solo) e tasto FUOCO a destra da tenere premuto

Per giocare apri `games/pilota-del-tempo/index.html` nel browser.

### 🐷 Porcellina Arciera — `games/porcellina-arciera/index.html`

Tiro con l'arco in stile *Pooyan*: mamma porcellina sale e scende nella cesta della carrucola e scocca frecce contro i lupi appesi ai palloncini.

- **Round pari, discesa:** i lupi saltano dalla rupe e scendono col palloncino. Se toccano terra si arrampicano sull'impalcatura e aspettano a un piano: se la cesta passa lì davanti, mordono
- **Round dispari, salita:** i lupi salgono dal bosco verso la rupe; quelli che arrivano in cima ti tirano sassi. Alla fine arriva il capobranco, con un pallone che regge 5 frecce (2.000 punti)
- **Frecce:** bucano solo i palloncini, sul lupo rimbalzano; al massimo due in volo
- **Sassi:** i lupi li lanciano a parabola verso la cesta; schivali o abbattili con una freccia (50 punti)
- **Bistecca:** ogni tanto compare in cima alle rotaie; sali a prenderla e il tiro successivo la lancia: ogni lupo che incontra precipita (200, 400, 800… punti)
- **Punti:** lupo in discesa 100, in salita 200; bonus a fine round (1.000 in più se non perdi vite); vita extra a 15.000 punti e poi ogni 30.000
- **Difficoltà:** Facile (5 vite, lupi lenti, pochi sassi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce su/giù o `W`/`S` per muovere la cesta · `SPAZIO` o `Z` per tirare (tenuto premuto tira di continuo) · `P` pausa
- **Touch:** levetta a sinistra (conta solo su e giù; più la spingi, più la cesta va veloce) e tasto TIRA a destra

Per giocare apri `games/porcellina-arciera/index.html` nel browser.

### 🐭 Villa dei Gatti — `games/villa-dei-gatti/index.html`

Piattaforme con trampolini in stile *Mappy*: il topo poliziotto deve recuperare la refurtiva nascosta nei cinque piani della villa dei gatti.

- **Trampolini:** si sale e si scende solo rimbalzando nei tre pozzi; mentre rimbalzi, tieni premuta una direzione per saltare giù al piano che stai attraversando. Al quarto rimbalzo di fila il trampolino si rompe (il colore passa da verde a blu, giallo e rosso)
- **Gatti:** sui trampolini non ti prendono, sui pavimenti sì. Ti inseguono piano per piano e saltano giù dove sei tu
- **Porte:** si aprono e chiudono col tasto PORTA; le porte chiuse fermano i gatti. Aprirla in faccia a un gatto lo stordisce (50 punti)
- **Porte blu:** aprendole parte un'onda che spazza via tutti i gatti del piano: 200, 400, 800… punti
- **Refurtiva:** radio 100, TV 200, computer 300, quadro 400, cassaforte 500; due oggetti uguali presi di fila valgono doppio. Raccoglili tutti per finire il round (bonus per round e tempo)
- **Sbrigati:** dopo un po' arriva un gatto in più e tutti corrono più veloci
- **Difficoltà:** Facile (5 vite, gatti lenti e meno numerosi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce ←→ o `A` `D` per correre e per saltare giù dal trampolino · `SPAZIO` o `Z` apre e chiude la porta · `P` pausa
- **Touch:** levetta a sinistra (conta solo destra e sinistra) e tasto PORTA a destra

Per giocare apri `games/villa-dei-gatti/index.html` nel browser.

### 🛸 Difensore Stellare — `games/difensore-stellare/index.html`

Sparatutto a scorrimento orizzontale in stile *Defender*: la tua astronave sorvola un pianeta che gira in tondo, e il radar in alto mostra tutto quello che succede.

- **Umanoidi:** dieci persone camminano sulla superficie. I rapitori verdi scendono, ne afferrano una e la portano in cielo: se arrivano in cima diventano mutanti velocissimi
- **Salvataggio:** abbatti il rapitore e l'umanoide cade: prendilo al volo (500 punti) e riportalo a terra (altri 500). Se cade da poco in alto si salva da solo (250), da troppo in alto no
- **Pianeta:** se muoiono tutti gli umanoidi il pianeta esplode e restano solo mutanti; ogni 5 ondate arrivano nuovi umanoidi e il pianeta torna com'era
- **Nemici:** rapitori e mutanti (150), bombardieri che lasciano mine (250), capsule che liberano uno sciame di cacciatori (1.000), e i velocissimi inseguitori se ci metti troppo
- **Bombe intelligenti:** distruggono tutto quello che è sullo schermo; ne hai 3 e ne guadagni una con ogni nave extra (a 10.000, 30.000, 60.000, 100.000 punti…)
- **Bonus d'ondata:** punti per ogni umanoide ancora vivo
- **Difficoltà:** Facile (5 navi, alieni lenti che sparano poco), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per volare (spingi nell'altra direzione per girarti) · `SPAZIO` o `Z` per sparare · `B` o `X` per la bomba intelligente · `P` pausa
- **Touch:** levetta a sinistra per volare, tasti FUOCO (da tenere premuto) e BOMBA a destra

Per giocare apri `games/difensore-stellare/index.html` nel browser.

### 🕵️ Agente Segreto — `games/agente-segreto/index.html`

Azione in stile *Elevator Action*: la spia atterra sul tetto di un grattacielo nemico e deve scendere fino al garage, con la visuale che scorre piano per piano.

- **Documenti segreti:** stanno dietro le porte rosse (con la freccetta ▲). Fermati davanti e premi su per entrare (500 punti); servono tutti per poter scappare
- **Ascensori:** tre in fila, e uno in più dal secondo edificio. Quando sei dentro li guidi tu con su e giù; altrimenti vanno su e giù da soli. Un pozzo senza la cabina al tuo piano non si attraversa
- **Agenti:** escono dalle porte blu e sparano alto o basso: abbassati per i colpi alti, salta per quelli bassi. Colpiscili con la pistola (100) o con un calcio volante (150); se ti toccano a terra ti prendono. Anche loro si abbassano per schivare, ma un colpo sparato accovacciato li prende sempre
- **Fuga:** con tutti i documenti raggiungi l'auto nel garage in fondo all'edificio; bonus per l'edificio e per il tempo
- **Edifici:** sempre più alti (fino a 20 piani) e con più documenti; dopo un po' scatta «Sbrigati!» e gli agenti aumentano
- **Difficoltà:** Facile (5 vite, agenti lenti e pochi colpi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce: ←→ cammina · ↑ porta rossa o ascensore su · ↓ abbassati o ascensore giù · `SPAZIO` o `Z` spara · `X` salta · `P` pausa
- **Touch:** levetta a sinistra, tasti SALTA e SPARA a destra

Per giocare apri `games/agente-segreto/index.html` nel browser.

### 🎪 Clown del Circo — `games/clown-del-circo/index.html`

Acrobazie in stile *Circus Charlie*: il clown affronta tre numeri da 100 metri, uno dopo l'altro, poi si ricomincia più veloci.

- **Il leone e i cerchi di fuoco:** in groppa al leone, salta attraverso i cerchi che arrivano (100 punti; quello piccolo col sacchetto vale 500 ma il varco è stretto) e sopra i bracieri (200)
- **Il funambolo:** sulla fune, salta le scimmie che vengono incontro (100); quelle blu corrono il doppio (200)
- **Le palle giganti:** in equilibrio su una palla, salta sulla prossima che arriva rotolando prima che le due si scontrino (150 a salto)
- **Il salto** segue la direzione in cui stai andando: puoi anche fermarti o indietreggiare per aspettare il momento giusto
- **Bonus:** parte da 5.000 e scende col tempo; al podio lo incassi. Se arriva a zero perdi una vita
- **Traguardi:** i cartelli segnano i metri che mancano; se cadi riparti dall'ultimo quarto di percorso
- **Difficoltà:** Facile (5 vite, ostacoli più radi e più lenti), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce ←→ o `A` `D` per avanzare e indietreggiare · `SPAZIO`, `Z` o ↑ per saltare · `P` pausa
- **Touch:** levetta a sinistra (conta solo destra e sinistra) e tasto SALTA a destra

Per giocare apri `games/clown-del-circo/index.html` nel browser.

### 🏃 Campioni d'Atletica — `games/campioni-atletica/index.html`

Gare a pulsanti in stile *Track & Field*: quattro prove allo stadio, una dopo l'altra, con la qualificazione da superare.

- **Correre:** premi i due tasti uno dopo l'altro (sinistro, destro, sinistro…): più sei rapido, più vai veloce. Premere due volte lo stesso tasto fa perdere velocità
- **100 metri:** aspetta lo sparo dopo «Pronti…»: partire prima è falsa partenza, alla terza sei squalificato. Il rivale in rosso corre sul filo della qualificazione
- **Salto in lungo e giavellotto:** prendi velocità, poi tieni premuto SALTA/LANCIA: l'angolo sale finché non rilasci (ideale 40–45°). Superare l'asse o la linea di lancio è nullo; 3 tentativi
- **110 ostacoli:** salta ogni ostacolo al momento giusto; se lo urti perdi metà della velocità
- **Qualificazione:** se la manchi perdi una vita e ripeti la gara. Dopo le quattro gare si ricomincia con misure più difficili
- **Punti:** in base al tempo o alla misura, più 500 per ogni qualificazione
- **Difficoltà:** Facile (5 vite, qualificazioni più facili), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** `Z` e `X` (oppure ← e →) alternati per correre · `SPAZIO` o ↑ per saltare e lanciare (tienilo premuto per l'angolo) · `P` pausa
- **Touch:** tasti SINISTRO e DESTRO per i due pollici, e il tasto giallo al centro per saltare e lanciare

Per giocare apri `games/campioni-atletica/index.html` nel browser.

### 🥊 Guantoni d'Oro — `games/guantoni-d-oro/index.html`

Pugilato in stile *Punch-Out!!*: vedi il ring alle spalle del tuo pugile e affronti cinque avversari, ognuno con il suo stile: Tonio Tartaruga, Gigi Gancio, Mister Montante, Zar Zorro e Il Colosso.

- **Leggere i colpi:** prima di colpire l'avversario carica il guantone, che si illumina. Bianco è un diretto (para o schiva), arancio un gancio (schiva dalla parte opposta al guantone; parando dimezzi il danno), rosso un montante (solo schivata di lato). Alcuni fanno finte
- **Colpire:** la guardia dell'avversario copre il volto o il corpo; tieni su per mirare al volto, altrimenti colpisci al corpo. I pugni sulla guardia stancano (cuori ♥): a zero resti senza fiato per un attimo
- **Contrattacco:** subito dopo una schivata l'avversario è scoperto: il primo colpo fa danni doppi e ti dà una ★. Con le stelle usi il **super montante**, che va sempre a segno
- **Atterramenti:** chi finisce al tappeto ha il conteggio fino a 10; tre atterramenti sono K.O. tecnico. Quando cadi tu, premi i pugni in fretta per rialzarti
- **Incontri:** 3 round da un minuto; se nessuno va K.O. si decide ai punti. Una sconfitta costa una vita e si rifà l'incontro; battuti tutti e cinque, il circuito ricomincia più duro
- **Difficoltà:** Facile (5 vite, avversari più lenti da leggere e meno potenti), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** ← → schiva · ↓ para · ↑ tienilo premuto per mirare al volto · `Z` e `X` pugni sinistro e destro · `SPAZIO` super · `P` pausa
- **Touch:** levetta a sinistra (◀▶ schiva, ▼ para, ▲ volto), tasti SINISTRO, DESTRO e ★ SUPER a destra

Per giocare apri `games/guantoni-d-oro/index.html` nel browser.

### 🛸 Sciame Galattico — `games/sciame-galattico/index.html`

Sparatutto a formazione in stile *Galaga*: api, farfalle e comandanti alieni entrano a spirale, si schierano e poi si tuffano sulla tua nave.

- **Formazione:** 40 alieni per livello. Api (50), farfalle (80) e comandanti verdi (due colpi, 150); abbattuti in picchiata valgono il doppio o più (comandante 400)
- **Picchiate:** gli alieni si staccano dallo schieramento con un mezzo giro e scendono su di te sparando; le farfalle zigzagano
- **Raggio traente:** un comandante può scendere e aprire un raggio: se ci finisci dentro la tua nave viene catturata (perdi una vita) e resta sopra di lui
- **Doppio caccia:** abbatti quel comandante mentre si tuffa e la nave prigioniera torna da te: voli con due caccia affiancati, spari il doppio (1.000 punti). Se lo colpisci mentre è in formazione, la nave è persa. Un colpo nemico fa perdere solo uno dei due caccia
- **Livelli bonus:** al livello 3 e poi ogni 4, quaranta alieni sfilano senza sparare: 100 punti a colpo e 10.000 se li prendi tutti
- **Navi extra:** a 20.000 e 70.000 punti, poi ogni 70.000; a fine partita vedi la precisione di tiro
- **Difficoltà:** Facile (5 navi, tuffi lenti e pochi colpi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce ←→ o `A` `D` per muoverti · `SPAZIO` o `Z` per sparare · `P` pausa
- **Touch:** levetta a sinistra (conta solo destra e sinistra) e tasto FUOCO a destra, da tenere premuto

Per giocare apri `games/sciame-galattico/index.html` nel browser.

### 🦎 Mostro in Città — `games/mostro-in-citta/index.html`

Distruzione in stile *Rampage*: sei Lucertolone, una lucertola alta come un palazzo, e ogni giorno devi radere al suolo i grattacieli della città.

- **Arrampicarsi:** davanti a una facciata premi su per aggrapparti; poi ti muovi in tutte le direzioni sulla facciata, sali fino al tetto o salti giù
- **Pugni:** ogni finestra si crepa al primo pugno e si sfonda al secondo (10 e 50 punti). Con abbastanza danni, o con tutto il piano terra sfondato, il palazzo crolla (100 punti per piano); se ci sei sopra cadi giù
- **Finestre:** soldati che sparano (200 punti se li mangi con un pugno), cittadini che chiedono aiuto e cibo: tutti ti ridanno energia
- **Esercito:** carri armati che sparano proiettili a parabola (a pugni o saltandoci sopra, 500) ed elicotteri che sparano da lontano e poi si avvicinano all'altezza del tuo pugno: è quello il momento di colpirli (due pugni, 500)
- **Energia:** la barra in alto; a zero il mostro si rimpicciolisce e perdi una vita. Finita la città ricevi un bonus e ne recuperi un po'
- **Giorni:** città con più palazzi, più alti, e un esercito sempre più numeroso
- **Difficoltà:** Facile (5 vite, militari meno numerosi e meno dannosi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce per camminare e arrampicarti (un tocco dalla parte opposta ti gira sul posto) · `Z` pugno · `X` o `SPAZIO` salto · `P` pausa
- **Touch:** levetta a sinistra (anche in diagonale sulla facciata), tasti SALTA e PUGNO a destra

Per giocare apri `games/mostro-in-citta/index.html` nel browser.

### ⚡ Labirinto Elettrico — `games/labirinto-elettrico/index.html`

Sparatutto nel labirinto in stile *Berzerk*: sei un intruso nella base dei robot e attraversi una stanza dopo l'altra.

- **Muri elettrificati:** ogni stanza è un labirinto di muri blu che fulminano al contatto. Si esce da una delle porte aperte; quella da cui sei entrato si chiude alle tue spalle
- **Robot:** 50 punti ciascuno. Sparano quando sono allineati con te (in orizzontale, in verticale o in diagonale) e hanno la visuale libera. Di solito aggirano i muri, ma ogni tanto qualcuno distratto ci finisce contro; muoiono anche scontrandosi tra loro o colpiti dai compagni. Ogni due stanze cambiano colore: i gialli non sparano, poi diventano più veloci, sparano di più e imparano a evitare i muri. Ogni tanto ti gridano qualcosa
- **Bonus:** se li abbatti tutti prima di uscire, 10 punti per ogni robot della stanza
- **Faccina:** se resti troppo in una stanza entra dalla porta un sorriso giallo che rimbalza verso di te attraversando i muri. Non si può abbattere: devi scappare
- **Sparare:** tieni premuto il fuoco: resti fermo e spari nella direzione in cui punti (8 direzioni)
- **Vite extra:** a 5.000 punti e poi ogni 10.000
- **Difficoltà:** Facile (5 vite, robot lenti, Faccina arriva più tardi), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per muoverti, anche in diagonale · tieni premuto `SPAZIO` o `Z` e scegli la direzione con le frecce per sparare · `P` pausa
- **Touch:** levetta a 8 direzioni a sinistra e tasto FUOCO a destra (tenendolo premuto resti fermo e spari dove punta la levetta)

Per giocare apri `games/labirinto-elettrico/index.html` nel browser.

### ✈️ Asso dei Cieli — `games/asso-dei-cieli/index.html`

Sparatutto aereo a scorrimento verticale in stile *1942*: decolli dalla portaerei e voli sopra l'oceano, una missione dopo l'altra.

- **Nemici:** caccia verdi (50) che arrivano in colonna, di lato o fanno inversione a U; caccia grigi (80) che sbucano da dietro, annunciati da un «!» in basso; bombardieri (7 colpi, 500) che si fermano e sparano a ventaglio
- **Squadriglia rossa:** cinque caccia rossi (100 l'uno) che fanno un giro della morte; se li abbatti tutti lasciano un POW
- **POW:** P fuoco quadruplo · G due gregari ai lati (ognuno regge un colpo) · L un giro extra · B bomba che abbatte tutto lo schermo · ★ 1.000 punti. Ogni POW vale anche 500 punti
- **Giro della morte:** per un istante sei intoccabile; ne hai 3 per missione (4 a Facile)
- **Fortezza volante:** a fine missione arriva il bombardiere gigante (5.000). Se non lo abbatti in tempo scappa
- **Atterraggio:** si torna sulla portaerei, con un bonus in base alla percentuale di aerei abbattuti (10.000 se li prendi tutti)
- **Aerei extra:** a 20.000 punti e poi ogni 80.000
- **Difficoltà:** Facile (5 aerei, nemici lenti che sparano poco), Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per volare · tieni premuto `SPAZIO` o `Z` per sparare · `X` o `SHIFT` giro della morte · `P` pausa
- **Touch:** levetta analogica a sinistra, tasti GIRO e FUOCO a destra (tieni premuto FUOCO per la raffica)

Per giocare apri `games/asso-dei-cieli/index.html` nel browser.

### 🚗 Caccia su Strada — `games/caccia-su-strada/index.html`

Inseguimento armato a scorrimento verticale in stile *Spy Hunter*: sei un agente al volante di un'auto con la mitragliatrice, su una strada che non finisce mai.

- **La strada:** curve, restringimenti, ponti sul fiume e tratti con lo spartitraffico in mezzo. Se esci dall'asfalto o finisci sullo spartitraffico perdi l'auto
- **Nemici:** tagliagomme (150), che ti affianca e, quando le lame lampeggiano, ti viene addosso; limousine (200, 3 colpi) con il pistolero che si sporge e spara di lato; corazzata (300), che ti sperona e su cui i proiettili rimbalzano: va spinta fuori strada; elicottero (500), che sgancia bombe dove stai per arrivare e si abbatte solo con i missili
- **Auto civili:** non colpirle, costano 250 punti
- **Furgone armi:** infilati nel suo retro per caricare olio (chi ti segue sbanda), fumo (chi ti segue non vede) o missili. Se c'è l'elicottero, carichi i missili
- **Auto di riserva:** all'inizio le auto perse non contano (90 secondi a Facile, 60 a Normale, 40 a Difficile); poi hai le tue auto, e ne guadagni una ogni 10.000 punti
- **Punti:** anche per la strada percorsa
- **Difficoltà:** Facile (4 auto, nemici più lenti, le lame lampeggiano più a lungo), Normale, Difficile (strade più strette, più nemici insieme); record separati per ogni difficoltà
- **Comandi:** `←` `→` per sterzare, `↑` accelera, `↓` frena (anche `W` `A` `S` `D`) · tieni premuto `SPAZIO` o `Z` per sparare · `X` o `SHIFT` arma speciale · `P` pausa
- **Touch:** levetta analogica a sinistra (di lato sterzi, in su acceleri, in giù freni), tasti ARMA e FUOCO a destra

Per giocare apri `games/caccia-su-strada/index.html` nel browser.
