import PropTypes from 'prop-types';
import { Tags } from './Tags.jsx';

/**
 * Crer des tags puis les affiches dans un container
 * @param {object} param0 - props
 * @param {array} param0.datas - Array de tags à construire.
 * @returns {JSX.Element}
 */
export function TagsContainer({ datas }) {
    Array.isArray(datas) ? datas : [datas];
    return (
        <ul className="tags_container">
            {datas.map((text, index) => (
                <Tags key={index}>{text}</Tags>
            ))}
        </ul>
    );
}

TagsContainer.propTypes = {
    datas: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
