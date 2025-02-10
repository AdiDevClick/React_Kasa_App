import PropTypes from "prop-types";
import { useId, useState } from "react";
import "assets/css/DropDown.scss";
import arrow from "assets/images/dropdown-arrow.svg";

/**
 * Render un dropdown avec un bouton sur la droite
 * @param {object} param0
 * @param {string} param0.title - Titre du dropdown
 * @param {string|Array} param0.text - Texte du dropdown
 * @returns {JSX.Element}
 */

export function RenderDropDown({ title, text }) {
    const [clicked, isClicked] = useState(false);

    const handleClick = (e, bool) => {
        // Plays button's animation
        e.currentTarget.classList.toggle("closed");
        isClicked(bool);
    };

    text = Array.isArray(text) ? text : [text];

    const id = useId();

    return (
        <div className="dropdown">
            <div
                className="dropdown_container open closed"
                onClick={(e) => handleClick(e, !clicked)}
            >
                <h2 className="dropdown__title">{title}</h2>
                <button aria-expanded={clicked} aria-controls={id}>
                    <img className="dropdown__btn" src={arrow} />
                </button>
            </div>
            {clicked && (
                <span id={id}>
                    {text.map((text, index) => (
                        <p
                            key={id + index}
                            id={id + index}
                            className="dropdown__text"
                        >
                            {text}
                        </p>
                    ))}
                </span>
            )}
        </div>
    );
}

RenderDropDown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};
