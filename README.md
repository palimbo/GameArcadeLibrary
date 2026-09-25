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
