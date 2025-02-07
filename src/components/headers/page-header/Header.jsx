import header from "assets/images/rivage-S.png";
import "assets/css/Header.scss";
export function RenderHeader() {
    return (
        <section className="splash-header">
            <img src={header} alt="Un rivage" />
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    );
}
