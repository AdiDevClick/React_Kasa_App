import { Banner } from '../../components/headers/banner/Banner.jsx';
import image from 'assets/images/foret.webp';
import { DropDown } from '../../components/dropdowns/Dropdown.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.jsx';
import { useEffect, useId, useState } from 'react';

const texts = {
    Fiabilité:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.',
    Respect:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    Service:
        'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de resect et de bienveillance.',
    Sécurité:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

/**
 * Render la page A Propos
 * @returns {JSX.Element}
 */
export function AboutUs() {
    let id = useId();
    const [drawerItems, setDrawerItems] = useState([]);

    useEffect(() => {
        let i = 1;

        return () => {
            for (const [item, value] of Object.entries(texts)) {
                setDrawerItems((prevItems) => [
                    ...prevItems,
                    {
                        id: id + i++,
                        title: item,
                        text: value,
                    },
                ]);
            }
        };
    }, []);

    useDocumentTitle('A propos de Kasa');

    return (
        <>
            <Banner img={image} alt={'forêt'} />
            <div className="dropdowns-container">
                {drawerItems.map((key) => (
                    <DropDown key={key.id} item={key} />
                ))}
            </div>
        </>
    );
}
