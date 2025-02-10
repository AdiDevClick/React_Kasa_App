import { useRouteError } from "react-router";
import { Error404 } from "./404/Error404.jsx";
import "assets/css/404.scss";

/**
 * Display une erreur 404 si la route est mauvaise.
 * Par défaut, display un message générique.
 * @returns {JSX.Element}
 */
export function PageError() {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) return <Error404 />;

    return (
        <div style={{ color: "red" }} id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
