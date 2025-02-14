import { Logo } from "../headers/nav/Logo.jsx";
import "assets/css/Footer.scss";

/**
 * Render le Footer de l'app
 * @returns {JSX.Element}
 */
export function Footer() {
    console.log("Render Footer");
    return (
        <footer>
            <Logo />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
