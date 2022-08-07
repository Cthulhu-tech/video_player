import { audioVideoState, playVideoState, videoPosition } from "../../redux/store/videoState";
import { ReduxStore } from "../../interface/reduxInterface";
import { useLocation, useNavigate } from "react-router-dom";
import { setVideoPath } from "../../redux/store/video";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useVideoTrack = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const _video = useSelector((store:ReduxStore) => store.File);
    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    const [_audio, setAudio] = useState(0);
    const [_down, stateDown] = useState(false);
    const [position, setPosition] = useState(0);
    const [_pause, statePause] = useState(true);

    useEffect(() => {},[position, _video, _down, _pause, _audio]);

    const audioState = () => {

        if(videoState.audio > 0){

            setAudio(videoState.audio);

            dispatch(audioVideoState(0));

        }else if(_audio === 0){

            dispatch(audioVideoState(1));

        }else{

            dispatch(audioVideoState(_audio));

        }

    }

    const play = () => {

        if(pathname !== '/') navigate("/", { replace: true });

        statePause(false);
        !videoState.play && _video.file.length > 0 && dispatch(playVideoState(true));
    };
    
    const pause = () => {
        statePause(true);
        videoState.play && _video.file.length > 0 && dispatch(playVideoState(false));
    };
    

    const changeAudio = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(audioVideoState(+event.target.value));
    const cahngeVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        if(+event.target.value === videoState.videoLength) pause();
        videoState.videoLength > 0 && dispatch(videoPosition({change: _down, position: +event.target.value}));

    }

    const up = () => {

        !_pause && !videoState.play && _video.file.length > 0 && dispatch(playVideoState(true));
        stateDown(false);

    }

    const down = () => {

        videoState.play && _video.file.length > 0 && dispatch(playVideoState(false))
        stateDown(true);
    
    }

    const first = () => {
        pause();
        setPosition(0);
        dispatch(setVideoPath(_video.file[0]));

    }
    const last = () => {
        pause();
        setPosition(_video.file.length - 1);
        dispatch(setVideoPath(_video.file[_video.file.length - 1]));

    }

    const next = () => {
        pause();
        if(position < _video.file.length - 1 && position >= 0){

            setPosition(position + 1);
            dispatch(setVideoPath(_video.file[position + 1]));

        }else{
            
            setPosition(0);
            dispatch(setVideoPath(_video.file[0]));

        }

    }

    const prev = () => {
        pause();
        if(position <= _video.file.length - 1 && position > 0){

            setPosition(position - 1);
            dispatch(setVideoPath(_video.file[position - 1]));

        }else{
            
            setPosition(_video.file.length - 1);
            dispatch(setVideoPath(_video.file[_video.file.length - 1]));

        }

    }

    return {next, prev, first, last, play, pause, changeAudio, cahngeVideo, down, up, audioState};

}