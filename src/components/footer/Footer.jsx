import { RenderLogo } from "../headers/nav/Logo.jsx";
import "assets/css/Footer.scss";

export function RenderFooter() {
    console.log("Render Footer");
    return (
        <footer>
            <RenderLogo />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
