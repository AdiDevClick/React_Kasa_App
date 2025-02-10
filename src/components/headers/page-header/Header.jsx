import "assets/css/Header.scss";
import PropTypes from "prop-types";

/**
 * Render l'image Header des pages
 * @param {string} img - Le path de l'image
 * @param {string} alt - Le text du "alt" pour l'accessibilité
 * @param {Boolean} [text=true]  - Défini si oui / non le h1 sera display
 * @returns
 */
export function RenderHeader({ img, alt, text = true }) {
    return (
        <section className="splash-header">
            <img src={img} alt={alt} />
            {text && <h1>Chez vous, partout et ailleurs</h1>}
        </section>
    );
}

RenderHeader.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.bool,
};
