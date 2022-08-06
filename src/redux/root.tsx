
import { combineReducers, createStore } from "redux";
import { VideoStateStore } from "./store/videoState";
import { VideoStore } from "./store/video";
import { FileStore } from "./store/file";

export const rootReducer = combineReducers({
    File: FileStore,
    Video: VideoStore,
    VideoStore: VideoStateStore
});

export const store = createStore(rootReducer);
