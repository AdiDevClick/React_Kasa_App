import PropTypes from 'prop-types';

/**
 * Paragraphe du DropDown
 * @param {object} param0
 * @param {string} param0.children - Le texte du paragraphe
 * @returns
 */
export function DropdownParagraph({ children }) {
    return <p className="dropdown__text">{children}</p>;
}

DropdownParagraph.propTypes = {
    children: PropTypes.string.isRequired,
};
