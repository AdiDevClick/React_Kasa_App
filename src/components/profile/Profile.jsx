import PropTypes from "prop-types";

/**
 * Render un nom d'utilisateur et son image
 * @param {object} param0
 * @param {string} param0.name - Le nom de l'utilisateur
 * @param {string} param0.picture  - L'image de l'utilisateur
 * @returns
 */
export function Profile({ name, picture }) {
    return (
        <div className="profile">
            <p className="profile__name">{name}</p>
            <img className="profile__img" src={picture} alt={name} />
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};
