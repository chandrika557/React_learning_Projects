import { configureStore } from "@reduxjs/toolkit";
import policiesReducer from "./Slices/policiesSlice";
import accountReducer from "./Slices/accountSlice";
import authReducer from "./Slices/authSlice";

const store = configureStore({
    reducer: {
        policies: policiesReducer, 
        account: accountReducer,
        auth: authReducer
    }
});

export default store;
