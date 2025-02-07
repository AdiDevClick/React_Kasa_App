import { useReducer } from "react";
import { RenderLogo } from "./Logo.jsx";
import { RenderNavList } from "./NavList.jsx";
import "assets/css/NavHeader.scss";
import { navReducer } from "../../../assets/hooks/reducer/reducer.js";

const listItems = [
    {
        id: "list1",
        name: "Accueil",
        route: "/",
        active: true,
    },
    {
        id: "list2",
        name: "A Propos",
        route: "/",
        active: false,
    },
];

export function RenderNavHeader() {
    const [state, dispatch] = useReducer(navReducer, {
        listItems,
    });

    const handleClick = (item) => {
        // item = e;
        console.log(item);

        if (!item.active) {
            state.listItems.map((item) =>
                item.element.classList.remove("active")
            );
            dispatch({
                type: "ACTIVE_LINK",
                payload: item,
            });
        }
    };
    console.log("render Nav Header");

    return (
        <header>
            <nav>
                <RenderLogo />
                <ul className="header-menu__list">
                    {state.listItems.map((item) => (
                        <RenderNavList
                            key={item.id}
                            item={item}
                            onClick={() => handleClick(item)}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
