import PropTypes from 'prop-types';
import { Card } from './Card.jsx';

/**
 * Affiche un container pour les cards
 * @param {object} param0
 * @param {string} param0.className - Le nom de la class CSS
 * @param {array} param0.datas - Un Array d'objets pour
 * @returns {JSX.Element}
 */
export function CardsContainer({ className, datas }) {
    return (
        <section className={className}>
            {datas.map((element) => (
                <Card
                    to={'/' + element.id}
                    key={element.id}
                    element={element}
                />
            ))}
        </section>
    );
}

CardsContainer.propTypes = {
    className: PropTypes.string.isRequired,
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
};
