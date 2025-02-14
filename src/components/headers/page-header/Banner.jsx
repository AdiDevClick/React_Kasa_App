import "assets/css/Banner.scss";
import PropTypes from "prop-types";

/**
 * Render l'image Header des pages
 * @param {object} param0
 * @param {string} param0.img - Le path de l'image
 * @param {string} param0.alt - Le text du "alt" pour l'accessibilité
 * @param {Boolean} param0.text - Défini le titre dans la Banner
 * @returns
 */
export function Banner({ img, alt, text }) {
    return (
        <section className="splash-header">
            <img src={img} alt={alt} />
            <h1>{text}</h1>
        </section>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.bool,
};
