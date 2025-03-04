import PropTypes from 'prop-types';

/**
 * Affiche un bouton next/prev pour le slider -
 * className & name are MANDATORY
 *
 * @param {Object} param0
 * @param {string} param0.children - Le nom caché du bouton pour l'accessibilité
 * @param {Function} param0.handleClick - Le callback de la fonction
 *
 * @param {Object} param0.props
 * @param {string} param0.props.className
 * @param {string} param0.props.name
 * @returns {JSX.Element}
 */
export function CarouselButton({ handleClick, children, ...props }) {
    return (
        <button
            {...props}
            style={{ color: 'transparent' }}
            type="button"
            onClick={handleClick}
        >
            {children}
            <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {props.name === 'prev' && (
                    <path
                        d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                        fill="white"
                    />
                )}
                {props.name === 'next' && (
                    <path
                        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                        fill="white"
                    />
                )}
            </svg>
        </button>
    );
}

CarouselButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
