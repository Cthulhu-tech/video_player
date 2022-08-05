import { combineReducers, createStore } from "redux";
import { FileStore } from "./store/file";

export const rootReducer = combineReducers({
    File: FileStore,
});

export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer);
