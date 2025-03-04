import PropTypes from 'prop-types';

/**
 * Affiche un Tag contenant un texte
 * @param {object} param0
 * @param {string} param0.children - Texte du Tag
 * @returns
 */
export function Tags({ children }) {
    return <li className="tag">{children}</li>;
}

Tags.propTypes = {
    children: PropTypes.string.isRequired,
};
