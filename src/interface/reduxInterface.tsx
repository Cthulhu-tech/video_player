export interface IAction<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export type FileLoader = {

    file: string[];

}

export type VideoPath = {

    video: string;

}

export type VideoState = {

    play: boolean;
    speed: number;
    audio: number;
    videoLength: number;
    videoPosition: videoPositionType;

}

export type videoPositionType = {
    change: boolean;
    position: number;
};

export type ReduxStore = {

    File: FileLoader;
    Video: VideoPath;
    VideoStore: VideoState;
    VideoLink: VideoPath;

}