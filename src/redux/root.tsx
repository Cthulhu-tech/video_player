
import { combineReducers, createStore } from "redux";
import { VideoStateStore } from "./store/videoState";
import { VideoStoreSrc } from "./store/videoSrc";
import { VideoStore } from "./store/video";
import { FileStore } from "./store/file";

export const rootReducer = combineReducers({
    File: FileStore,
    Video: VideoStore,
    VideoStore: VideoStateStore,
    VideoLink: VideoStoreSrc
});

export const store = createStore(rootReducer);
