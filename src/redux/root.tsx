import { combineReducers, createStore } from "redux";
import { VideoStore } from "./store/video";
import { FileStore } from "./store/file";

export const rootReducer = combineReducers({
    File: FileStore,
    Video: VideoStore
});

export const store = createStore(rootReducer);
