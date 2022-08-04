import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./reducers/user.reducer";
// import { authReducer } from "./reducers/auth.reducer";

const initState = {
    user: {
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
        // user: userReducer,
        // auth: authReducer,
    },
});

export default store;
