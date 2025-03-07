import { Banner } from '../../components/headers/banner/Banner.jsx';
import 'assets/css/Cards.scss';
import headerImg from 'assets/images/rivage-S.webp';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.jsx';
import { CardsContainer } from '../../components/cards/CardsContainer.jsx';
import datas from '../../data/datas.json';

/**
 * Affiche la page Accueil -
 * @param {object} param0
 * @param {{}} param0.datas - L'objet contenant la SQL Query
 * @returns
 */
export function Home() {
    useDocumentTitle('Chez vous, partout et ailleurs');
    return (
        <>
            <Banner img={headerImg} alt={'Un rivage'}>
                Chez vous, partout et ailleurs
            </Banner>

            <CardsContainer className="card-container" datas={datas} />
        </>
    );
}
