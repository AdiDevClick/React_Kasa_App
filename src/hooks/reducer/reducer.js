import { useCallback, useReducer } from 'react';

export function navReducer(state, action) {
    switch (action.type) {
        case 'ACTIVE_LINK':
            return {
                ...state,
                listItems: state.listItems.map((item) =>
                    item === action.payload
                        ? { ...item, active: !item.active }
                        : { ...item, active: !item.active }
                ),
            };
        case 'RESET_ACTIVE':
            return {
                ...state,
                listItems: state.listItems,
            };
        default:
            throw Error('Action non reconnue: ' + action.type);
    }
}

export function dropdownReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_ELEMENTS':
            // Update the state with the new dropdown data
            console.log('Action Payload:', action.payload);
            return {
                ...state,
                elements: state.elements.map((element) => {
                    return element.id === action.payload.id
                        ? {
                              ...element,
                              ...action.payload,
                          }
                        : element;
                }),
            };
        case 'ADD_ELEMENTS':
            return {
                ...state,
                elements:
                    state.elements.id !== action.payload.id
                        ? [...state.elements, action.payload]
                        : null,
            };
        default:
            throw Error('Action non reconnue: ' + action.type);
    }
}

export function useDropDowns() {
    const [state, dispatch] = useReducer(dropdownReducer, {
        elements: [],
    });

    let biggestContent;
    let activeContents;

    if (state.elements.length > 0) {
        biggestContent = state.elements.reduce((max, value) => {
            if (value.active && value.height > (max.height ?? 0)) {
                return value;
            }
            return max;
        }, {});
        activeContents = state.elements.reduce((acc, value) => {
            if (value.active) {
                acc.push(value.height);
            }
            return acc;
        }, []);
    } else {
        biggestContent = 0;
    }

    return {
        showElements: state.elements,
        biggestContent: biggestContent.height,
        activeContents: activeContents,
        updateElements: useCallback(
            (element) =>
                dispatch({ type: 'UPDATE_ELEMENTS', payload: element }),
            []
        ),
        addElements: useCallback(
            (element) => dispatch({ type: 'ADD_ELEMENTS', payload: element }),
            []
        ),
    };
}
