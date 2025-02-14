/**
 * Permet de céer un élément avec les attributs de son choix
 * ex : createElement('li', {
 *      class: 'myClass',
 *      role: 'myRole'
 * })
 * La fonction permet de vérifier si la valeur est nulle :
 * ex : createElement('li', {
 *      class: 'myClass',
 *      role: 'myRole',
 *      checked: todo.completed ? '' : null,
 * })
 * @param {String} tagName - NodeListOf.<HTMLElement>
 * @param {Object} attributes
 * @returns {HTMLElement}
 */
export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName);
    for (const [attribute, value] of Object.entries(attributes)) {
        if (value !== null) {
            element.setAttribute(attribute, value);
        }
    }
    return element;
}
