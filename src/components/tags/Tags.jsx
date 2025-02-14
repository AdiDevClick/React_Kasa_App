import PropTypes from "prop-types";

/**
 * Crer des tags en fonction de l'array passé en props
 * @param {object} param0 - props
 * @param {array} param0.datas - Array de tags à construire.
 * @returns {JSX.Element}
 */
export function Tags({ datas }) {
    Array.isArray(datas) ? datas : [datas];
    return (
        <ul className="tags_container">
            {datas.map((tag, index) => (
                <li className="tag" key={index}>
                    {tag}
                </li>
            ))}
        </ul>
    );
}

Tags.propTypes = {
    datas: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
