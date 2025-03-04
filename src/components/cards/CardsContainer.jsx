import PropTypes from 'prop-types';
import { Card } from './Card.jsx';

/**
 * Affiche un container pour les cards
 * @param {object} param0
 * @param {string} param0.className - Le nom de la class CSS
 * @param {array} param0.cards - Un Array d'objets pour
 * @returns {JSX.Element}
 */
export function CardsContainer({ className, cards }) {
    return (
        <section className={className}>
            {cards.map((element) => (
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
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
};
