import { ReduxStore } from '../../../interface/reduxInterface';
import { videoLength, videoPosition } from '../../../redux/store/videoState';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect, useState } from 'react';

export const Video = (video: {src: string}) => {

    const dispatch = useDispatch();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [_canPlay, setPlay] = useState<CanPlayTypeResult>();
    const _video = useSelector((store:ReduxStore) => store.File);
    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    useEffect(() => {

        if(videoRef.current){

            if(videoState.play){
                
                videoRef.current.play();

            }else{

                videoRef.current.pause();

            }

            videoRef.current.volume = videoState.audio;
            videoRef.current.playbackRate = videoState.speed;
            videoRef.current.playbackRate = videoState.speed;

        }

    },[videoRef, videoState.audio, videoState.speed, videoState.videoLength, videoState.play, _video]);

    useEffect(() => {
        
        if(videoRef.current && videoState.videoPosition.change)
            videoRef.current.currentTime = videoState.videoPosition.position;

    }, [videoState.videoPosition])

    const timeHandler = () => videoRef.current && dispatch(videoPosition({change: false, position: videoRef.current.currentTime}));
    const handleLoadedMetadata = () => videoRef.current && dispatch(videoLength(videoRef.current.duration));

    return  <video 
                onTimeUpdate={timeHandler}
                onLoadedMetadata={handleLoadedMetadata}
                className="video-player__video" 
                ref={videoRef} 
                src={video.src} 
                width="100%" height="100%"
            />

}