export function contactsReducer(state = [], action) {
    switch (action.type) {
        case "GET_CONTACTS":
            return action.payload;
        case "GET_ONE_CONTACT":
            return action.payload;
        case "ADD_CONTACT":
            return [action.payload, ...state];
        case "EDIT_CONTACT":
            return state.map(item => item.id === action.payload.id ? action.payload : item);
        case "DELETE_CONTACT":
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
