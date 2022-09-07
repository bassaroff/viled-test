import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

export const rootReducer = combineReducers({
    sidebarOpenStatus: sidebarReducer,
});

export const store = configureStore({
    reducer: rootReducer,
})
