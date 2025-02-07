import { NavLink } from "react-router";
/**
 * Render la page 404
 * @returns {JSX.Element}
 */
export function Error404() {
    return (
        <main className="error_404 main-container">
            <h1 className="error__title">404</h1>
            <p className="error__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink className="error__link" to="/">
                Retourner sur la page d’accueil
            </NavLink>
        </main>
    );
}
