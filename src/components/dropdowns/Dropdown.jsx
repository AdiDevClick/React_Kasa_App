import PropTypes from 'prop-types';
import { useId, useRef, useState } from 'react';
import 'assets/css/DropDown.scss';
import arrow from 'assets/images/dropdown-arrow.svg';
import { DropdownParagraph } from './DropdownParagraph.jsx';
import { DropdownButton } from './DropdownButton.jsx';

/**
 * Affiche un dropdown avec un bouton sur la droite -
 * Une transition s'affichera quand l'utilisateur active le drawer -
 * @param {object} param0
 * @param {object} param0.item - Object contenant toutes les propriétés
 * @returns {JSX.Element}
 */
export function DropDown({ item }) {
    item.text = Array.isArray(item.text) ? item.text : [item.text];

    const [active, setActive] = useState(false);
    const id = useId();
    const paragraphsRef = useRef();

    /** @type {PointerEvent} */
    const handleClick = (e) => {
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
            <div
                className="dropdown_container open closed"
                onClick={handleClick}
            >
                <h2 className="dropdown__title">{item.title}</h2>
                <DropdownButton ariaId={id} isActive={active} arrow={arrow} />
            </div>

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
