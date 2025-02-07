import { RenderCard } from "../cards/Card.jsx";
import { RenderHeader } from "../headers/page-header/Header.jsx";
import "assets/css/Card.scss";

/**
 *
 * @param {object} param0 - L'objet contenant la SQL Query
 * @returns
 */
export function RenderMain({ datas }) {
    console.log(datas);
    return (
        <main>
            <RenderHeader />
            <RenderCard className="card-container" datas={datas} />
        </main>
    );
}
