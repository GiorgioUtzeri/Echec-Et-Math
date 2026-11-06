# Pile ou face

Jeu de pile ou face en une seule page HTML. Pas de dépendance ni de compilation : tout est dans `index.html`.

## Lancer le jeu

Ouvrir `index.html` dans un navigateur.

## Utiliser le jeu dans Claude (canvas)

Coller le contenu de `index.html` dans la conversation en demandant « affiche ce code comme artefact HTML ». La page est faite pour s'afficher telle quelle dans le canvas, en thème clair et sombre, sur ordinateur comme sur téléphone.

## Règles (mode « quitte ou double »)

1. Choisir un côté : **pile** (côté valeur, un « 1 ») ou **face** (côté effigie, un pion d'échecs).
2. Lancer la pièce. Le tirage utilise `crypto.getRandomValues`, donc une chance sur deux.
3. Bon pari : la série augmente et le pot double (1, 2, 4, 8, ...). Mauvais pari : le pot est perdu.
4. **Encaisser** ajoute le pot au score et le remet à 1.

Raccourcis : `Espace` pour lancer, `P` ou `F` pour choisir le côté.

## Grands nombres

Sous la pièce, une courbe montre la part de faces au fil des lancers, avec la zone où elle reste dans environ 95 % des cas (50 % ± 100 / √n %). Le bouton « Simuler 100 lancers » alimente la courbe sans toucher au score.

Le score, la série max et l'historique sont gardés dans le `localStorage` du navigateur (jusqu'à 1 000 lancers).
