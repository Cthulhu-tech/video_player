import { IAction, VideoPath } from "../../interface/reduxInterface";

const defaultState:VideoPath = {

    video: ""

}

const setVideo = 'setVideoSrc';

export const VideoStoreSrc = (state = defaultState, action:IAction<string, string>) => {

    switch (action.type){
        case setVideo:
            return {video: action.payload}
        default:
            return state;
    }
}

export const setVideoSrc = (payload: string | null) => ({ type: setVideo, payload });
