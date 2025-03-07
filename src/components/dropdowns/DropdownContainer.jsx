import PropTypes from 'prop-types';
import { DropdownButton } from './DropdownButton.jsx';
import arrow from 'assets/images/dropdown-arrow.svg';

/**
 * Le conteneur du titre et du bouton contenant la flèche -
 * Il permet de cacher le span pour l'animation et de remonter le clic user -
 * @param {object} param0
 * @param {Function} param0.handleClick
 * @param {object} param0.elements - Objet contenant tous les éléments ariaId(pour la relation avec le span), isActive et title
 * @returns {JSX.elements}
 */
export function DropdownContainer({ handleClick, elements }) {
    return (
        <div className="dropdown_container open closed" onClick={handleClick}>
            <h2 className="dropdown__title">{elements.title}</h2>
            <DropdownButton
                ariaId={elements.ariaId}
                isActive={elements.isActive}
                arrow={arrow}
            />
        </div>
    );
}

DropdownContainer.propTypes = {
    handleClick: PropTypes.func.isRequired,
    elements: PropTypes.object.isRequired,
};
