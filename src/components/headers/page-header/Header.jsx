import "assets/css/Header.scss";
import PropTypes from "prop-types";

/**
 * Render l'image Header des pages
 * @param {object} param0
 * @param {string} param0.img - Le path de l'image
 * @param {string} param0.alt - Le text du "alt" pour l'accessibilité
 * @param {Boolean} [param0.text=true]  - Défini si oui / non le h1 sera display
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
