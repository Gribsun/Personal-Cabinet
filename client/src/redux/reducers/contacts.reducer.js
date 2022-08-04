export function contactsReducer(state = [], action) {
    switch (action.type) {
        case "GET_CONTACTS":
            return action.payload;
        case "ADD_CONTACT":
            return [action.payload, ...state];
        default:
            return state;
    }
}
