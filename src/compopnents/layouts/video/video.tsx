import { ReduxStore } from '../../../interface/reduxInterface';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Video = (video: {src: string}) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    useEffect(() => {

        if(videoRef.current){

            if(videoState.play){
                
                videoRef.current.play();

            }else{

                videoRef.current.pause();

            }

            videoRef.current.playbackRate = videoState.speed;
            videoRef.current.playbackRate = videoState.speed;

        }

    },[videoState]);

    return <video className="video-player__video" ref={videoRef} src={video.src} width="100%" height="100%" />

}