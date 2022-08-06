import { playVideoState } from "../../redux/store/videoState";
import { ReduxStore } from "../../interface/reduxInterface";
import { setVideoPath } from "../../redux/store/video";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useVideoTrack = () => {

    const dispatch = useDispatch();
    const video = useSelector((store:ReduxStore) => store.File);
    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    const [position, setPosition] = useState(0);

    useEffect(() => { },[position, video]);

    const play = () => {

        !videoState.play && dispatch(playVideoState(true));

    }

    const pause = () => {

        videoState.play && dispatch(playVideoState(false));

    }

    const first = () => {

        setPosition(0);
        dispatch(setVideoPath("file:///" + video.file[0]));

    }
    const last = () => {

        setPosition(video.file.length - 1);
        dispatch(setVideoPath("file:///" + video.file[video.file.length - 1]));

    }

    const next = () => {

        if(position < video.file.length - 1 && position >= 0){

            setPosition(position + 1);
            dispatch(setVideoPath("file:///" + video.file[position + 1]));

        }else{
            
            setPosition(0);
            dispatch(setVideoPath("file:///" + video.file[0]));

        }

    }

    const prev = () => {

        if(position <= video.file.length - 1 && position > 0){

            setPosition(position - 1);
            dispatch(setVideoPath("file:///" + video.file[position - 1]));

        }else{
            
            setPosition(video.file.length - 1);
            dispatch(setVideoPath("file:///" + video.file[video.file.length - 1]));

        }

    }

    return {next, prev, first, last, play, pause};

}