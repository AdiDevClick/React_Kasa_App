import PropTypes from 'prop-types';

/**
 * Bouton du Dropdown
 * @param {object} param0
 * @param {string} param0.ariaId - ID du span que controle le ARIA
 * @param {boolean} param0.isActive - Active State du Dropdown
 * @param {string} param0.arrow - Img source
 * @returns
 */
export function DropdownButton({ ariaId, isActive, arrow }) {
    return (
        <button aria-expanded={isActive} aria-controls={ariaId}>
            <img
                alt="icône flêche du bouton"
                className="dropdown__btn"
                src={arrow}
            />
        </button>
    );
}

DropdownButton.propTypes = {
    ariaId: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    arrow: PropTypes.string.isRequired,
};
