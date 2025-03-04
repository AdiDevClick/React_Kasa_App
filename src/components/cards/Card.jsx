import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Affiche une card menant vers un lien
 * @param {Object} param0
 * @param {Object} param0.element - Les éléments de la card
 * @param {string} param0.to - Inclus dans les ...props, le lien vers l'élement
 * @returns
 */
export function Card({ element, ...props }) {
    return (
        <Link {...props}>
            <figure className="card">
                <img src={element.cover} alt={element.title} />
                <figcaption>{element.title}</figcaption>
            </figure>
        </Link>
    );
}

Card.propTypes = {
    element: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
};
