import PropTypes from "prop-types";
import { Card } from "../cards/Card.jsx";
import { Banner } from "../headers/page-header/Banner.jsx";
import "assets/css/Card.scss";
import headerImg from "assets/images/rivage-S.png";

/**
 * Render la page Accueil -
 * @param {object} param0
 * @param {{}} param0.datas - L'objet contenant la SQL Query
 * @returns
 */
export function RenderMain({ datas }) {
    return (
        <>
            <Banner
                img={headerImg}
                alt={"Un rivage"}
                text={"Chez vous, partout et ailleurs"}
            />
            <Card className="card-container" datas={datas} />
        </>
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
