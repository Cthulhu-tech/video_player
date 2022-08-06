import { IAction, videoPositionType, VideoState } from "../../interface/reduxInterface";

const defaultState:VideoState = {

    play: false,
    speed: 1,
    videoPosition: {
        change: false,
        position: 0,
    },
    audio: 1,
    videoLength: 0,

}

const playVideo = "play";
const speedVideo = "speed";
const audioVideo = "audio";

const _videoLength = "videoLength";
const _videoPosition = "positionVideo";

export const VideoStateStore = (state = defaultState, action:IAction<string, boolean | number>) => {
    switch (action.type){
        case playVideo:
            return { ...state, play: action.payload}
        case speedVideo:
            return {...state, speed: action.payload}
        case audioVideo:
            return {...state, audio: action.payload}
        case _videoLength:
            return {...state, videoLength: action.payload}
        case _videoPosition:
            return {...state, videoPosition: action.payload}
        default:
            return state;
    }
}

export const playVideoState = (payload: boolean) => ({ type: playVideo, payload });
export const speedVideoState = (payload: number) => ({ type: speedVideo, payload });
export const audioVideoState = (payload: number) => ({ type: audioVideo, payload });

export const videoLength = (payload: number) => ({ type: _videoLength, payload });
export const videoPosition = (payload: videoPositionType) => ({ type: _videoPosition, payload });