import { useEffect } from "react";
import { createElement } from "../assets/functions/dom.js";

export function useDynamicStyles(paths) {
    // const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const styleElements = [];

        // Charger dynamiquement les fichiers CSS
        const loadStyles = () => {
            paths.forEach((path) => {
                const styleElement = createElement("link", {
                    rel: "stylesheet",
                    href: `src/assets/css/${path}`,
                    "data-style-path": `src/assets/css/${path}`,
                });

                document.head.appendChild(styleElement);
                styleElements.push(styleElement);
            });
            // setIsLoaded(true);
        };

        loadStyles();

        // Nettoyer les styles lorsque le composant est démonté ou les chemins changent
        return () => {
            if (styleElements.length > 0) {
                styleElements.forEach((styleElement) => {
                    if (styleElement && styleElement.parentNode) {
                        styleElement.parentNode.removeChild(styleElement);
                    }
                });
            }
        };
    }, [paths]);
}
