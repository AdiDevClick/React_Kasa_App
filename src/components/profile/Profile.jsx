import PropTypes from "prop-types";

/**
 * Render un nom d'utilisateur et son image
 * @param {string} name - Le nom de l'utilisateur
 * @param {string} picture  - L'image de l'utilisateur
 * @returns
 */
export function RenderProfile({ name, picture }) {
    return (
        <div className="profile">
            <p className="profile__name">{name}</p>
            <img className="profile__img" src={picture} alt={name} />
        </div>
    );
}

RenderProfile.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};
