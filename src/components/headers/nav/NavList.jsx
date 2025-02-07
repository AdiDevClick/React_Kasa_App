import { useEffect, useRef } from "react";

/**
 *
 * @param {object} item
 * @param {CallableFunction} onClick
 * @returns {JSX.Element}
 */
export function RenderNavList({ item, onClick }) {
    const activeRef = useRef(null);

    useEffect(() => {
        item["element"] = activeRef.current;
    }, [item]);

    console.log("render NavList");
    return (
        <>
            <li
                id={item.id}
                ref={activeRef}
                className={item.active ? "active" : ""}
                onClick={() => onClick(item)}
            >
                <a href="#">{item.name}</a>
            </li>
        </>
    );
}
