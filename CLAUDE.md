# Game Arcade Library

## Dopo ogni merge: aggiornare l'artefatto «Sala Giochi»

La raccolta è pubblicata anche come artefatto: https://claude.ai/artifact/BjDqW2MPpLWZ93fVhS7i3h
Il merge di una pull request aggiorna solo GitHub, non l'artefatto. Ogni volta che fai il merge di una pull request:

1. porta il checkout locale allo stato del ramo principale dopo il merge (`git fetch` e checkout della versione unita);
2. leggi l'artefatto con l'Artifact tool (`action: "read"` sull'URL) prima di ripubblicarlo;
3. ripubblicalo sullo stesso URL con `file_path` = `index.html` e in `files` tutti i file cambiati dalla pull request (per un gioco nuovo: `games/<id>/index.html`, `games/<id>/cover.jpg`, `shared/trofei.js`, `shared/imprese.js`, e qualunque altro file toccato);
4. di' all'utente che l'artefatto è aggiornato.
