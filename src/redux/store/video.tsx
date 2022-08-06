import { IAction, VideoPath } from "../../interface/reduxInterface";

const defaultState:VideoPath = {

    video: ""

}

const setVideo = 'setVideo';

export const VideoStore = (state = defaultState, action:IAction<string, string>) => {
    switch (action.type){
        case setVideo:
            return {video: action.payload}
        default:
            return state;
    }
}

export const setVideoPath = (payload: string | null) => ({ type: setVideo, payload });
