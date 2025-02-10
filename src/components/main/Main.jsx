import PropTypes from "prop-types";
import { RenderCard } from "../cards/Card.jsx";
import { RenderHeader } from "../headers/page-header/Header.jsx";
import "assets/css/Card.scss";
import headerImg from "assets/images/rivage-S.png";

/**
 * @param {object} param0
 * @param {{}} param0.datas - L'objet contenant la SQL Query
 * @returns
 */
export function RenderMain({ datas }) {
    console.log("Render Main Page ");
    return (
        <main>
            <RenderHeader img={headerImg} alt={"Un rivage"} />
            <RenderCard className="card-container" datas={datas} />
        </main>
    );
}

RenderMain.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
