import PropTypes from 'prop-types';
import { Banner } from '../../components/headers/banner/Banner.jsx';
import 'assets/css/Cards.scss';
import headerImg from 'assets/images/rivage-S.webp';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.jsx';
import { CardsContainer } from '../../components/cards/CardsContainer.jsx';

/**
 * Affiche la page Accueil -
 * @param {object} param0
 * @param {{}} param0.datas - L'objet contenant la SQL Query
 * @returns
 */
export function Home({ datas }) {
    useDocumentTitle('Chez vous, partout et ailleurs');
    return (
        <>
            <Banner img={headerImg} alt={'Un rivage'}>
                Chez vous, partout et ailleurs
            </Banner>

            <CardsContainer className="card-container" cards={datas} />
        </>
    );
}

Home.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
