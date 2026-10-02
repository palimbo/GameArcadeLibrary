# Game Arcade Library

Raccolta di giochi arcade per il browser. Ogni gioco è un singolo file HTML senza dipendenze: basta aprirlo.

## 🕹️ Sala Giochi — `index.html`

Apri `index.html` nella cartella principale per la pagina di raccolta: mostra tutti i 117 giochi con copertina, genere, comandi e i tuoi record per ogni difficoltà (Facile, Normale, Difficile). Tocca «Gioca» per avviare un gioco; in ogni gioco il pulsante «← Sala Giochi» in alto a sinistra (visibile nei menu) riporta alla raccolta.

**Iniziali del record:** quando batti un record compare la schermata da sala giochi per inserire le tue tre iniziali (frecce ↑ ↓ per cambiare lettera, ← → per spostarti, oppure scrivile direttamente; su telefono i tasti ▲ ▼ e OK). Le iniziali vengono salvate insieme al record e compaiono nei menu del gioco e nella Sala Giochi. Il codice è condiviso da tutti i giochi in `shared/iniziali.js`.

**Menu di pausa:** in ogni gioco la pausa offre, oltre a «Continua», anche «Termina partita» (chiude la partita come un normale game over, quindi il punteggio viene conteggiato e, se è un nuovo record, ti chiede le iniziali) ed «Esci alla Sala Giochi» (termina la partita, fa inserire le iniziali se hai battuto un record e poi torna alla raccolta). Anche il pulsante «← Sala Giochi» premuto durante la pausa salva il record prima di uscire.

**Comandi touch: levetta o frecce:** in cima alla Sala Giochi e nel menu di pausa di ogni gioco con la levetta si sceglie se usare la levetta analogica o una croce di frecce. Con le frecce il tocco viene agganciato a una delle otto direzioni (le quattro principali hanno la zona più larga, così le diagonali si prendono solo di proposito) e spinto fino in fondo; la scelta vale per tutti i giochi e resta memorizzata. Funziona anche nei giochi con due levette (la sfida a due di *Pugni di Fuoco*, muovi e spara di *Assalto Robotico*).

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

### 🗝️ Cripta degli Eroi — `games/cripta-degli-eroi/index.html`

Avventura nei sotterranei in stile *Gauntlet*: scendi livello dopo livello in una cripta sempre nuova, a caccia dell'uscita.

- **Eroi:** Guerriero (colpi potenti, corazza robusta), Valchiria (lo scudo para metà dei colpi), Mago (la magia più forte), Elfo (velocissimo, frecce a raffica)
- **Generatori:** mucchi d'ossa che sfornano mostri finché non li distruggi (100 punti per grado; i più forti richiedono più colpi e scendono di grado quando li colpisci)
- **Mostri:** fantasmi che si scagliano su di te, orchi che ti bastonano, demoni che sputano fuoco (dal livello 2), stregoni che svaniscono (dal livello 3). Più alto il grado, più sono forti
- **La vita cala col tempo:** mangia il cibo (+150) e non sparargli, altrimenti lo distruggi! Anche le pozioni si rompono se le colpisci
- **Chiavi e porte:** ogni chiave apre una porta; ce n'è sempre una in più del necessario
- **Pozioni:** usale per spazzare via tutti i mostri in vista e danneggiare i generatori
- **La Morte:** dal livello 4 si aggira nella cripta, attraversa i muri e ti succhia la vita. Solo una pozione la sconfigge (1.000 punti)
- **Difficoltà:** Facile (vita 1.500, mostri più deboli, una pozione iniziale), Normale (vita 1.000), Difficile (vita 800); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per muoverti, anche in diagonale · tieni premuto `SPAZIO` o `Z` per fermarti e sparare nella direzione in cui punti · `X` o `SHIFT` pozione · `P` pausa
- **Touch:** levetta a 8 direzioni a sinistra, tasti MAGIA e FUOCO a destra (tenendo FUOCO resti fermo e spari dove punta la levetta)

Per giocare apri `games/cripta-degli-eroi/index.html` nel browser.

### 🌴 Esploratore della Giungla — `games/esploratore-giungla/index.html`

Avventura a schermate in stile *Pitfall!*: 12 tesori nascosti in una giungla di 40 schermate che gira in tondo, e un tempo limite.

- **Liane:** sopra stagni e pozze di catrame si passa solo dondolando. Salta per aggrapparti, salta di nuovo (o giù) per lasciarla quando sei dall'altra parte
- **Coccodrilli:** salta sulle loro teste quando hanno la bocca chiusa; se la aprono mentre ci sei sopra, ti mangiano
- **Sabbie mobili:** si aprono e si chiudono; attraversa quando sono chiuse
- **Tronchi:** rotolano o stanno fermi; non uccidono, ma ogni botta costa 100 punti
- **Fuoco e serpenti:** vanno saltati
- **Tunnel:** scendi dai buchi con la scala. Sotto ogni schermata ne vale tre in superficie, ma ci sono scorpioni da saltare e muri di mattoni che sbarrano la strada
- **Tesori:** sacco di monete 2.000, lingotto d'argento 3.000, lingotto d'oro 4.000, anello di diamanti 5.000. Si parte da 2.000 punti; trovarli tutti vale 10 punti per ogni secondo rimasto
- **Difficoltà:** Facile (8 minuti, 5 vite, tutto più lento), Normale (6 minuti), Difficile (5 minuti e mezzo, tutto più veloce); record separati per ogni difficoltà
- **Comandi:** `←` `→` per correre · `↑` `↓` per le scale e per lasciare la liana · `SPAZIO` per saltare · `P` pausa
- **Touch:** levetta a sinistra, tasto SALTA a destra

Per giocare apri `games/esploratore-giungla/index.html` nel browser.

### 🏁 Circuito Mini — `games/circuito-mini/index.html`

Corse di macchinine viste dall'alto in stile *Super Sprint*: quattro auto su una pista che sta tutta in uno schermo, tre giri per gara.

- **Circuiti:** L'Ovale, La Chicane, Il Serpente e I Tornanti, uno dopo l'altro; poi si ricomincia, con avversari sempre più veloci
- **Per continuare:** devi arrivare almeno 3° (Facile), 2° (Normale) o 1° (Difficile)
- **Arrivo:** 1° 1.500 · 2° 900 · 3° 500 · 4° 200 punti
- **Chiavi inglesi:** 100 punti ciascuna; ogni tre, fra una gara e l'altra scegli un potenziamento: velocità, accelerazione o aderenza (fino a 5 per tipo)
- **Pista:** l'erba ti rallenta molto; dalla seconda gara compaiono l'olio, che ti fa sbandare, e le pozzanghere, che ti frenano. Le auto si urtano e si spingono
- **Difficoltà:** Facile, Normale, Difficile; record separati per ogni difficoltà
- **Comandi:** `←` `→` sterzo · `↑` o `SPAZIO` acceleratore · `↓` freno (da fermo, retromarcia) · `P` pausa
- **Touch:** punta la levetta nella direzione in cui vuoi andare, più la spingi più acceleri; tasto FRENO a destra

Per giocare apri `games/circuito-mini/index.html` nel browser.

### 👑 Quattro Re — `games/quattro-re/index.html`

Battaglia di castelli in stile *Warlords*: quattro castelli agli angoli, ognuno con un re dentro le mura e uno scudo che corre lungo un arco.

- **Il tuo castello:** quello blu in basso a sinistra. Muovi lo scudo per respingere le palle di fuoco prima che sgretolino le tue mura e colpiscano il re
- **Prendi:** tieni premuto per bloccare la palla sullo scudo, lascia per lanciarla nella direzione in cui guarda lo scudo
- **Palle di fuoco:** accelerano durante il round e ogni 25 secondi ne arriva un'altra, fino a tre
- **Round:** l'ultimo re rimasto vince. Se cade il tuo, perdi una vita. Round dopo round gli avversari diventano più bravi
- **Punti:** mattone nemico 10 (se la palla l'hai lanciata tu) · re nemico 500 · round vinto 1.000 più 5 per ogni tuo mattone rimasto
- **Difficoltà:** Facile (3 vite, avversari distratti, palla lenta), Normale (2 vite), Difficile (1 vita, palla veloce); record separati per ogni difficoltà
- **Comandi:** `↑` `←` e `↓` `→` per spostare lo scudo lungo l'arco · tieni premuto `SPAZIO` per bloccare la palla · `P` pausa
- **Touch:** punta la levetta dove vuoi lo scudo (in su o a destra), tasto PRENDI a destra

Per giocare apri `games/quattro-re/index.html` nel browser.

### 🔭 Periscopio — `games/periscopio/index.html`

Battaglia navale a tempo in stile *Sea Wolf*: dal periscopio del tuo sottomarino vedi passare le navi nemiche su tre distanze diverse.

- **Siluri:** il siluro ci mette tempo ad arrivare (e rallenta verso l'orizzonte), quindi devi anticipare il bersaglio. Hai cinque tubi che si ricaricano da soli
- **Navi:** mercantile 100, petroliera 150, cacciatorpediniere 300, motosilurante 500 (velocissima). Valgono ×1,5 a metà strada e ×2 all'orizzonte
- **Colpi di fila:** +50 per ogni nave affondata consecutivamente (fino a +500); un siluro a vuoto azzera la serie
- **Nave ospedale:** bianca con la croce rossa, non colpirla: −500
- **Mine:** galleggiano vicino a te e fermano i siluri
- **Tempo extra:** 20 secondi quando raggiungi 2.500 (Facile), 3.000 (Normale) o 4.000 punti (Difficile)
- **Difficoltà:** Facile (2 minuti, navi lente), Normale (90 secondi), Difficile (75 secondi, navi veloci, più mine e navi ospedale); record separati per ogni difficoltà
- **Comandi:** `←` `→` o `A` `D` per girare il periscopio · `SPAZIO` o `Z` per lanciare · `P` pausa
- **Touch:** levetta a destra e sinistra per il periscopio, tasto FUOCO a destra

Per giocare apri `games/periscopio/index.html` nel browser.

### 🦘 Mamma Canguro — `games/mamma-canguro/index.html`

Piattaforme e pugni in stile *Kangaroo*: le scimmie hanno portato il tuo piccolo in cima all'albero e tu devi salire piano dopo piano per salvarlo.

- **Mele:** le scimmie scendono dagli alberi ai lati e lanciano mele alte (abbassati) o basse (saltale). Puoi anche prenderle a pugni: quelle alte stando in piedi, quelle basse da abbassata
- **Scimmione:** dal secondo livello lascia cadere mele dall'alto; dove stanno per cadere lampeggia un segnale rosso
- **Scimmie a piedi:** dal terzo livello alcune scendono sul piano e vengono verso di te: un pugno e via
- **Frutta:** appesa sopra ogni piano, si prende saltando (mela 100, fragola 200, banana 300, uva 400 secondo il livello)
- **Campanella:** in cima; salta e dalle un pugno per far ricomparire la frutta
- **Bonus:** parte da 3.000 e cala col tempo; salvando il piccolo lo incassi, se arriva a zero perdi una vita
- **Punti:** mela colpita 100 · scimmia 200 · vita extra ogni 20.000
- **Difficoltà:** Facile (5 vite, scimmie lente), Normale (3 vite), Difficile (3 vite, scimmie scatenate); record separati per ogni difficoltà
- **Comandi:** `←` `→` per camminare · `↑` `↓` scale · `↓` abbassati · `SPAZIO` salta · `Z` o `X` pugno · `P` pausa
- **Touch:** levetta a sinistra, tasti SALTA e PUGNO a destra

Per giocare apri `games/mamma-canguro/index.html` nel browser.

### 🔮 Biglia Pazza — `games/biglia-pazza/index.html`

Percorsi con la biglia in stile *Marble Madness*: porta la biglia fino al traguardo a scacchi lungo piste sospese nel vuoto.

- **Inerzia:** la biglia accelera e frena piano; se esce dal pavimento cade e riparte dall'ultimo punto sicuro, ma il tempo continua a correre
- **Percorsi:** Pista di Prova, I Ponti, Il Ghiacciaio, La Fossa e Follia, poi si ricomincia con meno tempo
- **Ostacoli:** ponti stretti, pendenze (le frecce) che ti spingono verso il bordo, ghiaccio dove non si frena, blocchi rialzati su cui rimbalzi
- **Nemici:** le biglie nere ti vengono addosso e ti spingono (se cadono loro, 500 punti); i vermi acidi, se li tocchi, ti sciolgono
- **Tempo:** ogni percorso aggiunge secondi, e quelli che avanzi passano al percorso dopo. Quando finisce il tempo, la partita è finita
- **Punti:** 10 per ogni fila di strada nuova · traguardo 1.000 più 20 per ogni secondo rimasto
- **Difficoltà:** Facile (più tempo, nemici lenti, pendenze dolci), Normale, Difficile (meno tempo, nemici svelti, pendenze ripide); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per spingere la biglia · `P` pausa
- **Touch:** una levetta analogica: più la spingi, più la biglia accelera in quella direzione

Per giocare apri `games/biglia-pazza/index.html` nel browser.

### 🚁 Elisoccorso — `games/elisoccorso/index.html`

Salvataggio in elicottero in stile *Choplifter*: vola oltre il confine, libera i prigionieri e riportali alla base.

- **Missione:** colpisci le baracche (con un missile volando bassi o con una bomba) per aprirle; i prigionieri escono e ti fanno segno. Atterra vicino a loro e corrono a bordo, fino a 16 alla volta. Riportali alla base e atterra sulla piazzola: scendono ed entrano nell'hangar. La missione finisce quando non resta più nessuno da salvare
- **Attenzione ai prigionieri:** atterrare sopra qualcuno lo schiaccia (si scansano se scendi piano), le tue bombe li colpiscono e i colpi dei carri che finiscono a terra pure. Se l'elicottero viene abbattuto, chi è a bordo è perso
- **Nemici:** carri armati (100) che sparano a parabola, da colpire con le bombe o con i missili volando rasoterra; caccia (250) annunciati da un avviso lampeggiante sul bordo dello schermo, che sparano e sganciano bombe se sei vicino a terra, da abbattere con i missili alla loro quota; dalla terza missione mine volanti (200) che ti inseguono, da colpire con missili o bombe
- **Punti:** 200 per ogni prigioniero salvato · a fine missione 50 in più per ciascuno e 3.000 se li hai salvati tutti · un elicottero extra ogni 25.000 punti
- **Missioni:** ogni missione ha più baracche e prigionieri, più carri e più caccia; la mappa in alto mostra base, baracche, prigionieri e nemici
- **Difficoltà:** Facile (4 elicotteri da 4 colpi, nemici lenti e imprecisi), Normale (3 da 3), Difficile (3 da 2, fuoco fitto e caccia frequenti); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per volare (giù per atterrare, su per decollare) · `Spazio` o `J` missile (tieni premuto per sparare di continuo) · `B` o `K` bomba · `P` pausa
- **Touch:** levetta analogica per volare, pulsanti MISSILE (tieni premuto) e BOMBA

Per giocare apri `games/elisoccorso/index.html` nel browser.

### 🛡️ Zona di Battaglia — `games/zona-di-battaglia/index.html`

Battaglia di carri armati in prima persona in stile *Battlezone*: grafica vettoriale verde, radar e una pianura sconfinata piena di ostacoli.

- **Visuale:** sei nella torretta del carro. All'orizzonte montagne e un vulcano in eruzione; in alto il radar mostra i nemici entro 100 metri, e una scritta ti dice se il nemico più vicino è a sinistra, a destra o alle spalle
- **Il colpo:** un proiettile alla volta, dritto davanti a te; il mirino diventa rosso quando un bersaglio è sulla traiettoria
- **Riparo:** piramidi e cubi fermano i proiettili, i tuoi e quelli nemici, e bloccano il carro. I nemici li aggirano e cercano una linea di tiro libera prima di sparare
- **Nemici:** carro armato (1.000), che prima di sparare si ferma e si allinea con te; supercarro (3.000, dalla terza ondata), più veloce e con colpi più rapidi; missile a ricerca (2.000, dalla seconda ondata), che arriva a zig-zag scavalcando gli ostacoli; disco volante (5.000), innocuo e di passaggio
- **Ondate:** ogni ondata chiede di distruggere più nemici (4, poi 6, 8…) e ne mette in campo di più insieme; bonus di 1.000 per il numero dell'ondata · un carro extra ogni 30.000 punti (50.000 a Difficile)
- **Difficoltà:** Facile (5 carri, nemici lenti a mirare e colpi lenti), Normale (3 carri), Difficile (3 carri, fuoco più rapido e missili più frequenti); record separati per ogni difficoltà
- **Comandi:** `↑` `↓` o `W` `S` per avanzare e retrocedere · `←` `→` o `A` `D` per girare · `Spazio` fuoco · `P` pausa
- **Touch:** una levetta analogica (su e giù per muoverti, sinistra e destra per girare) e il pulsante FUOCO

Per giocare apri `games/zona-di-battaglia/index.html` nel browser.

### 🎳 Bowling Strike — `games/bowling-strike/index.html`

Bowling in stile sala giochi: una pista al neon vista da dietro il lanciatore, con la telecamera che segue la boccia fino ai birilli.

- **Il tiro, in tre tocchi:** sposta il lanciatore a destra o a sinistra e premi TIRA; la freccia della mira oscilla, fermala; poi sale e scende la barra della potenza e, intanto, con la levetta dai effetto. Premi TIRA per lanciare
- **Pista vera:** misure reali di pista, boccia e birilli. L'olio copre i primi due terzi della pista: l'effetto fa curvare la boccia soprattutto verso la fine, dove l'olio non c'è più
- **Birilli:** cadono a catena, si spingono tra loro, rimbalzano sulle pareti laterali e finiscono nella buca. Al momento dell'impatto il gioco rallenta per farti vedere lo scontro. Il riquadro in alto a destra mostra quali sono ancora in piedi
- **La tasca:** colpire in pieno il birillo 1 lascia spesso uno split; gli strike nascono entrando tra l'1 e il 3 (o tra l'1 e il 2), meglio se con un po' d'effetto verso il centro
- **Regole:** 10 frame, due tiri per frame; nel decimo un tiro in più se fai strike o spare. Strike vale 10 più i due tiri seguenti, spare 10 più il tiro seguente; partita perfetta 300. Il tabellone segna X, / e -, e il gioco annuncia strike, spare, split, doppio e tacchino
- **Difficoltà:** Facile (mira e potenza lente, traiettoria disegnata fino ai birilli), Normale (solo il primo tratto della traiettoria), Difficile (mira e potenza veloci, nessuna traiettoria); record separati per ogni difficoltà
- **Comandi:** `←` `→` per spostarti e poi per l'effetto · `Spazio` o `Invio` per fermare mira e potenza e lanciare · `P` pausa
- **Touch:** levetta a sinistra e a destra, pulsante TIRA

Per giocare apri `games/bowling-strike/index.html` nel browser.

### 💎 Colonne di Gemme — `games/colonne-di-gemme/index.html`

Rompicapo in stile *Columns*: nel pozzo di un tempio antico scendono colonne di tre gemme da mettere in fila.

- **Le gemme:** rubino, smeraldo, zaffiro, topazio, ametista e corniola, ognuna con una forma diversa (quadrato, esagono, cerchio, triangolo, rombo, ottagono) per riconoscerle anche senza badare al colore
- **Come si gioca:** sposta la colonna, fai scorrere l'ordine delle sue tre gemme e falla scendere. Tre o più gemme uguali in fila, in orizzontale, in verticale o in diagonale, spariscono; quelle sopra ricadono e, se formano altre file, è una catena
- **Colonna magica:** ogni tanto (più spesso quando il pozzo è quasi pieno) scende una colonna che brilla di tutti i colori: dove atterra fa sparire tutte le gemme del colore che tocca
- **Punti:** 10 per gemma × numero della catena × livello, più un premio per le file di quattro o più · 1 punto per riga scesa più in fretta, 2 per riga con la caduta immediata
- **Livelli:** ogni 35 gemme eliminate si sale di livello e la colonna cade più veloce. La partita finisce quando non c'è più spazio dove entrano le colonne; il pozzo si arrossa quando le gemme arrivano in cima
- **Difficoltà:** Facile (5 tipi di gemme, caduta lenta, un'ombra mostra dove atterrerà la colonna), Normale (6 tipi), Difficile (6 tipi, caduta veloce che accelera presto); record separati per ogni difficoltà
- **Comandi:** `←` `→` sposta · `↓` scendi più in fretta · `↑` o `X` cambia l'ordine · `Spazio` caduta immediata · `P` pausa
- **Touch:** levetta (sinistra e destra per spostare, giù per scendere, una spinta decisa in su per la caduta immediata) e i pulsanti CAMBIA e GIÙ

Per giocare apri `games/colonne-di-gemme/index.html` nel browser.

### 🤠 Banca del West — `games/banca-del-west/index.html`

Gioco di riflessi in stile *Bank Panic*: sei lo sceriffo al bancone di una banca con dodici porte disposte in cerchio, e ne vedi tre alla volta.

- **Chi entra:** i clienti (una signora, un signore col cilindro, un minatore, un cowboy) posano il loro sacco d'oro e la porta riceve il suo $ (50); i banditi, col fazzoletto rosso, portano la mano alla fondina ed estraggono: devi sparare prima tu (100, 200 o 300, e 500 se sei fulmineo). Le dita che fremono sulla fondina avvisano che sta per estrarre
- **Attenzione:** mai sparare a un cliente. Dal secondo giorno alcuni clienti hanno un'ombra alle spalle: è un bandito che lo spinge da parte e prende il suo posto. Il ragazzino porta una pila di cappelli: falli saltare uno a uno (100 l'uno), ma non colpire lui
- **Dinamite:** ogni tanto qualcuno la piazza su una porta, di solito una che non stai guardando. La barra in alto mostra dove e quanto manca: raggiungila e colpiscila tre volte (200) prima che esploda
- **La giornata:** finisce quando tutte e dodici le porte hanno ricevuto un deposito, con un bonus per il tempo rimasto. Se il tempo finisce, perdi una vita. Ogni giorno i banditi sono più rapidi
- **Si perde una vita** se un bandito spara per primo, se colpisci un cliente o il ragazzino, se la dinamite esplode o se finisce il tempo; una vita extra ogni 30.000 punti
- **Difficoltà:** Facile (5 vite, banditi lenti a estrarre, dinamite con la miccia lunga, più tempo), Normale (3 vite), Difficile (3 vite, banditi fulminei, più dinamite, meno tempo); record separati per ogni difficoltà
- **Comandi:** `←` `→` per girare nella sala · `1` `2` `3` o `J` `K` `L` per sparare alla porta di sinistra, di centro e di destra · anche un clic sulla porta · `P` pausa
- **Touch:** la levetta fa girare la sala; tocca direttamente la porta per sparare (con il telefono in verticale ci sono anche i pulsanti ◀ ● ▶)

Per giocare apri `games/banca-del-west/index.html` nel browser.

### 🏰 Castelli e Cannoni — `games/castelli-e-cannoni/index.html`

Strategia e azione in stile *Rampart*: difendi i tuoi castelli sulla costa dalle navi che arrivano dal mare.

- **Tre fasi per turno:** in **battaglia** muovi il mirino e spari con i cannoni alle navi, mentre loro bombardano le tue mura e i tuoi cannoni; in **riparazione**, a tempo, piazzi pezzi di muro di forme diverse (il prossimo pezzo è in alto) per richiudere le mura; poi piazzi i nuovi **cannoni** (quadrati 2×2) dentro le mura chiuse
- **Mura chiuse:** un castello è salvo se le mura lo circondano senza buchi; anche due blocchi che si toccano solo in diagonale chiudono. Il territorio chiuso si colora di azzurro e la bandiera del castello diventa d'oro. Se alla fine della riparazione non hai chiuso nessun castello perdi una vita, e i muratori rifanno le mura attorno al tuo castello
- **Cannoni:** ogni cannone ha un colpo alla volta e spara solo se all'inizio della battaglia era dentro le mura; le navi possono distruggerlo in tre colpi. Più castelli chiudi, più cannoni ricevi
- **Navi:** galeoni (300) e, dal terzo turno, corazzate con le vele rosse (800, due colpi, tre a Difficile). Ogni turno sono di più, sparano più spesso e la battaglia dura di più; affondarle tutte vale un bonus
- **Punti:** a ogni riparazione riuscita 500 per castello chiuso, 500 in più per il tuo castello e 5 per ogni casella di territorio
- **Difficoltà:** Facile (3 vite, 28 secondi per riparare, navi lente), Normale (2 vite, 22 secondi), Difficile (2 vite, 17 secondi, più navi e corazzate più resistenti); record separati per ogni difficoltà
- **Comandi:** frecce per muovere · `Spazio` piazza il pezzo o il cannone, oppure spara · `X` o `R` ruota il pezzo · col mouse: clic per piazzare o sparare, tasto destro per ruotare · `P` pausa
- **Touch:** tocca il campo per piazzare o per sparare in quel punto; oppure levetta per il cursore e i pulsanti RUOTA e AZIONE

Per giocare apri `games/castelli-e-cannoni/index.html` nel browser.

### 🛡️ Cavaliere in Mutande — `games/cavaliere-in-mutande/index.html`

Piattaforme d'azione in stile *Ghosts 'n Goblins*: un cavaliere va a salvare la principessa rapita da un ciclope.

- **Armatura:** al primo colpo l'armatura vola via e il cavaliere resta in mutande a cuori; al secondo colpo resta solo lo scheletro. Un'armatura nuova si trova nelle giare
- **Quattro mondi:** il Cimitero, la Foresta, il Villaggio Fantasma e il Castello, poi si ricomincia con mostri più veloci. Buche da saltare (nella foresta c'è l'acqua), lapidi, ceppi, barili e colonne che fermano le lance, piattaforme sospese. A metà livello la bandiera segna il punto da cui si riparte
- **Mostri:** zombi che escono dalla terra (100), corvi che si alzano dalle lapidi (100), fantasmi che fluttuano (150), piante carnivore che sputano occhi (200, due colpi) e il diavoletto rosso (1.000), che vola, si ferma sbattendo le ali prima di tuffarsi su di te e schiva le lance
- **Il ciclope:** alla fine di ogni livello, nell'arena dietro il cancello, lancia massi e salta facendo tremare il terreno (5.000); la chiave che lascia apre il livello successivo. Lance e pugnali abbattono in volo occhi e massi
- **Armi e giare:** si parte con la lancia; nelle giare (e da alcuni mostri) si trovano il pugnale (veloce, tre alla volta), la torcia (va ad arco e brucia a terra), l'armatura e sacchi d'oro
- **Tempo:** ogni livello ha un tempo limite; quello che avanza diventa bonus. Una vita extra ogni 30.000 punti
- **Difficoltà:** Facile (5 vite, mostri lenti, più armature, più tempo), Normale (3 vite), Difficile (3 vite, mostri veloci e numerosi, il diavoletto resiste e schiva di più, meno tempo); record separati per ogni difficoltà
- **Comandi:** `←` `→` cammina · `↓` abbassati · `Spazio` o `↑` salta · `Z` `X` o `J` lancia (tieni premuto per lanciare di continuo) · `P` pausa
- **Touch:** levetta (giù per abbassarti) e i pulsanti SALTA e LANCIA

Per giocare apri `games/cavaliere-in-mutande/index.html` nel browser.

### 🛟 Giù per il Fiume — `games/giu-per-il-fiume/index.html`

Discesa in ciambella in stile *Toobin'*: sdraiato su una ciambella rosa, scendi il fiume fino al traguardo a scacchi.

- **Pagaiare:** la corrente ti porta giù; con la levetta o le frecce pagai di lato per sterzare, contro corrente per frenare e verso valle per andare più veloce. La corrente segue le curve del fiume
- **Quattro fiumi:** il Canyon, la Palude (piena di alligatori), la Giungla (più rami e mulinelli) e il Fiume Ghiacciato, poi si ricomincia con la corrente più forte. Nelle **rapide** l'acqua corre più veloce e ci sono più rocce; i **mulinelli** ti trascinano in tondo
- **Cosa buca la ciambella:** i rami spinosi che sporgono dalle rive, il morso degli alligatori e gli ami dei pescatori. Rocce e tronchi galleggianti ti fanno solo rimbalzare
- **Alligatori:** si avvicinano piano, poi si fermano e spalancano le fauci rosse: è il momento di spostarsi, perché scattano verso il punto dove eri. Ogni tanto si immergono (si vedono solo gli occhi). Due lattine li mettono fuori gioco (300)
- **Pescatori:** dalla riva lanciano l'amo vicino a dove stai andando; un cerchio rosso sull'acqua mostra dove cadrà, e poi lo riavvolgono attraversando il fiume. Una lattina li fa cadere in acqua (500)
- **Punti:** porte tra due boe 500, poi 1.000, 1.500… se le passi tutte di fila · forziere 1.000 · all'arrivo 100 per ogni lattina rimasta, un bonus per il tempo e uno per il fiume. Le lattine si raccolgono galleggianti (fino a 9); una ciambella extra ogni 25.000 punti
- **Difficoltà:** Facile (5 ciambelle, corrente lenta, meno pericoli), Normale (3 ciambelle), Difficile (3 ciambelle, corrente forte, alligatori più svelti); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per pagaiare · `Spazio` o `J` lancia una lattina nella direzione delle frecce (verso valle se non ne premi) · `P` pausa
- **Touch:** levetta per pagaiare, pulsante LANCIA (la lattina parte dove punta la levetta)

Per giocare apri `games/giu-per-il-fiume/index.html` nel browser.

### 🛰️ Basi Stellari — `games/basi-stellari/index.html`

Sparatutto spaziale in stile *Bosconian*: la tua astronave vola sempre in avanti in uno spazio che si ripete all'infinito e spara insieme davanti e dietro.

- **Settori:** in ogni settore ci sono da 3 a 8 basi nemiche; il radar in alto a destra mostra le basi (verdi), il capo della formazione (lampeggiante) e la tua posizione, e le frecce ai bordi dello schermo indicano le basi fuori vista. Distrutte tutte, il settore è liberato e ne arriva uno nuovo, con più basi e più mine
- **Basi:** ogni base ha 6 cannoni attorno all'anello, che sparano verso di te. Abbattili tutti (200 l'uno, 1.000 alla fine) oppure infila un colpo nell'apertura dell'anello e centra il nucleo: 1.500 in un colpo solo. Se urti una base rimbalzi
- **Caccia:** verdi (veloci, 50), blu (60) e viola (lenti ma resistono a due colpi, 70). Ogni tanto arriva una **formazione**: colpisci il capo e i gregari si disperdono, fino a 1.500 punti se lo abbatti per primo
- **Pericoli:** asteroidi (10 punti) e mine spaziali (20): colpita, la mina esplode e si porta dietro caccia e asteroidi vicini, ma anche te se sei troppo vicino
- **Condizione:** verde, poi gialla e rossa man mano che resti nel settore (i nemici si fanno più aggressivi); liberare il settore in condizione verde vale 2.000 punti in più. Astronave extra a 20.000 punti e poi ogni 30.000
- **Difficoltà:** Facile (5 astronavi, nemici lenti, colpi radi), Normale (3 astronavi), Difficile (3 astronavi, caccia numerosi, basi che sparano fitto); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per la direzione (anche in diagonale) · `Spazio` o `J` fuoco (tieni premuto) · `P` pausa
- **Touch:** levetta per la direzione, pulsante FUOCO

Per giocare apri `games/basi-stellari/index.html` nel browser.

### 🪖 Sergente di Ferro — `games/sergente-di-ferro/index.html`

Sparatutto a piedi in stile *Commando*: da solo contro un esercito, avanzi verso l'alto (lo schermo non torna mai indietro) fino al forte nemico in cima a ogni zona.

- **Quattro zone:** la Giungla, il Deserto, la Città in Rovina e la Valle Innevata, poi si ricomincia con nemici più rapidi. Alberi, rocce e macerie fermano te e i proiettili; i sacchi di sabbia fermano solo il passo (i colpi ci passano sopra); fiumi e canali si attraversano sui ponti
- **Soldati:** i fucilieri si fermano e mirano (una lineetta rossa e un lampo giallo mostrano dove spareranno) 100 · i granatieri lanciano una granata che cade dove c'è il cerchio rosso lampeggiante 150 · alcuni restano di guardia dietro i sacchi di sabbia finché non ti avvicini, altri ti corrono addosso
- **Bunker:** la feritoia lampeggia di rosso prima di sparare tre colpi a ventaglio; si distruggono con otto colpi o con una granata (500)
- **Jeep:** sulle strade un triangolo «!» avvisa che sta per arrivarne una; ti investe se sei sulla sua strada, si ferma con tre colpi o una granata (300)
- **Prigionieri e granate:** tocca i prigionieri legati al palo per liberarli (1.000); le casse «G» danno 3 granate (fino a 9). Le granate volano oltre ostacoli e sacchi di sabbia e non feriscono te
- **Il forte:** in cima alla zona i difensori escono dal portone; eliminali tutti per conquistare il forte e prendere il bonus (2.000 per zona e 200 per ogni granata rimasta). Vita extra a 20.000 punti e poi ogni 30.000
- **Difficoltà:** Facile (5 vite, nemici più lenti e colpi radi), Normale (3 vite), Difficile (3 vite, nemici numerosi e rapidi di mira); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per camminare (spari nella direzione in cui cammini) · `Spazio` o `J` fuoco (tieni premuto) · `K` o `X` granata · `P` pausa
- **Touch:** levetta per camminare e mirare, pulsanti FUOCO (tieni premuto) e BOMBA

Per giocare apri `games/sergente-di-ferro/index.html` nel browser.

### 🏍️ Rampe e Fango — `games/rampe-e-fango/index.html`

Motocross a salti in stile *Excitebike*: quattro corsie viste di lato, rampe che attraversano tutta la pista e un tempo limite per ogni gara.

- **Gare:** arriva al traguardo a scacchi prima che scada il tempo, poi si passa alla gara successiva (più lunga, con più rampe e un tempo più stretto). Quattro piste: Deserto, Bosco, Stadio di Notte e Cava d'Argilla. Se il tempo finisce, la partita è finita
- **Salti:** in volo inclini la moto; il segno sul terreno dove atterrerai diventa verde quando l'angolo è giusto (atterraggio perfetto +200), giallo se atterri sulla ruota dietro o davanti (rallenti) e rosso se cadrai
- **Turbo:** più veloce del gas, ma scalda il motore: quando la temperatura arriva in fondo il motore si ferma per 3 secondi. Le frecce azzurre su una corsia lo raffreddano di colpo
- **Corsie:** il fango rallenta; sui tronchi cadi, a meno di passarci sopra impennando (tieni ← a terra) o andando piano
- **Rivali:** superarli vale 100; se tamponi un rivale cadi tu, se è lui a venirti addosso da dietro cade lui (+500)
- **Punti:** a ogni traguardo 1.000 per il numero della gara più 100 per ogni secondo avanzato
- **Difficoltà:** Facile (tempo largo, motore che scalda piano, 3 rivali), Normale (4 rivali), Difficile (tempo stretto, motore che scalda in fretta, 5 rivali); record separati per ogni difficoltà
- **Comandi:** `↑` `↓` (o `W` `S`) cambiano corsia · `←` `→` (o `A` `D`) inclinano la moto (a terra `←` impenna) · `Z`, `J` o `Spazio` gas · `X` o `K` turbo · `P` pausa
- **Touch:** levetta (su/giù corsia, sinistra/destra inclina), pulsanti GAS e TURBO da tenere premuti

Per giocare apri `games/rampe-e-fango/index.html` nel browser.

### 🚀 Volo Fantastico — `games/volo-fantastico/index.html`

Sparatutto in finto 3D in stile *Space Harrier*: con il cannone e lo zaino a razzo voli sopra un pavimento a scacchi che ti corre incontro, muovendoti liberamente in tutto lo schermo.

- **Quattro mondi:** la Valle dei Funghi, il Deserto di Cristallo, il Mare di Nuvole e il Pianeta Rosso, poi si ricomincia più veloci. Ogni stage dura una quarantina di secondi (la barra in alto), poi arriva il drago
- **Ostacoli:** funghi, cristalli, nuvole e guglie si schivano o si abbattono con un colpo (50); le colonne sono troppo alte da sorvolare, fermano i colpi e non si distruggono: passa di lato, anche quando arrivano a coppie come un cancello
- **Nemici:** caccia in formazione (200), anelli che girano in tondo e poi si lanciano verso di te (300), rocce volanti (100, due colpi) e robot che camminano verso di te sparando (1.000, cinque colpi)
- **Palle di fuoco:** vanno verso il punto dove eri quando sono partite, quindi basta spostarsi; non si possono abbattere
- **Il drago:** vola a zig-zag in fondo allo stage; solo la testa è vulnerabile, il corpo para i colpi. Apre la bocca prima di sputare fuoco. Sconfitto vale 5.000 più il bonus dello stage. Vita extra ogni 40.000 punti
- **Difficoltà:** Facile (5 vite, nemici più lenti e colpi più radi), Normale (3 vite), Difficile (3 vite, più nemici, colpi più fitti e veloci); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per volare · `Spazio`, `J` o `Z` fuoco (tieni premuto) · `P` pausa. Vicino a terra l'eroe corre
- **Touch:** levetta per volare, pulsante FUOCO da tenere premuto

Per giocare apri `games/volo-fantastico/index.html` nel browser.

### ⚽ Calcetto Arcade — `games/calcetto-arcade/index.html`

Calcio a cinque in stile *Tehkan World Cup*: campo al coperto visto dall'alto, con le sponde tutto intorno (la palla rimbalza e torna in campo), il pallone che si vede sempre e un radar in basso con tutti i giocatori.

- **Il torneo:** a eliminazione diretta contro sei squadre sempre più forti (Gatti Rossi, Lupi Neri, Tori Gialli, Squali Verdi, Aquile Viola e Leoni d'Oro), poi una nuova coppa ancora più dura. Ogni partita dura 1 minuto e 40 secondi: se vinci passi il turno, se pareggi si va al golden goal (chi segna per primo vince), se perdi sei fuori
- **Chi controlli:** sempre il giocatore degli Azzurri più vicino alla palla, segnato dall'anello giallo; quando passi il controllo va a chi riceve (se non muovi la levetta, corre da solo incontro alla palla). Il portiere gioca da solo
- **In attacco:** PASSA verso il compagno a cui punti (senza direzione, al più avanzato e libero) · TIRA verso la porta: con su o giù miri all'angolo alto o basso. Da vicino e sull'angolo il portiere ci arriva a fatica, dal centro o da lontano para quasi sempre; i difensori possono murare il tiro
- **In difesa:** PASSA cambia giocatore · TIRA fa la scivolata che toglie palla all'avversario; standogli attaccato puoi anche rubargliela. Anche gli avversari entrano in scivolata e ti pressano
- **Punti:** gol 1.000 · vittoria 3.000 per il numero del turno · 500 per ogni gol di scarto · porta inviolata 1.000
- **Difficoltà:** Facile (avversari lenti e imprecisi, il tuo portiere para di più), Normale, Difficile (avversari veloci, pressing e tiri precisi); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per correre · `Z` o `J` passa (in difesa: cambia) · `X`, `K` o `Spazio` tira (in difesa: scivolata) · `P` pausa
- **Touch:** levetta per correre, pulsanti PASSA e TIRA

Per giocare apri `games/calcetto-arcade/index.html` nel browser.

### 🐞 Coccinella — `games/coccinella/index.html`

Labirinto in stile *Lady Bug*: una coccinella mangia i fiori di un giardino a labirinto, inseguita dagli insetti che escono uno alla volta dalla tana al centro.

- **I cancelletti:** le sbarre verdi girano attorno al loro perno quando la coccinella le spinge, che passa sempre; gli insetti invece non possono attraversarle. Girandole si apre la strada e si chiude fuori chi insegue. Ogni giardino ha un labirinto nuovo, senza vicoli ciechi
- **La tana:** la luce che corre lungo il bordo del labirinto fa uscire un insetto a ogni giro (quattro per giardino). Quando sono usciti tutti, al centro compare un ortaggio: mangiarlo vale 1.000 punti più 500 per giardino e congela gli insetti per 5 secondi
- **Fiori e cuori:** fiore 10 · cuore 100; se mangi un cuore mentre è blu il moltiplicatore sale a ×2, ×3 e ×5 per tutto il giardino
- **EXTRA:** le lettere valgono 300; prese quando sono gialle si accendono in basso, e completando la parola EXTRA si guadagna una vita
- **Teschi:** veleno per la coccinella, ma anche per gli insetti che ci passano sopra. Non chiudono mai fuori nessuna parte del giardino
- **Giardino pulito:** quando restano solo i teschi, bonus di 1.000 per il numero del giardino e si passa al successivo, con insetti più veloci e più teschi
- **Difficoltà:** Facile (5 vite, insetti lenti e distratti), Normale (3 vite), Difficile (3 vite, insetti veloci che ti inseguono); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D`: la coccinella gira al primo incrocio nella direzione scelta e prosegue da sola · `P` pausa
- **Touch:** una levetta

Per giocare apri `games/coccinella/index.html` nel browser.

### 🌀 Spirale Galattica — `games/spirale-galattica/index.html`

Sparatutto circolare in stile *Gyruss*: l'astronave gira lungo il bordo di un grande cerchio e spara verso il centro, in un viaggio a warp da Nettuno fino alla Terra (Nettuno, Urano, Saturno, Giove, Marte e Terra, poi si ricomincia più veloci).

- **Come ci si muove:** punta la levetta (o le frecce, anche in diagonale) verso il punto del cerchio in cui vuoi andare, e l'astronave ci arriva per la strada più breve
- **Gli stormi:** ogni warp arrivano tre stormi da otto che entrano a spirale, dal centro o da fuori, e si mettono in formazione al centro; da lì alcuni scendono in picchiata verso di te. 150 mentre arrivano, 100 in formazione, 200 in picchiata
- **I colpi nemici:** viaggiano verso il bordo; quelli di chi arriva o scende in picchiata curvano verso il punto dove eri quando sono partiti, quindi basta spostarsi di lato
- **Satelliti:** a volte al centro compaiono tre satelliti collegati: quelli laterali valgono 300, quello centrale che lampeggia regala il doppio colpo (1.000) fino alla prossima vita persa
- **Pianeti e fase bonus:** dopo due warp si arriva sul pianeta (bonus) e parte la fase bonus: 40 nemici che non sparano, 100 l'uno e 10.000 se li abbatti tutti. Navicella extra a 30.000 punti e poi ogni 60.000
- **Difficoltà:** Facile (5 navicelle, nemici un po' più lenti), Normale (3 navicelle), Difficile (3 navicelle, picchiate e colpi fitti); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per scegliere il punto del cerchio · `Spazio`, `J` o `Z` fuoco (tieni premuto) · `P` pausa
- **Touch:** levetta e pulsante FUOCO

Per giocare apri `games/spirale-galattica/index.html` nel browser.

### 🐜 Formichine — `games/formichine/index.html`

Rompicapo in stile *Lemmings*: le formichine escono dalla botola e camminano dritte, senza pensare. Cadono nei burroni, affogano nell'acqua e tornano indietro quando sbattono contro un muro. Il terreno si scava pixel per pixel, tranne l'acciaio.

- **Lo scopo:** in ogni livello bisogna portarne a casa un certo numero (per esempio 7 su 10) prima che scada il tempo. Se non ce la fai perdi un tentativo e rifai il livello; senza tentativi la partita finisce
- **I lavori** (ogni livello ne dà un numero limitato):
  - **SALI**, per sempre: si arrampica sui muri verticali
  - **OMBRELLO**, per sempre: plana dall'alto; senza, un salto troppo alto è fatale
  - **BOMBA**: esplode dopo 5 secondi e apre un buco (serve anche a liberare uno STOP)
  - **STOP**: si ferma a braccia aperte e fa tornare indietro le altre
  - **SCALA**: costruisce 12 gradini in salita, anche sopra i burroni
  - **SFONDA**: scava un tunnel dritto nei muri di terra
  - **SCAVA**: scava in giù
- **Otto livelli:** Basta una buca, Una scala per salire, Il muro, Il ponte, Ombrelli aperti, Scalatori, Giù e poi dritto, Il gran finale; poi si ricomincia con meno tempo. Ogni livello è stato verificato risolvibile su tutte le difficoltà
- **Punti:** 100 per ogni formichina a casa, 5 per ogni secondo avanzato, 2.000 se le salvi tutte
- **Difficoltà:** Facile (5 tentativi, un lavoro in più di ogni tipo, più tempo, bastano meno formichine), Normale (3 tentativi), Difficile (3 tentativi, meno tempo, bisogna salvarne di più); record separati per ogni difficoltà
- **Comandi:** scegli il lavoro (tasti `1`–`7` o clic sulla barra in basso) e clicca una formichina, oppure muovi il mirino con le frecce e premi `Spazio` · `F` velocità ×3 · `B` fa esplodere tutte (quando sono bloccate) · `P` pausa
- **Touch:** tocca il lavoro nella barra e poi la formichina (basta toccarle vicino); meglio col telefono in orizzontale

Per giocare apri `games/formichine/index.html` nel browser.

### 🏰 Fortezza Spaziale — `games/fortezza-spaziale/index.html`

Sparatutto isometrico in stile *Zaxxon*: la nave avanza da sola sopra le fortezze nemiche, e tu la sposti di lato e cambi quota. L'ombra sul pavimento e l'altimetro a destra (con la quota del prossimo varco, della prossima barriera o del prossimo caccia) aiutano a capire a che altezza sei.

- **Il percorso:** una fortezza, un tratto di spazio aperto, una seconda fortezza con il robot guardiano in fondo, poi si ricomincia più veloci
- **Muri:** si passano solo dal varco evidenziato in giallo (giusta posizione di lato e giusta quota); anche i colpi si fermano sui mattoni
- **Barriere elettriche:** raggi a una certa quota da un capo all'altro della fortezza; si passano sopra o sotto
- **Bersagli:** torrette che sparano verso di te 100 · serbatoi 300 (e 30 di carburante) · radar 1.000 (due colpi) · nello spazio, caccia che arrivano di fronte 200 (colpiscili alla loro quota o schivali: urtarli è fatale)
- **Carburante:** cala di continuo (più piano nello spazio); se finisce, la nave precipita. Si fa il pieno colpendo i serbatoi, che stanno a terra: bisogna volare bassi
- **Robot guardiano:** si muove di lato e in quota e spara; va colpito al petto dieci volte (di più nei giri successivi) prima che se ne vada (5.000). Nave extra a 20.000 punti e poi ogni 30.000
- **Difficoltà:** Facile (5 navi, torrette lente, varchi più larghi), Normale (3 navi), Difficile (3 navi, colpi fitti, varchi stretti); record separati per ogni difficoltà
- **Comandi:** `←` `→` di lato · `↑` `↓` sali e scendi (o `W` `A` `S` `D`) · `Spazio`, `J` o `Z` fuoco (tieni premuto) · `P` pausa
- **Touch:** levetta (destra/sinistra di lato, su/giù sali e scendi) e pulsante FUOCO

Per giocare apri `games/fortezza-spaziale/index.html` nel browser.

### ⛳ Minigolf Pazzo — `games/minigolf-pazzo/index.html`

Minigolf visto dall'alto, con nove buche ognuna con il suo trabocchetto. Si mira, si carica la forza (la barra sale e scende finché tieni premuto) e si tira: la pallina rimbalza sulle sponde e rallenta da sola.

- **Le buche:** dritta, a gomito, con un blocco in mezzo, con il mulino a vento, con il laghetto, a zig zag, con la rampa, con i respingenti da flipper e un gran finale con tutto insieme
- **Ostacoli:** le pale del mulino girano e respingono la pallina · l'acqua costa un colpo di penalità e riporta la pallina dove l'avevi tirata · la sabbia frena · le rampe (frecce) spingono di lato · i respingenti la rilanciano più veloce
- **Punteggio:** per ogni buca 150 punti per ogni colpo sotto «par +3», buca in uno +1.000; bonus a fine giro (di più se chiudi sotto il par). Al massimo 8 colpi per buca
- **Limite di colpi:** in ogni giro puoi superare il par solo di un certo numero di colpi; oltre, la partita finisce
- **Giri:** dopo 9 buche il percorso torna allo specchio, con mulini più veloci e un colpo in meno di margine a ogni giro
- **Difficoltà:** Facile (+12 per giro, mulini lenti), Normale (+7), Difficile (+4, mulini veloci); record separati per ogni difficoltà
- **Comandi:** `←` `→` mira (con `↑` o `↓` premuto la mira è più fine) · `Spazio`, `J` o `Invio` tieni premuto per caricare e rilascia per tirare · oppure trascina col mouse all'indietro, come una fionda · `P` pausa
- **Touch:** levetta per mirare e pulsante TIRA (tieni premuto e rilascia), oppure trascina sul campo all'indietro come una fionda

Per giocare apri `games/minigolf-pazzo/index.html` nel browser.

### 🎾 Set e Match — `games/set-e-match/index.html`

Tennis arcade visto da dietro le spalle del tuo giocatore. Si gioca un torneo a eliminazione: quattro avversari, dal primo turno alla finale, ognuno più veloce e preciso del precedente. Ogni partita è un set corto: vince chi arriva per primo a 3 giochi, con il punteggio vero del tennis (15, 30, 40, parità, vantaggio).

- **Colpire:** corri verso la pallina e premi TIRA poco prima che ti arrivi: con il tempo giusto il colpo è veloce e preciso, troppo presto o troppo tardi va storto (e può finire fuori o in rete)
- **Mirare:** conta la direzione che tieni mentre colpisci: sinistra o destra per gli angoli, su per un colpo lungo, giù per uno corto e angolato. Il PALLONETTO va alto e lungo, utile se l'avversario è a rete
- **Servizio:** TIRA per lanciare la palla in aria, di nuovo TIRA quando è in alto; più sei preciso, più il servizio è forte. La palla deve cadere nel riquadro evidenziato; due falli di fila sono un doppio fallo
- **Avversari:** corrono verso la pallina dopo un attimo di reazione, lasciano andare le palle che escono e, se li fai correre molto, sbagliano più spesso; i più forti cercano l'angolo libero
- **Tornei:** cemento (rimbalzo regolare), terra rossa (palla lenta e alta), erba (palla veloce e bassa); dopo ogni torneo vinto il successivo ha avversari più forti
- **Punteggio:** punto 100 · ace +300 · vincente +150 · gioco 500 · partita vinta 2.000 × turno × torneo · torneo vinto 10.000 × torneo
- **Difficoltà:** Facile (avversari lenti e fallosi, racchetta più lunga), Normale, Difficile (avversari veloci e precisi fin dal primo turno); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per correre e mirare · `Spazio`, `J` o `Invio` tira · `K` o `Shift` pallonetto · `P` pausa
- **Touch:** levetta per correre e mirare, pulsanti TIRA e PALLONETTO

Per giocare apri `games/set-e-match/index.html` nel browser.

### 🛡️ Carri di Latta — `games/carri-di-latta/index.html`

Carri armati in un labirinto visto dall'alto, in stile *Battle City*. In fondo al campo c'è la tua base, un'aquila protetta da un muretto di mattoni: venti carri nemici per stage entrano dalle tre porte in alto e cercano di colpirla. Distruggili tutti per passare allo stage successivo.

- **Terreno:** i mattoni si sbriciolano un pezzo alla volta sotto i colpi (anche i tuoi!) · l'acciaio ferma i colpi · l'acqua blocca i carri ma non i proiettili · sotto gli alberi i carri si nascondono
- **Nemici:** base 100 · veloce 200 · cannone (colpi rapidi) 300 · corazzato, cambia colore a ogni colpo e ne servono 4, 400. Al massimo 4 nemici in campo alla volta
- **Bonus:** i carri che lampeggiano di rosso, se colpiti, fanno comparire un bonus (500): stella (colpi più veloci, poi due colpi, poi colpi che rompono l'acciaio) · elmetto (scudo) · granata (distrugge tutti i nemici in campo) · orologio (nemici fermi) · pala (muro della base d'acciaio per qualche secondo) · carro (vita extra)
- **Fine partita:** se colpiscono la base o perdi tutti i carri. Stage completato +1.000, carro extra ogni 20.000 punti
- **Stage:** sei campi diversi, poi si ricomincia allo specchio con più nemici veloci e corazzati
- **Difficoltà:** Facile (5 carri, nemici lenti a sparare), Normale (3 carri), Difficile (3 carri, nemici che sparano spesso e arrivano in fretta); record separati per ogni difficoltà
- **Comandi:** frecce o `W` `A` `S` `D` per guidare · `Spazio`, `J` o `Z` fuoco (tieni premuto) · `P` pausa
- **Touch:** levetta per guidare (quattro direzioni) e pulsante FUOCO

Per giocare apri `games/carri-di-latta/index.html` nel browser.

### 🎯 Tiro a Segno — `games/tiro-a-segno/index.html`

Il baraccone del tiro a segno del luna park, in stile *Duck Hunt*: si spara toccando o cliccando direttamente sui bersagli. In ogni round di 40 secondi bisogna raggiungere un punteggio minimo, che cresce round dopo round; se non ci arrivi, la partita finisce.

- **Bersagli:** papere sulla fila alta 60 · conigli sulla fila di mezzo, più piccoli e veloci, 100 · bottiglie sulla mensola 40 (si rimettono a posto dopo qualche secondo) · bersagli che spuntano dal bancone 50, 100 o 200 al centro · palloncini 30
- **Speciali:** papera d'oro che vola in alto 500 · orologio +5 secondi. Il **gufo col cartello NO!** non va colpito: costa 200 punti e 3 secondi
- **Combo:** ogni 5 colpi a segno di fila il moltiplicatore sale (fino a ×4); un colpo a vuoto lo azzera
- **Fucile:** 6 colpi; a caricatore vuoto si ricarica da solo, ma puoi ricaricare prima con il pulsante RICARICA sul bancone
- **Round:** a fine round, bonus per la precisione; ogni tre round c'è un round bonus di palloncini senza punteggio minimo
- **Difficoltà:** Facile (bersagli lenti, minimo basso), Normale, Difficile (bersagli veloci, minimo alto); record separati per ogni difficoltà
- **Comandi:** mouse per mirare e clic per sparare · tasto destro o `R` ricarica · in alternativa frecce per spostare il mirino e `Spazio` per sparare · `P` pausa
- **Touch:** tocca un bersaglio per sparargli, tocca RICARICA per ricaricare

Per giocare apri `games/tiro-a-segno/index.html` nel browser.

### 💊 Pillole Pazze — `games/pillole-pazze/index.html`

Rompicapo in stile *Dr. Mario*. Una bottiglia di 8×16 caselle è piena di virus rossi, gialli e blu; dall'alto scendono pillole fatte di due metà colorate. Metti in fila almeno quattro pezzi dello stesso colore, in orizzontale o in verticale e virus compresi: spariscono, e le metà di pillola rimaste sospese ricadono, anche a catena.

- **Obiettivo:** eliminare tutti i virus della bottiglia; ogni livello ne ha quattro in più (e più in alto)
- **Punti:** il primo virus eliminato con una pillola vale 100, il secondo 200, poi 400, 800… anche se arrivano a catena; ×2 a Normale e ×3 a Difficile. Bottiglia pulita: bonus di 1.000 × livello
- **Aiuti:** l'ombra mostra dove cadrà la pillola; a destra c'è la pillola successiva
- **Fine partita:** ogni 10 pillole si cade un po' più in fretta; se la bocca della bottiglia si chiude e la nuova pillola non entra, è finita
- **Difficoltà:** Facile (caduta lenta, virus solo in basso), Normale (caduta media), Difficile (caduta veloce, virus fin quasi in cima); record separati per ogni difficoltà
- **Comandi:** `←` `→` sposta · `↓` scendi più veloce · `↑`, `X` o `Z` ruota · `Spazio` caduta immediata · `P` pausa
- **Touch:** levetta (destra/sinistra per spostare, giù per scendere) e pulsanti RUOTA e GIÙ

Per giocare apri `games/pillole-pazze/index.html` nel browser.

### 🚰 Idraulico Lampo — `games/idraulico-lampo/index.html`

Rompicapo a tempo in stile *Pipe Dream*. Su un pavimento di 7×9 caselle c'è un rubinetto; in alto arriva una fila di pezzi di tubo (dritti, curve e incroci) e tu li posi uno alla volta toccando le caselle. Allo scadere del conto alla rovescia l'acqua esce e scorre nei tubi: se trova una casella vuota, un tubo che non combacia o il bordo, allaga tutto.

- **Livello superato:** se l'acqua riempie almeno il numero di tubi richiesto (10 al primo livello, due in più a ogni livello). Nei livelli successivi l'acqua scorre più in fretta e c'è meno tempo per prepararsi; dal livello 3 compaiono massi che occupano alcune caselle
- **Cambiare un tubo:** tocca un tubo ancora vuoto per sostituirlo con il pezzo nuovo (−50 punti e un attimo di attesa); i tubi già pieni non si toccano
- **Punti:** 50 per ogni tubo pieno (100 dopo aver premuto ACCELERA) · incrocio attraversato in tutte e due le direzioni +500 · livello superato 1.000 + 100 per ogni tubo oltre il minimo · a fine livello −20 per ogni tubo rimasto asciutto
- **ACCELERA:** quando il percorso è pronto, fa partire subito l'acqua e la fa correre (punti doppi)
- **Tentativi:** se l'acqua si ferma prima del minimo perdi un tentativo e rifai il livello con una nuova disposizione
- **Difficoltà:** Facile (3 tentativi, acqua lenta, più tempo prima che parta), Normale (2 tentativi), Difficile (1 tentativo, acqua veloce); record separati per ogni difficoltà
- **Comandi:** clic su una casella per posare il pezzo · in alternativa frecce per spostare il cursore e `Spazio` per posare · `F` accelera · `P` pausa
- **Touch:** tocca una casella per posare il pezzo, tocca ACCELERA per far correre l'acqua

Per giocare apri `games/idraulico-lampo/index.html` nel browser.

### 🌀 Cittadella Stellare — `games/cittadella-stellare/index.html`

Sparatutto vettoriale in stile *Star Castle*. Al centro dello schermo c'è un cannone protetto da tre anelli di energia che ruotano in versi opposti; tu guidi un'astronave che ruota e accelera (lo schermo continua dai bordi) e devi aprire un varco fino al nucleo.

- **Anelli:** ogni pezzo regge due colpi (al primo si scurisce) · esterno 10 · centrale 20 · interno 30. Un anello distrutto del tutto si ricostruisce dopo un paio di secondi: bisogna far passare un colpo quando i varchi dei tre anelli si allineano
- **Nucleo:** colpirlo vale 1.000 × numero della cittadella (fino a 5.000); poi ne arriva una nuova, più veloce
- **Il cannone:** ruota verso di te e, quando ti vede attraverso i varchi, si carica (compare una linea rossa tratteggiata) e spara una palla di fuoco che non si può fermare: spostati di lato. Le astronavi appena arrivate hanno qualche secondo di scudo
- **Mine:** escono dal centro e ti inseguono; colpiscile (50)
- **Astronavi:** una in più ogni 10.000 punti; il campo della cittadella respinge l'astronave se ti avvicini troppo
- **Difficoltà:** Facile (5 astronavi, il cannone avvisa prima e spara piano, mine lente), Normale (3 astronavi), Difficile (3 astronavi, il cannone spara spesso, mine veloci); record separati per ogni difficoltà
- **Comandi:** `←` `→` ruota · `↑` spinta · `Spazio`, `J` o `Z` fuoco (tieni premuto) · `P` pausa
- **Touch:** levetta (l'astronave si gira da quella parte e accelera) e pulsante FUOCO

Per giocare apri `games/cittadella-stellare/index.html` nel browser.

### 💣 Acchiappabombe — `games/acchiappabombe/index.html`

Gioco di riflessi in stile *Kaboom!*. In cima a un muro di mattoni un bombarolo mascherato corre avanti e indietro e lascia cadere bombe con la miccia accesa; in basso tu muovi tre secchi d'acqua impilati e devi prenderle tutte al volo.

- **Ondate:** la prima ha 10 bombe, ogni ondata successiva 10 in più; le bombe cadono più veloci, più fitte, e il bombarolo corre e cambia direzione più spesso
- **Punti:** ogni bomba presa vale 10 nella prima ondata, 20 nella seconda… fino a 80
- **Bomba mancata:** quando una bomba tocca terra scoppiano tutte quelle ancora in aria, perdi il secchio più in basso e torni all'ondata precedente; senza secchi la partita finisce. Con meno secchi la «rete» è più corta: è più difficile recuperare una bomba presa in ritardo
- **Secchio extra:** ne ritorna uno a 1.000 punti, poi a 3.000, 6.000, 10.000… (massimo 3)
- **Difficoltà:** Facile (secchi larghi, bombe più lente e meno fitte), Normale, Difficile (secchi stretti, bombe veloci); record separati per ogni difficoltà
- **Comandi:** muovi il mouse (i secchi lo seguono) oppure `←` `→` · `P` pausa
- **Touch:** trascina il dito a destra e a sinistra in qualsiasi punto dello schermo, anche fuori dal campo: i secchi seguono il movimento

Per giocare apri `games/acchiappabombe/index.html` nel browser.

### 🏀 Canestro Pazzo — `games/canestro-pazzo/index.html`

Sfida di tiri a canestro a tempo, come le macchine *Pop-A-Shot* delle sale giochi, vista di lato. Il pallone vola con una vera traiettoria e rimbalza sul ferro e sul tabellone; i palloni sono infiniti, ma ci vuole mezzo secondo per prenderne un altro.

- **Round:** 40 secondi per fare almeno il punteggio richiesto (che cresce a ogni round). Dal secondo round il canestro scorre avanti e indietro, dal terzo anche su e giù, sempre più veloce
- **Punti:** canestro 2 · da oltre la linea dei 3 punti 3 · +1 se entra senza toccare ferro né tabellone («ciuf!»). 3 canestri di fila: **a fuoco**, punti doppi finché non sbagli
- **Posizioni:** 3 tiri da ogni posizione, poi il tiratore si sposta lungo il campo (le ultime sono da 3 punti)
- **Fine round:** 2 punti bonus per ogni punto oltre il minimo
- **Mira:** mentre prendi la mira si vede l'inizio della traiettoria e la barra della forza accanto al tiratore
- **Difficoltà:** Facile (traiettoria mostrata a lungo, minimo basso, canestro lento), Normale, Difficile (traiettoria appena accennata, minimo alto, canestro più veloce); record separati per ogni difficoltà
- **Comandi:** trascina col mouse all'indietro e lascia per tirare, come una fionda · in alternativa `↑` `↓` angolo, `←` `→` forza, `Spazio` tira · `P` pausa
- **Touch:** trascina all'indietro in qualsiasi punto dello schermo e lascia: più tiri lontano, più il tiro è forte

Per giocare apri `games/canestro-pazzo/index.html` nel browser.

### 🚗 Salta e Sperona — `games/salta-e-sperona/index.html`

Corsa vista dall'alto in stile *Bump 'n' Jump*. La tua auto rosa corre da sola a velocità di crociera (puoi accelerare o frenare) e sa **saltare**: ogni tappa è una strada di campagna piena di altre auto, con qualche ponte crollato da scavalcare, fino al traguardo.

- **Salto:** possibile oltre 110 km/h; più vai veloce, più salti lontano (i salti lenti galleggiano un po' di più, così un ponte crollato si supera sempre). Un cartello giallo avvisa del ponte crollato
- **Schiacciata:** atterra su un'auto per distruggerla · blu 200 · rossa 300 · camion 500
- **Speronata:** spingila di lato fuori strada · blu 300 · rossa 400 · camion 800 (pesa il doppio: ci vogliono più colpi)
- **Pericoli:** finire fuori strada o in acqua, oppure tamponare forte un'auto più lenta. Le auto rosse ti cercano per speronarti, a volte arrivando da dietro
- **Tappe:** primavera, estate, autunno e inverno a ripetizione, con strade sempre più strette, più traffico e ponti crollati più frequenti. Al traguardo 1.000 punti più 100 per ogni auto distrutta; auto extra ogni 20.000 punti
- **Difficoltà:** Facile (5 auto, strada larga, pochi speronatori), Normale (3 auto), Difficile (3 auto, strada stretta, speronatori aggressivi); record separati per ogni difficoltà
- **Comandi:** `←` `→` sterza · `↑` accelera · `↓` frena · `Spazio`, `J` o `Z` salta · `P` pausa
- **Touch:** levetta (destra/sinistra sterza, su accelera, giù frena) e pulsante SALTO

Per giocare apri `games/salta-e-sperona/index.html` nel browser.

### 🔨 Martella la Talpa — `games/martella-la-talpa/index.html`

Il classico *Whac-A-Mole* delle sale giochi. Nove buche in un prato: le talpe spuntano per un attimo e vanno colpite col martello prima che tornino sotto terra.

- **Talpe:** marrone 100 · con l'elmetto ci vogliono due colpi (al primo l'elmetto vola via e la talpa resta fuori un po' di più) 250 · la talpa d'oro, velocissima, 500
- **Coniglietto:** non va colpito! −300 punti e un cuore in meno; se lo lasci stare se ne va senza danni
- **Cuori:** ogni talpa che scappa ne costa uno; senza cuori la partita finisce
- **Combo:** ogni 6 talpe colpite di fila il moltiplicatore sale, fino a ×4; una talpa scappata o un coniglio colpito lo azzerano
- **Livelli:** ogni 15 talpe si sale di livello (bonus 500 × livello): le talpe restano fuori meno tempo e ne spuntano di più insieme. Ogni due livelli si riprende un cuore
- **Difficoltà:** Facile (7 cuori, talpe più lente a rientrare), Normale (5 cuori), Difficile (5 cuori, talpe velocissime, più coniglietti); record separati per ogni difficoltà
- **Comandi:** clic sulle talpe · oppure tastierino numerico `7` `8` `9` / `4` `5` `6` / `1` `2` `3` (o `Q` `W` `E` / `A` `S` `D` / `Z` `X` `C`), disposti come le buche · `P` pausa
- **Touch:** tocca la talpa

Per giocare apri `games/martella-la-talpa/index.html` nel browser.

### 🐢 Colpo da Sotto — `games/colpo-da-sotto/index.html`

Piattaforme su schermo singolo in stile *Mario Bros* (quello da sala giochi). Un muratore col caschetto giallo lavora in un cantiere sotterraneo a quattro piani di piattaforme; dai tubi in alto escono bestiacce che camminano, cadono di piano in piano e, arrivate in fondo, rientrano nei tubi per ricominciare dall'alto. I lati dello schermo sono collegati.

- **Come si batte un nemico:** non ci si salta sopra. Si salta **sotto** la piattaforma su cui cammina: il colpo lo ribalta. Poi bisogna raggiungerlo e toccarlo per buttarlo fuori con un calcio (800) prima che si rialzi, più arrabbiato e più veloce
- **Nemici:** tartaruga (un colpo) · granchio (al primo colpo si arrabbia, al secondo si ribalta) · mosca (salta di continuo: si ribalta solo mentre tocca la piattaforma). L'ultimo nemico di ogni fase corre più veloce, ma mai più del muratore
- **POW:** il blocco al centro, colpito da sotto, ribalta tutti i nemici a terra; regge 3 colpi e torna nuovo ogni 3 fasi
- **Monete:** dopo ogni calcio una moneta esce da un tubo: prendila o colpiscila da sotto (800)
- **Fasi:** tartarughe, poi granchi, poi mosche, poi tutto insieme, con sempre più nemici; fase superata 1.000 × fase (fino a 5.000). Vita extra ogni 20.000 punti
- **Difficoltà:** Facile (5 vite, nemici lenti, restano ribaltati a lungo), Normale (3 vite), Difficile (3 vite, nemici veloci che si rialzano in fretta); record separati per ogni difficoltà
- **Comandi:** `←` `→` corri · `Spazio`, `↑`, `J` o `Z` salta · `P` pausa
- **Touch:** levetta per correre e pulsante SALTA

Per giocare apri `games/colpo-da-sotto/index.html` nel browser.

### ✈️ Raid sul Fiume — `games/raid-sul-fiume/index.html`

Sparatutto a scorrimento verticale in stile *River Raid*. Un caccia giallo vola a pelo d'acqua risalendo un fiume nemico che si allarga, si stringe in gole strette e si divide attorno alle isole. Il fiume non finisce mai: ogni tratto tra due ponti è diverso.

- **Volo:** il fiume scorre da solo; levetta o frecce per virare, su per accelerare, giù per rallentare. Toccare le rive (o le isole) fa precipitare l'aereo
- **Nemici:** nave (30) · elicottero (60) · jet (100, dal terzo tratto attraversa lo schermo da un lato all'altro). Navi ed elicotteri a volte restano fermi, a volte si mettono in moto quando ti avvicini e fanno avanti e indietro tra le rive; urtarli è fatale
- **Carburante:** la lancetta E–½–F scende di continuo; sorvola i depositi a strisce (BENZ) per fare il pieno, meglio se rallentando. Colpirli vale 80 punti, ma è benzina persa. Sotto un quarto suona l'allarme
- **Ponti:** alla fine di ogni tratto un ponte sbarra il fiume: abbattilo (500) o ci sbatti contro. Ogni ponte abbattuto è il punto di ripartenza dopo una caduta, con il pieno fatto e lo stesso tratto di fiume
- **Progressione:** tratto dopo tratto il fiume si fa più stretto e i nemici più numerosi e svelti. Aereo extra ogni 10.000 punti
- **Difficoltà:** Facile (5 aerei, fiume largo, nemici lenti, 3 depositi per tratto, benzina che dura di più), Normale (4 aerei), Difficile (3 aerei, fiume stretto, nemici svelti, benzina che finisce presto); record separati per ogni difficoltà
- **Comandi:** `←` `→` vira · `↑` accelera · `↓` rallenta · `Spazio`, `J` o `Z` spara (tieni premuto) · `P` pausa
- **Touch:** levetta per virare e cambiare velocità, pulsante FUOCO da tenere premuto

Per giocare apri `games/raid-sul-fiume/index.html` nel browser.

### 🎨 Rampa dei Colori — `games/rampa-dei-colori/index.html`

Puzzle d'azione in stile *Klax*. Le tessere colorate rotolano una capriola dopo l'altra giù da un nastro a cinque corsie; in fondo la tua paletta le prende al volo e le lancia nei cinque cassoni sottostanti (5 caselle ciascuno). Ogni colore ha anche un simbolo (cerchio, triangolo, quadrato, rombo, stella, croce).

- **KLAX:** tre o più tessere dello stesso colore in fila nei cassoni spariscono e quelle sopra cadono giù. Verticale 100, orizzontale 500, diagonale 2.000, moltiplicati per le tessere oltre le due. Un KLAX provocato dalla caduta di un altro vale il doppio, poi il triplo…
- **La paletta:** regge fino a 5 tessere impilate; si lancia sempre quella in cima. Puoi anche rilanciarla sul nastro per prendere tempo. Se una tessera arriva in fondo e la paletta non c'è (o è piena), è persa
- **Ondate:** ognuna ha un obiettivo (fai N KLAX, prendi N tessere, fai N KLAX orizzontali o in diagonale). Completata l'ondata, 500 × ondata + 100 per ogni casella vuota, poi si riparte con i cassoni vuoti, il nastro più veloce e più colori. Si perde lasciando cadere troppe tessere in una sola ondata
- **Difficoltà:** Facile (5 tessere perse concesse per ondata, nastro lento, un colore in meno), Normale (3), Difficile (2, nastro veloce, un colore in più); record separati per ogni difficoltà
- **Comandi:** `←` `→` sposta la paletta · `Spazio` o `↓` lancia nel cassone · `↑` rilancia sul nastro · `P` pausa · col mouse: clic sul nastro per spostarti, clic su un cassone per lanciarci la tessera
- **Touch:** levetta (su per rilanciare) e pulsante LANCIA, oppure tocca direttamente il nastro o un cassone

Per giocare apri `games/rampa-dei-colori/index.html` nel browser.

### 🧲 Raggio Traente — `games/raggio-traente/index.html`

Astronave a gravità in stile *Thrust*. Scendi con la tua navicella nelle caverne di un pianeta, aggancia la sfera di energia posata sul suo piedistallo e riportala fuori, oltre la linea tratteggiata nel cielo. La gravità ti tira sempre giù e la sfera appesa a un'asta rigida dondola sotto la nave: bisogna guidare con delicatezza.

- **Volo:** ruoti la nave e accendi il motore, che spinge nella direzione del muso. Con la sfera agganciata la nave è più pesante e sale più lentamente
- **Raggio traente:** passa lentamente poco sopra la sfera e si aggancia da sola. Stando sopra un serbatoio FUEL fai il pieno (300 punti a serbatoio vuotato). Senza carburante la nave precipita; ogni nave nuova porta comunque una piccola riserva
- **Pericoli:** le rocce e i cannoni sulle pareti. Un cannone che ti ha nel mirino si illumina un attimo prima di sparare; abbatterlo vale 750. Sfiorare piano la roccia fa solo rimbalzare (su Facile e Normale), un urto deciso distrugge nave e sfera
- **Reattore:** ogni colpo zittisce i cannoni per qualche secondo; se lo distruggi, parte il conto alla rovescia e devi scappare prima che il pianeta esploda (3.000, e la missione vale anche senza sfera)
- **Pianeti:** 6 caverne sempre più profonde e armate, poi si ricomincia con la gravità più forte e i cannoni più svelti. Sfera recuperata 2.000 + 500 per pianeta; nave extra ogni 10.000 punti
- **Difficoltà:** Facile (5 navi, cannoni lenti e imprecisi, gravità leggera, urti leggeri perdonati), Normale (4 navi), Difficile (3 navi, cannoni svelti e precisi, gravità forte, basta sfiorare la roccia); record separati per ogni difficoltà
- **Comandi:** `←` `→` ruota · `↑` motore · `Spazio`, `J` o `Z` spara (tieni premuto) · `P` pausa
- **Touch:** la levetta punta il muso dove vuoi, spinta fino in fondo accende anche il motore; pulsante FUOCO da tenere premuto

Per giocare apri `games/raggio-traente/index.html` nel browser.

### 🦁 Guardiano dello Zoo — `games/guardiano-dello-zoo/index.html`

Azione in stile *Zoo Keeper*. Gli animali chiusi nel recinto prendono a testate i mattoni del muro per scappare; tu sei il guardiano e corri lungo il muro per rimetterli a posto.

- **Il muro:** 48 mattoni. Ogni testata li incrina (l'orso vale doppio, l'elefante triplo) finché crollano, e da un varco l'animale scappa. Passando lungo il muro ripari ogni mattone davanti a te: 10 punti, 20 se era crollato
- **Animali in fuga:** ti inseguono (senza mai essere veloci quanto te) e se ti prendono perdi una vita. Appena usciti dal varco restano un attimo frastornati. Con il salto li scavalchi (100 per ogni animale saltato)
- **Retino e frutta:** quando qualcuno è scappato, ogni tanto compare un retino: per qualche secondo acchiappi gli animali in fuga e li riporti nel recinto (300). La frutta dà punti extra
- **Round:** resisti fino allo scadere del tempo; 250 punti per ogni animale ancora nel recinto. Poi il recinto viene ricostruito e arrivano più animali, sempre più svelti: conigli e leoni, poi serpenti, orsi ed elefanti. Se ti prendono, gli animali in fuga vengono riportati dentro. Vita extra ogni 20.000 punti
- **Difficoltà:** Facile (5 vite, animali lenti, retini più frequenti), Normale (3 vite), Difficile (3 vite, animali svelti, mattoni più fragili); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per correre · `Spazio`, `J` o `Z` salta · `P` pausa
- **Touch:** levetta per correre e pulsante SALTA

Per giocare apri `games/guardiano-dello-zoo/index.html` nel browser.

### 🦅 Fenice Spaziale — `games/fenice-spaziale/index.html`

Sparatutto a schermo fisso in stile *Phoenix*. Guidi un caccia in fondo allo schermo contro cinque ondate diverse, che poi ricominciano più veloci.

- **Lo stormo (ondate 1 e 2):** uccellini alieni in formazione che, a turno, si lanciano in picchiata ondeggiando e sparando. 20 punti in formazione, 80 in picchiata. Il secondo stormo è rosso e più svelto
- **Le fenici (ondate 3 e 4):** grandi uccelli che planano e ogni tanto scendono in picchiata. Solo un colpo al corpo le abbatte: le ali perdono pezzi ma ricrescono dopo un paio di secondi. Valgono da 100 a 800 punti, di più quanto più sono vicine
- **L'astronave madre (ondata 5):** scende lentamente sparando, scortata da qualche uccellino. Per colpire il pilota alieno devi scavare un buco nello scafo e nel nastro viola che gli gira sotto (10 punti a pezzo); colpirlo vale da 2.000 a 8.000 punti
- **Scudo:** per poco più di un secondo ti protegge da colpi e uccelli (quelli che ci sbattono contro esplodono), ma intanto non puoi muoverti né sparare; poi deve ricaricarsi
- **Difficoltà:** Facile (5 navi, nemici lenti che sparano poco, scudo che si ricarica in fretta), Normale (3 navi), Difficile (3 navi, nemici più svelti e aggressivi, scudo lento); record separati per ogni difficoltà. Nave extra ogni 10.000 punti
- **Comandi:** `←` `→` muoviti · `↓` scudo · `Spazio`, `J` o `Z` spara (tieni premuto) · `P` pausa
- **Touch:** levetta per muoverti (giù per lo scudo) e pulsante FUOCO da tenere premuto

Per giocare apri `games/fenice-spaziale/index.html` nel browser.

### 🎱 Colpo di Stecca — `games/colpo-di-stecca/index.html`

Biliardo a buche da sala giochi, in stile *Side Pocket*. Sul tavolo ci sono nove bilie numerate disposte a rombo; lo scopo è mandarle tutte in buca, un tavolo dopo l'altro, prima di finire i colpi.

- **Colpi:** si parte con un certo numero di colpi. Una steccata che non manda niente in buca, o la bianca in buca (che poi torna sul tavolo), costa un colpo. La prima steccata di ogni tavolo, quella che spacca il rombo, è gratis
- **Punti:** ogni bilia vale 50 × il suo numero. Se imbuchi la bilia col numero più basso rimasta, i punti del colpo raddoppiano; più bilie nello stesso colpo valgono 500 in più ciascuna, e ogni colpo buono di una serie aggiunge 100
- **Colpi extra:** uno ogni 2 colpi buoni di fila (3 a Difficile), e tre a ogni tavolo pulito, che vale anche 1.000 × tavolo + 300 per ogni colpo rimasto
- **Mira:** la traiettoria tratteggiata mostra dove va la bianca. A Facile si vedono anche la bilia fantasma nel punto d'impatto, dove andrà la bilia colpita e dove scivolerà la bianca; a Normale la traiettoria arriva fino all'impatto; a Difficile se ne vede solo un pezzetto
- **Difficoltà:** Facile (10 colpi), Normale (7), Difficile (6); record separati per ogni difficoltà
- **2 giocatori:** sfida a turno sullo stesso dispositivo, su 3 tavoli. Chi manda in buca una bilia tira ancora; una steccata a vuoto o la bianca in buca passano la stecca all'altro (in alto si vede chi è di turno, e la stecca prende il suo colore). I punti delle bilie sono gli stessi, chi pulisce un tavolo prende 1.000 punti e la spaccata si alterna. Prima di iniziare scegli come si vince: **più punti** (vince chi ne ha di più dopo i 3 tavoli, a parità contano i tavoli) oppure **più tavoli** (al meglio dei 3: chi ne pulisce 2 ha vinto, a parità contano i punti); la scelta resta memorizzata e in basso durante la partita si vede quale regola vale. La difficoltà sceglie solo l'aiuto alla mira, e in 2 giocatori non si registrano record
- **Comandi:** `←` `→` gira la stecca (un tocco breve la sposta di circa un grado, tenendo premuto gira sempre più svelta) · `↑` `↓` mira fine · clic o trascina sul tavolo per puntare lì (cliccando su una bilia la stecca punta esattamente al suo centro) · tieni premuto `Spazio` (la potenza va su e giù) e lascialo per tirare · `P` pausa
- **Touch:** tocca il tavolo e trascina il dito: la stecca segue il dito (toccando una bilia punta al suo centro); levetta a destra e sinistra per girarla, su e giù per la mira fine (anche con le frecce); tieni premuto TIRA e lascialo per tirare

Per giocare apri `games/colpo-di-stecca/index.html` nel browser.

### 🪨 Rocce e Diamanti — `games/rocce-e-diamanti/index.html`

Rompicapo d'azione in stile *Boulder Dash*. Un minatore col caschetto scava nella terra di una caverna piena di massi e diamanti: per aprire l'uscita deve raccoglierne abbastanza prima che scada il tempo. Ogni caverna è grande più dello schermo, che la segue scorrendo.

- **Massi e diamanti:** cadono appena non hanno più terra sotto e rotolano giù da altri massi, diamanti e muri di mattoni. Un masso che ti cade in testa ti schiaccia: se ci passi sotto e poi scendi, scansati subito di lato! Puoi spingere un masso di lato se dietro c'è spazio vuoto
- **Lucciole e farfalle:** girano lungo le pareti delle loro tane; se le tocchi esplodono. Fai cadere loro addosso un masso: la lucciola esplode e basta, la farfalla diventa nove diamanti
- **Ameba:** in alcune caverne una massa verde cresce nella terra. Se resta chiusa si trasforma in diamanti, se diventa troppo grande in un mucchio di massi
- **Uscita:** quando hai i diamanti che servono, la porta nel muro comincia a lampeggiare; i diamanti raccolti dopo valgono il doppio, e ogni secondo avanzato 10 punti. Vita extra ogni 5.000 punti
- **Caverne:** ognuna è sempre la stessa, sempre più piena di massi, lucciole e farfalle; se perdi una vita la caverna ricomincia da capo
- **Difficoltà:** Facile (5 vite, più tempo, servono meno diamanti, la caverna si muove più lenta), Normale (3 vite), Difficile (3 vite, meno tempo, più diamanti, caverna più svelta); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per scavare · tieni `Spazio` e premi una freccia per afferrare ciò che hai accanto senza spostarti · `P` pausa
- **Touch:** levetta nelle quattro direzioni; tieni PRENDI e muovi la levetta per afferrare senza spostarti

Per giocare apri `games/rocce-e-diamanti/index.html` nel browser.

### 🍮 Sfida delle Gelatine — `games/sfida-delle-gelatine/index.html`

Puzzle a sfida in stile *Puyo Puyo*: due campi affiancati, il tuo a sinistra e quello del computer a destra. Nei campi cadono coppie di gelatine colorate, le stesse per entrambi.

- **Scoppi:** quattro o più gelatine dello stesso colore che si toccano (in orizzontale o in verticale) scoppiano, e quelle sopra cadono. Se cadendo formano un altro gruppo parte una **catena**: ogni anello vale molto più del precedente
- **Gelatine grigie:** ogni scoppio manda gelatine grigie nel campo del rivale, che piovono giù quando ha finito di posare la sua coppia (le icone sopra il campo avvisano di quante ne arrivano). Le tue catene annullano per prime quelle dirette a te. Una gelatina grigia sparisce solo se accanto scoppia un gruppo
- **Sconfitta:** perde chi riempie la casella di partenza (quella segnata con la X in cima al campo)
- **Rivali:** otto avversari sempre più svelti e capaci di preparare catene lunghe (Gelatino, Budino, Marmellata, Caramella, Meringa, Torrone, Panna Cotta e Re Tiramisù), poi si ricomincia. Ogni vittoria vale 2.000 × il numero della sfida; se perdi, consumi un cuore e rigiochi la sfida
- **Difficoltà:** Facile (3 cuori, rivali lenti e distratti), Normale (2 cuori), Difficile (1 cuore, rivali svelti che preparano catene lunghe); record separati per ogni difficoltà
- **Comandi:** `←` `→` sposta la coppia · `↓` falla scendere · `↑`, `X` o `Spazio` ruota · `Z` ruota all'indietro · `P` pausa
- **Touch:** levetta (giù per scendere, su per ruotare) e pulsante RUOTA

Per giocare apri `games/sfida-delle-gelatine/index.html` nel browser.

### 🖌️ Pennello Svelto — `games/pennello-svelto/index.html`

Labirinto da dipingere in stile *Amidar*. Un imbianchino col rullo corre lungo le linee di una griglia: ogni tratto che percorre da un incrocio all'altro resta dipinto di giallo, e quando un riquadro ha tutti i lati dipinti si riempie di colore. Le linee verticali cambiano da una fascia all'altra, quindi i riquadri hanno forme diverse, e ogni livello ha una griglia nuova.

- **Punti:** 10 per ogni tratto dipinto, 50 × livello per ogni riquadro riempito; griglia completata: 500 × livello + 200 per ogni salto avanzato
- **Guardiani:** scendono a zig-zag (lungo una linea fino al primo tratto verticale, un passo su o giù, poi avanti), e dal secondo livello (dal terzo su Facile, da subito su Difficile) uno gira di continuo lungo il bordo. Se ti prendono perdi una vita, ma i tratti dipinti restano
- **Salto:** per un attimo tutti i guardiani saltano e puoi passare sotto di loro; i salti sono pochi e si ricaricano a ogni vita
- **Quattro angoli:** riempi i riquadri dei quattro angoli e per qualche secondo i guardiani scappano, blu: acchiappali (200, 400, 800…)
- **Difficoltà:** Facile (5 vite, 5 salti, guardiani lenti), Normale (3 vite, 3 salti), Difficile (3 vite, 2 salti, guardiani svelti e più numerosi); record separati per ogni difficoltà. Vita extra ogni 25.000 punti
- **Comandi:** frecce o `WASD` per correre (tieni premuta in anticipo la direzione della prossima svolta) · `Spazio`, `J` o `Z` salta · `P` pausa
- **Touch:** levetta per correre e pulsante SALTA

Per giocare apri `games/pennello-svelto/index.html` nel browser.

### 💠 Castelli di Cristallo — `games/castelli-di-cristallo/index.html`

Raccogli-gemme isometrico in stile *Crystal Castles*. Un orsetto gira per castelli fatti di terrazze, torri, rampe e ponti su tre altezze, e deve raccogliere tutte le gemme sparse sui pavimenti. Le pareti possono nasconderlo alla vista: in quel caso se ne vede la sagoma in trasparenza.

- **I castelli:** sei castelli disegnati a mano (Il Cortile, Le Due Torri, Il Labirinto, La Fortezza, Le Scalinate, Il Ponte). Si sale e si scende solo dalle rampe; dopo il sesto si ricomincia con più nemici e più veloci
- **Nemici:** i mangiagemme puntano alle gemme e se le mangiano, e toccarli mentre masticano li elimina (500). Gli alberi maligni (dal primo castello) e le sfere di cristallo (dal secondo, dal terzo su Facile) ti inseguono lungo i corridoi: si scavalcano con un salto
- **Cappello magico:** uno per castello, in un punto fisso; per qualche secondo elimini chiunque tocchi (500, sfera 700, api 1.500). I nemici eliminati tornano dopo qualche secondo
- **Api:** se resti troppo in un castello (90 s su Facile, 70 s su Normale, 55 s su Difficile) arriva uno sciame di api che vola sopra muri e buchi e non si può saltare. Con le api ricompare il cappello magico, se l'avevi già usato
- **Punti:** 10 per gemma; l'ultima gemma del castello vale da 1.000 in su (cresce col castello, fino a 5.000); castello perfetto (nessuna gemma mangiata) 2.000. Vita extra ogni 15.000 punti
- **Difficoltà:** Facile (5 vite, nemici lenti, cappello lungo), Normale (3 vite), Difficile (3 vite, nemici svelti e più numerosi, cappello breve); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per muoverti (le direzioni sono quelle dello schermo) · `Spazio`, `J` o `Z` salta · `P` pausa
- **Touch:** levetta per muoverti e pulsante SALTA

Per giocare apri `games/castelli-di-cristallo/index.html` nel browser.

### 🛩️ Mirino Stellare — `games/mirino-stellare/index.html`

Sparatutto a scorrimento verticale in stile *Xevious*. La nave sorvola una pianura aliena di boschi, fiumi e strade con due armi: il cannone spara da solo verso l'alto contro i velivoli, le bombe cadono sul punto indicato dal mirino davanti alla nave e colpiscono solo ciò che sta a terra.

- **Il mirino:** diventa rosso quando sotto c'è qualcosa da bombardare, anche dove non si vede nulla: in ogni area c'è una torre nascosta che compare solo quando la colpisci (2.000). Si sgancia una bomba alla volta
- **Velivoli:** anelli che scendono e scappano di lato (30), caccia che si fermano a sparare (50), falchi che piombano dai lati (100, dall'area 2) e inseguitori che ti puntano (70, dall'area 3)
- **A terra:** piramidi (100), radar (200), torrette che sparano (300), blindati che pattugliano le strade (800, dall'area 2), carri che scappano quando il mirino si avvicina (1.500, dall'area 2) e fortini che sparano a ventaglio (1.000, dall'area 3)
- **Nave madre:** verso la fine di ogni area passa lentamente sopra la pianura con quattro cannoni (300 l'uno): bombardane il nucleo al centro per distruggerla tutta (4.000). Se la lasci passare, l'area continua
- **Aree:** i colpi nemici diventano più veloci e più frequenti a ogni area. Vita extra ogni 20.000 punti
- **Difficoltà:** Facile (5 vite, colpi nemici lenti e rari), Normale (3 vite), Difficile (3 vite, colpi veloci e più nemici); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per volare (il cannone spara da solo) · `Spazio`, `X`, `J` o `Z` bomba · `P` pausa
- **Touch:** levetta per volare e pulsante BOMBA

Per giocare apri `games/mirino-stellare/index.html` nel browser.

### 💀 Stella Maligna — `games/stella-maligna/index.html`

Caccia nello spazio in stile *Sinistar*. La nave vola in un settore di spazio che si ripete ai bordi, pieno di planetoidi. Gli operai alieni ne estraggono cristalli e li portano in un cantiere dove costruiscono pezzo dopo pezzo la Stella Maligna, un teschio gigante: quando è completa si sveglia, ti insulta e ti dà la caccia.

- **Cristalli e bombe:** il cannone spara da solo; colpendo un planetoide ogni tanto se ne stacca un cristallo (200). Ogni cristallo raccolto diventa una bomba stellare (massimo 20)
- **Bombe stellari:** inseguono la Stella da sole e ne staccano un pezzo a colpo (500), anche mentre è ancora in costruzione. Operai e guerrieri che si mettono in mezzo le intercettano. I colpi normali rimbalzano sulla Stella
- **La Stella:** si completa con i cristalli portati dagli operai, e comunque da sola un pezzo ogni 12 secondi; gli operai la riparano anche quando è sveglia. Se ti tocca ti divora. Distrutta vale 15.000 × zona e si passa alla zona successiva, con una Stella più grande e veloce e più nemici
- **Nemici:** operai (150) che raccolgono e trasportano cristalli, guerrieri (500) che ti girano intorno e sparano; tornano dopo qualche secondo
- **Radar:** in alto a destra mostra planetoidi, cristalli, nemici e la Stella; una freccia sul bordo dello schermo indica dov'è la Stella
- **Difficoltà:** Facile (5 vite, Stella più lenta, nemici che sparano poco), Normale (3 vite), Difficile (3 vite, Stella veloce, più nemici e più colpi); record separati per ogni difficoltà. Vita extra ogni 20.000 punti
- **Comandi:** frecce o `WASD` per volare (la nave si gira nella direzione indicata e il cannone spara da solo) · `Spazio`, `X`, `J` o `Z` bomba stellare · `P` pausa
- **Touch:** levetta per volare e pulsante BOMBA

Per giocare apri `games/stella-maligna/index.html` nel browser.

### 🏺 Tomba del Faraone — `games/tomba-del-faraone/index.html`

Labirinto a scorrimento in stile *Tutankham*. Un esploratore entra in una tomba egizia che scorre in orizzontale: corridoi di arenaria con geroglifici e torce, tesori nei vicoli ciechi e, verso il fondo, la chiave che apre la porta d'uscita. Ogni tomba è un labirinto nuovo, più lungo del precedente.

- **Il fucile:** spara solo a destra e a sinistra, nella direzione in cui guardi (puoi girarti senza muoverti). Nei corridoi verticali sei scoperto
- **Il lampo:** elimina tutte le creature sullo schermo e blocca per un po' le tane vicine; uno per vita (due su Facile)
- **Il tempo:** ogni tomba ha il suo tempo; quando finisce il fucile s'inceppa e resta solo il lampo. Il tempo avanzato vale 10 punti al secondo all'uscita
- **Creature:** escono dalle tane scavate nel pavimento quando ti avvicini: cobra (100), pipistrelli veloci e imprevedibili (200, dalla seconda tomba), scorpioni che non mollano (150, dalla terza)
- **Tesori:** coppa 500, anello 800, scarabeo 1.000, corona 1.500, maschera 2.000 · chiave 1.000 · uscita 1.000 × tomba
- **Punti di ripartenza:** i simboli ankh lungo il percorso; se perdi una vita riparti dall'ultimo che hai superato. Vita extra ogni 20.000 punti
- **Difficoltà:** Facile (5 vite, creature lente e rare, 2 lampi, più tempo), Normale (3 vite, 1 lampo), Difficile (3 vite, creature svelte e numerose, meno tempo); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per muoverti · `Spazio`, `J` o `Z` spara (tenendo premuto spara di continuo) · `X` o `K` lampo · `P` pausa
- **Touch:** levetta per muoverti, pulsanti FUOCO e LAMPO

Per giocare apri `games/tomba-del-faraone/index.html` nel browser.

### 🌅 Orizzonte di Fuoco — `games/orizzonte-di-fuoco/index.html`

Sparatutto in prospettiva in stile *Juno First*. La nave corre su una griglia luminosa che si perde all'orizzonte: le ondate nemiche arrivano dal fondo, piccole e lontane, e diventano sempre più grandi man mano che si avvicinano. Puoi spostarti di lato, accelerare, frenare e anche tornare indietro per guadagnare tempo.

- **Nemici:** dischi che ondeggiano e, quando sono vicini, si lanciano nella tua corsia (100); falchi che restano sospesi davanti a te e poi si tuffano (150); torri corazzate che resistono a 4 colpi e sparano a ventaglio (500, dalla seconda ondata); mine ferme sul terreno (50). Chi ti supera torna di nuovo dall'orizzonte
- **Astronauta:** ogni tanto ne compare uno sulla griglia; raccoglilo e per 6 secondi il tempo rallenta e ogni abbattimento vale il doppio del precedente (×2, ×4, ×8, fino a ×16)
- **Ondate:** finisce quando hai abbattuto tutti i velivoli (1.000 × ondata). A ogni ondata i nemici sono più numerosi, più veloci e sparano di più. Vita extra a 30.000 punti e poi ogni 50.000
- **Difficoltà:** Facile (5 vite, nemici lenti e meno colpi), Normale (3 vite), Difficile (3 vite, nemici svelti, molti più colpi); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` (destra/sinistra per spostarti, su per accelerare, giù per tornare indietro) · tieni premuto `Spazio`, `J`, `Z` o `X` per sparare · `P` pausa
- **Touch:** levetta per muoverti e regolare la velocità, tieni premuto FUOCO

Per giocare apri `games/orizzonte-di-fuoco/index.html` nel browser.

### 🏝️ Isola della Frutta — `games/isola-della-frutta/index.html`

Corsa a piattaforme in stile *Wonder Boy*. Un ragazzino attraversa di corsa un'isola tropicale fatta di prati, buche, gradini e piattaforme di legno. La vitalità (la barra in alto) cala di continuo: per andare avanti bisogna mangiare la frutta sparsa lungo il percorso.

- **Ostacoli:** buche (ci si cade), sassi (si inciampa e si perde vitalità), falò (dalla seconda isola) e gradini da saltare. Il salto è più alto se tieni premuto
- **Nemici:** lumache, api che volano basse (pericolose nei salti), rane che saltano verso di te (dalla seconda isola), ragni appesi al filo e cobra (dalla terza). Si scavalcano, oppure si abbattono con l'ascia
- **Uova:** si rompono toccandole. Dentro c'è l'ascia da lanciare (resta finché non perdi una vita), lo skateboard (corri più veloce e para un colpo), la fata (invincibile per 6 secondi, travolgi i nemici), un cesto di frutta (1.000 punti e vitalità piena)… oppure la melanzana, che per 8 secondi fa calare la vitalità tre volte più in fretta
- **Punti:** frutta 50–500, nemici 100–200; all'arrivo vitalità × 20 + 1.000 × isola. Ogni isola è nuova e più lunga. Vita extra ogni 20.000 punti
- **Ripartenze:** due bandierine lungo il percorso; se perdi una vita riparti dall'ultima toccata, con la vitalità piena
- **Difficoltà:** Facile (5 vite, vitalità che cala piano, nemici lenti), Normale (3 vite), Difficile (3 vite, vitalità che cala in fretta, più ostacoli); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per correre · `Spazio`, `Z` o freccia su per saltare (tieni premuto per saltare più in alto) · `X` o `J` lancia l'ascia · `P` pausa
- **Touch:** levetta per correre, pulsanti SALTA e ASCIA

Per giocare apri `games/isola-della-frutta/index.html` nel browser.

### 🧙 Sotterranei del Mago — `games/sotterranei-del-mago/index.html`

Caccia nel labirinto in stile *Wizard of Wor*. Un guerriero entra nei sotterranei del Mago, un labirinto simmetrico di 11 × 6 celle diverso a ogni livello, e deve abbattere tutti i mostri. Spara nelle quattro direzioni, ma un solo colpo alla volta, come nel cabinato originale.

- **Mostri:** sei Burwor blu (100) all'inizio; mentre cadono escono Garwor gialli (200) e Thorwor rossi (500), più veloci e decisi a darti la caccia. Garwor e Thorwor diventano invisibili a tratti (si rivedono solo quando sono vicinissimi); i mostri si illuminano un attimo prima di sparare lungo il corridoio
- **Radar:** sotto il labirinto mostra sempre la posizione di tutti i mostri, anche di quelli invisibili
- **Porte laterali:** a metà altezza, a sinistra e a destra; passando da una si esce dall'altra parte, e per qualche secondo si chiudono dietro di te
- **Worluk e Mago:** ripulito il sotterraneo arriva il Worluk, veloce, che cerca di scappare da una porta (1.000 se lo prendi). Dal terzo sotterraneo a volte compare il Mago, che sparisce e riappare in giro per il labirinto e spara (2.500)
- **Punti:** ogni sotterraneo ripulito vale 1.000 × sotterraneo; più resti dentro, più i mostri accelerano (si sente dal battito di sottofondo). Vita extra ogni 20.000 punti
- **Difficoltà:** Facile (5 vite, mostri lenti che sparano poco), Normale (3 vite), Difficile (3 vite, mostri svelti e più spari); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per muoverti · `Spazio`, `J`, `Z` o `X` spara nella direzione in cui guardi · `P` pausa
- **Touch:** levetta per muoverti e pulsante FUOCO

Per giocare apri `games/sotterranei-del-mago/index.html` nel browser.

### 💘 Cuori dal Cielo — `games/cuori-dal-cielo/index.html`

Piattaforme in stile *Popeye*. Dal balcone di una casa sul porto una ragazza lancia cuori che scendono ondeggiando verso il mare; un marinaio gira per quattro pontili collegati da scale e deve prenderli tutti prima che affondino. Il layout delle scale cambia a ogni livello e i pontili si attraversano da un lato all'altro.

- **I cuori:** valgono di più se li prendi in alto (100 dal molo, 300, 500, 800 sui pontili più alti). Uno che cade in acqua resta a galla qualche secondo (dal molo puoi ancora salvarlo, 50); se affonda perdi una vita. Prendine il numero richiesto per passare livello
- **Il bullo:** ti insegue per pontili e scale; se ti tocca perdi una vita, e se sei proprio sopra o sotto di lui carica un pugno attraverso il pavimento (il punto colpito si illumina prima). Un tuo pugno lo stordisce per un attimo
- **Spinaci:** una lattina per livello; per qualche secondo il bullo scappa e se lo prendi vola in mare (3.000), poi torna dall'alto. Finire un livello senza spinaci vale 1.500 in più
- **La strega:** dal secondo livello compare sul bordo di un pontile e tira bottiglie lungo il pavimento: respingile a pugni (100) o colpisci lei (500) e se ne va
- **Difficoltà:** Facile (5 vite, bullo lento, i cuori affondano piano), Normale (3 vite), Difficile (3 vite, bullo svelto, più cuori insieme e affondano prima); record separati per ogni difficoltà. Vita extra ogni 20.000 punti
- **Comandi:** frecce o `WASD` (su e giù sulle scale) · `Spazio`, `J`, `Z` o `X` per il pugno · `P` pausa
- **Touch:** levetta per camminare e salire, pulsante PUGNO

Per giocare apri `games/cuori-dal-cielo/index.html` nel browser.

### 🧼 Bolla Pulita — `games/bolla-pulita/index.html`

Arcade in stile *Bubbles*. Sei una bolla di sapone che scivola in un lavandino visto dall'alto, con il vortice dello scarico che ti tira verso il centro. Mangiando lo sporco diventi più grande, e quando hai ripulito tutto lo scarico si apre: tuffati dentro per passare al lavandino successivo.

- **Lo sporco:** briciole (10), macchie di grasso (20) e formiche che camminano (50). Ogni boccone ti fa crescere: la bolla passa da piccola a media, grande e gigante (i cerchi nell'HUD), e da grande le spuntano gli occhi
- **Scarafaggi:** escono dallo scarico (prima si vede la testa) e ti inseguono finché sei piccola; da grande scappano loro e li schiacci (300)
- **Spazzole e lamette:** la spazzola attraversa il lavandino pulendo lo sporco al posto tuo e ti scoppia finché non sei grande (200); la lametta gira impazzita e rimbalza sui bordi, e si schiaccia solo da gigante (500). Le spugne (dal terzo lavandino) ti respingono finché sei piccola, poi le schiacci (100)
- **Scatto:** uno slancio veloce nella direzione della levetta, poi si ricarica (barra gialla nell'HUD)
- **Lo scarico:** finché c'è sporco la grata è chiusa; ripulito il lavandino entri e prendi 1.000 × il numero del lavandino più 10 per boccone mangiato. Se scoppi rinasci lontano dai nemici, di una taglia più piccola
- **Difficoltà:** Facile (5 vite, scarafaggi lenti e pochi, vortice debole), Normale (3 vite), Difficile (3 vite, scarafaggi più veloci e numerosi, lamette prima); record separati per ogni difficoltà. Vita extra ogni 30.000 punti
- **Comandi:** frecce o `WASD` per scivolare · `Spazio`, `J` o `Z` per lo scatto · `P` pausa
- **Touch:** levetta per scivolare, pulsante SCATTO

Per giocare apri `games/bolla-pulita/index.html` nel browser.

### 🍦 Corsa al Gelato — `games/corsa-al-gelato/index.html`

Battaglia di cibo in stile *Food Fight*. In fondo a una piazza c'è un cono gelato che si scioglie; per prenderlo bisogna prima liberarlo dalla campana di vetro centrando abbastanza cuochi, che escono dai tombini, ti inseguono e ti tirano addosso di tutto.

- **Il cibo:** passando su un mucchio con le mani vuote prendi 3 colpi di quel tipo e li lanci nella direzione in cui guardi. Il pomodoro è veloce, la torta è grossa e facile da far arrivare, l'anguria trapassa più cuochi, i piselli partono a ventaglio. Quando il cibo scarseggia arrivano nuovi vassoi
- **I cuochi:** 100 punti a colpo, che salgono se ne prendi tanti di fila; un cuoco colpito torna nel tombino e poi riesce. Raccolgono anche loro il cibo e, quando alzano il braccio, stanno per tirare (mirando dove stai andando); i più svelti si scansano dai tuoi lanci. Colpire al volo il cibo di un cuoco vale 50
- **Tombini:** quando un tombino è aperto (bordo rosso, coperchio spostato) non camminarci sopra
- **Il gelato:** la campana si alza dopo un certo numero di cuochi colpiti (indicato sulla campana e nell'HUD, uno in più a ogni piazza); prendere il cono vale 1.000 più 50 per ogni secondo rimasto. Se si scioglie perdi una vita, ma i cuochi già colpiti restano contati
- **Difficoltà:** Facile (5 vite, cuochi lenti, pochi e con la mira scarsa, il gelato dura di più), Normale (3 vite), Difficile (3 vite, più cuochi, più svelti, mirano meglio e servono più colpi); record separati per ogni difficoltà. Vita extra ogni 30.000 punti
- **Comandi:** frecce o `WASD` per correre e mirare · `Spazio`, `J` o `Z` per lanciare · `P` pausa
- **Touch:** levetta per correre e mirare, pulsante LANCIA

Per giocare apri `games/corsa-al-gelato/index.html` nel browser.

### 👨‍🚀 Panico Spaziale — `games/panico-spaziale/index.html`

Piattaforme in stile *Space Panic*. Una stazione spaziale di cinque piani collegati da scale è invasa dagli alieni, e l'astronauta non ha armi: solo una pala e una bombola d'ossigeno che si svuota.

- **Scavare:** tieni premuto SCAVA per aprire una buca nel pavimento davanti a te (non dove ci sono le scale e non sul piano più basso). L'astronauta ci passa sopra con cautela, gli alieni invece ci cadono dentro. Tenendo premuto davanti a una buca vuota la riempi di nuovo
- **Colpire:** un alieno intrappolato resta nella buca per qualche secondo (la barretta sopra di lui); premi SCAVA davanti a lui per farlo precipitare al piano di sotto. Se non lo colpisci in tempo esce, la buca si richiude e lui diventa più svelto per un po'
- **Gli alieni:** il rosso muore con una caduta (100), il verde deve cadere per due piani in tutto (300), il bianco per tre (500); i pallini gialli mostrano quanto sono già caduti. Scava buche una sopra l'altra per farli precipitare di più piani in un colpo (punti × piani). Chi cade schiaccia gli alieni che trova sotto (punti doppi)
- **Ossigeno:** se finisce perdi una vita; quando sta per finire gli alieni si agitano. Liberata la stazione, l'ossigeno rimasto vale 10 punti al secondo
- **Difficoltà:** Facile (5 vite, alieni lenti che restano a lungo nelle buche, tanto ossigeno), Normale (3 vite), Difficile (3 vite, alieni svelti che ti inseguono ed escono presto dalle buche, meno ossigeno); record separati per ogni difficoltà. Vita extra ogni 20.000 punti
- **Comandi:** frecce o `WASD` per camminare e salire le scale · tieni premuto `Spazio`, `J` o `Z` per scavare o riempire, premilo per colpire · `P` pausa
- **Touch:** levetta per camminare e salire, pulsante SCAVA

Per giocare apri `games/panico-spaziale/index.html` nel browser.

### ⛽ Ladri di Carburante — `games/ladri-di-carburante/index.html`

Difesa in grafica vettoriale in stile *Rip Off*. Al centro del deserto ci sono le ultime taniche di carburante; i predoni arrivano a ondate dai bordi, le agganciano e cercano di trascinarle fuori dallo schermo. Il tuo carro armato rinasce sempre: la partita finisce quando hai perso l'ultima tanica.

- **Il carro:** gira e avanza nella direzione della levetta (o delle frecce) e spara dal cannone; al massimo due colpi in volo alla volta
- **I predoni:** valgono 50 punti più 25 per ogni ondata. Se abbatti un predone mentre traina, la tanica resta dov'è (ma un altro può venire a prenderla). Avvicinandosi zigzagano, e a ogni ondata sono di più e più veloci
- **Armati e corazzati:** con il passare delle ondate alcuni predoni hanno il cannone e ti sparano se ti avvicini; quelli con il doppio scafo vanno colpiti due volte. Se ti colpiscono o ti speronano il carro esplode e rientra dopo un paio di secondi
- **Ondata pulita:** se non perdi nessuna tanica prendi 200 × il numero dell'ondata
- **Difficoltà:** Facile (10 taniche, predoni lenti che sparano poco e crescono piano), Normale (8 taniche), Difficile (6 taniche, predoni svelti, armati e corazzati prima, mira migliore); record separati per ogni difficoltà
- **Comandi:** frecce o `WASD` per guidare · `Spazio`, `J` o `Z` per sparare (tieni premuto per sparare di continuo) · `P` pausa
- **Touch:** levetta per guidare, pulsante FUOCO

Per giocare apri `games/ladri-di-carburante/index.html` nel browser.

### 🤡 Monociclo Matto — `games/monociclo-matto/index.html`

Arcade in stile *Kickman*. Sotto il tendone del circo un clown pedala avanti e indietro sul monociclo, mentre dall'alto scendono palloncini da prendere sulla testa e impilare uno sull'altro.

- **La pila:** ogni palloncino preso vale 10 × l'altezza della pila (fino a 11; oltre, 100 a palloncino). Più è alta più vale, ma ondeggia quando acceleri, e il punto dove atterra il prossimo (la lineetta sopra la pila) si sposta
- **Il calcio:** un palloncino che ti sfugge si può rilanciare in alto con un calcio quando è basso vicino ai piedi (30 punti); poi ricade e puoi prenderlo. Se tocca terra scoppia e perdi una vita
- **Gli spilli:** dal secondo numero cadono spilli (con una linea che mostra dove arriveranno): se colpiscono la pila bucano il palloncino in cima, se ti cadono in testa perdi una vita
- **Il numero:** a ogni numero i palloncini sono di più, più veloci e ne cadono di più insieme. A fine numero ogni palloncino in pila vale 100 × il numero
- **Difficoltà:** Facile (5 vite, palloncini lenti e pochi insieme, spilli rari), Normale (3 vite), Difficile (3 vite, palloncini svelti e numerosi, tanti spilli); record separati per ogni difficoltà. Vita extra ogni 20.000 punti
- **Comandi:** frecce o `A` `D` per pedalare · `Spazio`, `J`, `Z` o `↑` per il calcio · `P` pausa
- **Touch:** levetta a destra e sinistra per pedalare, pulsante CALCIO

Per giocare apri `games/monociclo-matto/index.html` nel browser.

### 🏹 Stanze del Tesoro — `games/stanze-del-tesoro/index.html`

Avventura in stile *Venture*. Ogni sotterraneo ha quattro stanze (la sala dei serpenti, la cripta degli scheletri, la tana dei ragni e il covo dei goblin), ognuna con un tesoro. Dalla mappa del sotterraneo si entra nelle stanze dalle porte; dentro la visuale si ingrandisce.

- **I corridoi:** sulla mappa girano i guardiani, verdi e voraci: non si possono abbattere, ti inseguono se ti avvicini e ti toccano per una vita. Entra in una stanza camminando nella sua porta
- **Le stanze:** prendi il tesoro (300 + 100 per sotterraneo) e abbatti i mostri con l'arco: una sola freccia alla volta, tirata nella direzione in cui guardi. Un mostro vale 100, 200 se l'abbatti dopo aver preso il tesoro; ripulire tutta la stanza vale 500. I mostri abbattuti restano a terra per qualche secondo e scottano: non toccarli
- **Il guardiano:** se resti troppo in una stanza (la barra in alto) un guardiano entra passando attraverso i muri e ti dà la caccia: esci dalla porta
- **Il sotterraneo:** con tutti e quattro i tesori si scende al sotterraneo successivo (bonus 1.000 × sotterraneo), con mostri più numerosi e veloci; le mappe si alternano. I tesori presi restano presi anche se perdi una vita
- **Difficoltà:** Facile (5 vite, mostri lenti e meno numerosi, il guardiano arriva tardi), Normale (3 vite), Difficile (3 vite, mostri svelti e numerosi, il guardiano arriva presto); record separati per ogni difficoltà. Vita extra a 20.000 punti e poi ogni 40.000
- **Comandi:** frecce o `WASD` per camminare · `Spazio`, `J` o `Z` per tirare · `P` pausa
- **Touch:** levetta per camminare, pulsante FRECCIA

Per giocare apri `games/stanze-del-tesoro/index.html` nel browser.

### 🪂 Biplano Ribelle — `games/biplano-ribelle/index.html`

Sparatutto a scorrimento orizzontale in stile *Sky Kid*. Un piccolo biplano attraversa campagne, colline e villaggi nemici; la mitragliatrice spara da sola in avanti e il compito del pilota è schivare, scegliere la quota e portare a termine la missione.

- **La gran volta:** il pulsante GIRO fa compiere al biplano un giro della morte: durante la volta i colpi nemici non lo toccano (gli scontri sì) e non spara. Toccare terra è fatale
- **I nemici:** caccia che arrivano a ondate ondeggiando (100), bombardieri che scendono in picchiata verso di te (150) e, a terra, la contraerea che lampeggia prima di sparare (200: si abbatte volando basso davanti a lei)
- **La missione:** a metà percorso c'è una bomba su una piazzola: passaci sopra volando basso per caricarla. Da quel momento il pulsante GIRO la sgancia; la bomba cade in avanti, e se centra la fabbrica nemica (l'obiettivo vicino alla fine) vale 2.000 + 500 per missione. Se perdi una vita con la bomba a bordo, la ritrovi al rientro
- **Le missioni:** ogni missione è più lunga e con più nemici, più veloci e che sparano più spesso; la barra in alto mostra dove sono la bomba e l'obiettivo
- **Difficoltà:** Facile (5 vite, nemici lenti che sparano poco), Normale (3 vite), Difficile (3 vite, nemici svelti e numerosi, contraerea più precisa); record separati per ogni difficoltà. Vita extra a 20.000 punti e poi ogni 25.000
- **Comandi:** frecce o `WASD` per volare · `Spazio`, `J` o `Z` per la gran volta o per sganciare · `P` pausa
- **Touch:** levetta per volare, pulsante GIRO

Per giocare apri `games/biplano-ribelle/index.html` nel browser.

### 🏔️ Vetta Ghiacciata — `games/vetta-ghiacciata/index.html`

Arrampicata in stile *Ice Climber*. Uno scalatore col martello deve arrivare in cima alla montagna, piano dopo piano; la visuale sale insieme a lui e non torna indietro.

- **Il ghiaccio:** saltando sotto un blocco di ghiaccio lo rompi con la testa (10 punti) e apri un buco: salta di nuovo per passare al piano di sopra (chi sale da un buco largo un blocco atterra sul bordo più vicino). La roccia marrone non si rompe
- **Le foche:** girano per i piani e, quando trovano un buco, lo richiudono spingendoci dentro un blocco nuovo. Se rompi il ghiaccio sotto una foca, cade al piano di sotto. Toccarle costa una vita; con la mazza le mandi via (400)
- **Gli uccelli:** dal terzo piano scendono in picchiata verso di te; la mazza li abbatte (300)
- **Le cadute:** se cadi più in basso del fondo dello schermo perdi una vita e riparti dal piano più basso ancora visibile
- **La vetta:** in cima c'è un tetto di roccia con qualche varco e la bandiera: arrivarci vale 3.000 più un bonus per il tempo. Ogni montagna ha più piani della precedente (fino a 14)
- **Difficoltà:** Facile (5 vite, foche lente e pochi uccelli), Normale (3 vite), Difficile (3 vite, foche svelte e numerose, tanti uccelli); record separati per ogni difficoltà. Vita extra a 20.000 punti e poi ogni 30.000
- **Comandi:** frecce o `A` `D` per camminare · `Spazio`, `W`, `↑` o `J` per saltare · `X`, `K` o `Z` per la mazza · `P` pausa
- **Touch:** levetta per camminare, pulsanti SALTA e MAZZA

Per giocare apri `games/vetta-ghiacciata/index.html` nel browser.

### 🤸 Acrobati in Altalena — `games/acrobati-in-altalena/index.html`

Arcade in stile *Circus*. Sotto il tendone ci sono due acrobati e un'altalena: uno vola in alto scoppiando i palloncini, l'altro aspetta seduto sull'estremità bassa. Si controlla solo l'altalena, spostandola a destra e a sinistra.

- **L'atterraggio:** chi ricade deve atterrare sulla metà alzata dell'altalena: l'asse si ribalta e lancia in aria il compagno. Più vicino alla punta atterri, più alto vola il compagno; vicino al centro il lancio è più basso. Se atterri sul lato del compagno o per terra perdi un acrobata
- **I palloncini:** tre file che scorrono in direzioni diverse: blu 30, gialli 20, rossi 10. Una fila completata vale 500, 300 o 200 × il numero e si riempie di nuovo
- **I numeri:** ogni tre file completate si passa al numero successivo: palloncini più veloci, gravità più forte e rimbalzi laterali più larghi. Gli acrobati rimbalzano sulle pareti del tendone
- **Difficoltà:** Facile (5 acrobati, voli più lenti, altalena più tollerante), Normale (3 acrobati), Difficile (3 acrobati, voli svelti, rimbalzi larghi e nessun margine); record separati per ogni difficoltà. Acrobata extra a 10.000 punti e poi ogni 15.000
- **Comandi:** frecce o `A` `D` per spostare l'altalena · `P` pausa
- **Touch:** levetta a destra e sinistra

Per giocare apri `games/acrobati-in-altalena/index.html` nel browser.

### ⛄ Palle di Neve — `games/palle-di-neve/index.html`

Piattaforme a schermo fisso in stile *Snow Bros*. Un pupazzo di neve affronta i mostri di una torre piano per piano; per passare al piano successivo bisogna eliminarli tutti.

- **La neve:** con NEVE il pupazzo tira un fiocco davanti a sé (10 punti). Ogni colpo copre il mostro di uno strato: con due strati resta bloccato e innocuo, con quattro diventa una palla di neve. Se lo lasci stare la neve si scioglie e torna a camminare (la palla lampeggia quando sta per sciogliersi)
- **Il calcio:** davanti a una palla di neve, NEVE la calcia: rotola nella direzione in cui guardi, cade giù dai bordi dei piani, rimbalza sulle pareti e travolge ogni mostro che incontra (1.000, 2.000, 4.000, 8.000… per i mostri presi in fila). Sul piano terra si rompe alla prima parete (500). Ogni mostro lascia un frutto da raccogliere (200-800). Camminando contro una palla la spingi piano
- **I mostri:** diavoletti che girano per i piani, rane che saltano al piano di sopra, draghetti che sputano fiamme lungo il loro piano. Anche loro scendono e salgono per inseguirti
- **La zucca:** se resti troppo su un piano (la barra in alto) arriva una zucca invincibile che attraversa tutto e ti insegue. Finire in fretta dà un bonus
- **Movimento:** si salta attraverso le piattaforme dal basso; con giù + SALTA si scende da una piattaforma. I piani si alternano fra cinque schemi
- **Difficoltà:** Facile (5 vite, mostri lenti e uno in meno, la neve si scioglie piano), Normale (3 vite, un mostro in più), Difficile (3 vite, due mostri in più e più svelti, draghetti già dal secondo piano, la zucca arriva prima); record separati per ogni difficoltà. Vita extra a 30.000 punti e poi ogni 40.000
- **Comandi:** frecce o `A` `D` per camminare · `Spazio`, `W`, `↑` o `J` per saltare (con `↓` scendi da una piattaforma) · `X`, `K` o `Z` per la neve e il calcio · `P` pausa
- **Touch:** levetta (o frecce) per camminare, pulsanti SALTA e NEVE

Per giocare apri `games/palle-di-neve/index.html` nel browser.
