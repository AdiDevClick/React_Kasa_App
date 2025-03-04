import { useEffect } from 'react';

/**
 * Défini le titre du document et
 * réassigne l'ancien lorsque l'on quitte la page -
 * @param {string} docTitle - Le nom du document actuel
 */
export function useDocumentTitle(docTitle) {
    useEffect(() => {
        const oldTitle = document.title;
        document.title = 'Kasa - ' + docTitle;

        return () => {
            document.title = oldTitle;
        };
    }, [docTitle]);
}
