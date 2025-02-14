export function navReducer(state, action) {
    switch (action.type) {
        case "ACTIVE_LINK":
            return {
                ...state,
                listItems: state.listItems.map((item) =>
                    item === action.payload
                        ? { ...item, active: !item.active }
                        : { ...item, active: !item.active }
                ),
            };
        case "RESET_ACTIVE":
            // return {
            //     ...state,
            //     listItems: state.listItems.
            // }
            console.log("object");
            break;
        default:
            throw Error("Action non reconnue: " + action.type);
    }
}
