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

export type ReduxStore = {

    File: FileLoader;
    Video: VideoPath

}