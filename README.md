# Game Arcade Library

Raccolta di giochi arcade per il browser. Ogni gioco è un singolo file HTML senza dipendenze: basta aprirlo.

## 🕹️ Sala Giochi — `index.html`

Apri `index.html` nella cartella principale per la pagina di raccolta: mostra tutti i 25 giochi con copertina, genere, comandi e i tuoi record per ogni difficoltà (Facile, Normale, Difficile). Tocca «Gioca» per avviare un gioco; in ogni gioco il pulsante «← Sala Giochi» in alto a sinistra (visibile nei menu) riporta alla raccolta.

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
