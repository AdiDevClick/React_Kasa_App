import 'assets/css/Banner.scss';
import PropTypes from 'prop-types';

/**
 * Render l'image Header des pages
 * @param {object} param0
 * @param {string} param0.img - Le path de l'image
 * @param {string} param0.alt - Le text du "alt" pour l'accessibilité
 * @param {string} param0.children - Définir le titre dans la Banner en tant que Children
 * @returns {JSX.Element}
 */
export function Banner({ img, alt, children }) {
    return (
        <section className="splash-header">
            <img src={img} alt={alt} />
            <div>
                <h1>{children}</h1>
            </div>
        </section>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    children: PropTypes.string,
};
