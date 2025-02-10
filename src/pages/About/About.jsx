import { RenderHeader } from "../../components/headers/page-header/Header.jsx";
import image from "assets/images/foret-S.png";
import App from "../Home/App.jsx";
import { RenderDropDown } from "../../components/dropdowns/Dropdown.jsx";

const texts = {
    Fiabilité:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
    Respect:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Service:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de resect et de bienveillance.",
    Sécurité:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

/**
 * Render la page A Propos
 * @returns {JSX.Element}
 */
export function RenderAboutUs() {
    return (
        <App>
            <RenderHeader img={image} alt={"forêt"} text={false} />
            <div className="dropdowns-container">
                {Object.entries(texts).map(([key, value]) => (
                    <RenderDropDown key={key} title={key} text={value} />
                ))}
            </div>
        </App>
    );
}
