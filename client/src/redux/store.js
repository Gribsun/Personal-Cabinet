import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./reducers/contacts.reducer";
import { authReducer } from "./reducers/checkSession.reducer";

const initState = {
    contacts: {
        sLoading: false,
        value: [],
        error: null,
    },
    auth: {
        sLoading: false,
        value: [],
        error: null,
    },
};

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: authReducer,
    },
});

export default store;
