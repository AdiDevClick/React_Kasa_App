## Par Adrien Quijo pour OC DevWeb

# Initialisation du Projet 
- Vite : `npm create vite@latest Kasa-app -- --template react`
- Sass : `npm install sass`
- React Router : `npm install react-router`
# Gestion des Routes
## Pour modifier le comportement des routes :
Le `RouterProvider` est utilisé avec utilisation d'un objet pour la gestion des routes. <br>
La gestion des routes est traitée dans [PageError.jsx](src/pages/Error/PageError.jsx).<br>
Si nécessaire, ajoutez la logique des routes dans ce fichier.

# Error Handler
## Pour modifier le comportement des erreurs :
La gestion des erreurs est traitée dans [PageError.jsx](src/pages/Error/PageError.jsx).<br>
Si nécessaire, ajoutez la logique des erreurs dans ce fichier.

### Error 404
- Le display de [l'Erreur 404](src/pages/Error/404/Error404.jsx)
### Autre erreur ###
Erreur générique actuelle : <br>
``` 
    <div style={{ color: "red" }} id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>