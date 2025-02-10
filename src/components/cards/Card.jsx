import PropTypes from "prop-types";
import { Link } from "react-router";

/**
 * Crer un élément ".card" à partir d'un objet
 * @param {string} className - Le nom de la class CSS
 * @param {object} datas
 * @returns {JSX.Element}
 */
export function RenderCard({ className, datas }) {
    return (
        <section className={className}>
            {datas.map((element) => (
                <Link to={"/" + element.id} key={element.id}>
                    <figure className="card">
                        <img src={element.cover} alt={element.title} />
                        <figcaption>{element.title}</figcaption>
                    </figure>
                </Link>
                // <a href={"#"} key={element.id}>
                //     <figure className="card">
                //         <img src={element.cover} alt={element.title} />
                //         <figcaption>{element.title}</figcaption>
                //     </figure>
                // </a>
            ))}
        </section>
    );
}

RenderCard.propTypes = {
    className: PropTypes.string.isRequired,
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
};
