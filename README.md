# Game Arcade Library

Raccolta di giochi arcade per il browser. Ogni gioco è un singolo file HTML senza dipendenze: basta aprirlo.

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
