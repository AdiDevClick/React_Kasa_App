import PropTypes from 'prop-types';
import { useId, useRef, useState } from 'react';
import 'assets/css/DropDown.scss';
import { DropdownParagraph } from './DropdownParagraph.jsx';
import { DropdownContainer } from './DropdownContainer.jsx';

/**
 * Affiche un dropdown avec un bouton sur la droite -
 * Le span est à part du conteneur -
 * Une transition s'affichera quand l'utilisateur active le drawer -
 * @param {object} param0
 * @param {object} param0.item - Object contenant toutes les propriétés title/text
 * @returns {JSX.Element}
 */
export function DropDown({ item }) {
    item.text = Array.isArray(item.text) ? item.text : [item.text];

    const [active, setActive] = useState(false);
    const id = useId();
    const paragraphsRef = useRef();

    /** @type {PointerEvent} */
    const onHandleClick = (e) => {
        setActive((click) => !click);

        // Plays button's animation
        e.currentTarget.classList.toggle('closed');
        // Opacity fadein for the paragraphs
        if (active) {
            paragraphsRef.current.addEventListener(
                'transitionend',
                () => {
                    // Display none to reset animation state
                    paragraphsRef.current.style.display = 'none';
                    paragraphsRef.current.removeAttribute('style');
                },
                { once: true }
            );
        }
    };

    return (
        <div className="dropdown">
            <DropdownContainer
                handleClick={(e) => onHandleClick(e)}
                elements={{ ariaId: id, isActive: active, title: item.title }}
            />

            <span
                ref={paragraphsRef}
                id={id}
                className={active ? 'open' : 'closed'}
            >
                {item.text.map((text, index) => (
                    <DropdownParagraph
                        key={item.id + index}
                        id={item.id + index}
                    >
                        {text}
                    </DropdownParagraph>
                ))}
            </span>
        </div>
    );
}

DropDown.propTypes = {
    item: PropTypes.object.isRequired,
};
