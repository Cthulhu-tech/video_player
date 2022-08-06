import { IAction, VideoState } from "../../interface/reduxInterface";

const defaultState:VideoState = {

    play: false,
    speed: 1,
    audio: 100

}

const playVideo = "play";
const speedVideo = "speed";
const audioVideo = "audio";

export const VideoStateStore = (state = defaultState, action:IAction<string, boolean | number>) => {
    switch (action.type){
        case playVideo:
            return { ...state, play: action.payload}
        case speedVideo:
            return {...state, speed: action.payload}
        case audioVideo:
            return {...state, audio: action.payload}
        default:
            return state;
    }
}

export const playVideoState = (payload: boolean) => ({ type: playVideo, payload });
export const speedVideoState = (payload: number) => ({ type: speedVideo, payload });
export const audioVideoState = (payload: number) => ({ type: audioVideo, payload });
