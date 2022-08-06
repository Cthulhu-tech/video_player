import { ReduxStore } from "../../interface/reduxInterface";
import { setVideoPath } from "../../redux/store/video";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useVideoTrack = () => {

    const dispatch = useDispatch();
    const video = useSelector((store:ReduxStore) => store.File);

    const [position, setPosition] = useState(0);

    useEffect(() => { },[position, video]);

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

    return {next, prev}

}