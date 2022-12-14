import { videoPosition } from '../../../redux/store/videoState';
import { ReduxStore } from '../../../interface/reduxInterface';
import { useVideoTrack } from '../../hook/useVideoTrack';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './footer.scss';

import speak from '../../../assets/player/speak.png';
import muted from '../../../assets/player/muted.png';
import { Information } from './information';
import { useDispatch } from 'react-redux';

export const Footer = () => {

    const dispatch = useDispatch();
    const _video = useSelector((store:ReduxStore) => store.File);
    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    const {prev, next, first, last, play, pause, changeAudio, cahngeVideo, down, up, audioState} = useVideoTrack();

    useEffect(() => {},[videoState]);
    useEffect(() => { 

        if(videoState.videoPosition.position === videoState.videoLength){ 

            pause();
            videoState.videoLength > 0 && dispatch(videoPosition({change: false, position: 0}));

        }
    
    },[videoState.videoPosition])

    return <footer className="footer">
            <input className="footer__control" type="range" max={videoState.videoLength} value={videoState.videoPosition.position} onMouseUp={up} onMouseDown={down} onChange={cahngeVideo}/>
        <div className="footer__button-container">
            <div className="sub-footer__button-container">
                <div className={videoState.play && _video.file.length > 0 ? "button-player active-button" : _video.file.length > 0 ? "button-player active-hover" : "button-player"} onClick={play}>
                    <div className={_video.file.length > 0 ? "footer__button play active " : "footer__button play"}></div>
                </div>
                <div className={!videoState.play && _video.file.length > 0 ? "button-player active-button" : _video.file.length > 0 ? "button-player active-hover" : "button-player"} onClick={pause}>
                    <div className={_video.file.length > 0 ? "footer__button active stop" : "footer__button stop"}></div>
                </div>            
                <div className="footer__button"></div>
            </div>
            <div className="sub-footer__button-container">
                <div className={_video.file.length > 1 ? "button-player active-hover" : "button-player"} onClick={first}>
                    <div className={_video.file.length > 1 ? "footer__button first" : "footer__button first diactive"}></div>
                </div>
                <div className={_video.file.length > 1 ? "button-player active-hover" : "button-player"} onClick={prev}>
                    <div className={_video.file.length > 1 ? "footer__button prev active" : "footer__button prev"}></div>
                </div>
                <div className={_video.file.length > 1 ? "button-player active-hover" : "button-player"} onClick={next}>
                    <div className={_video.file.length > 1 ? "footer__button next active" : "footer__button next"}></div>
                </div>
                <div className={_video.file.length > 1 ? "button-player active-hover" : "button-player"} onClick={last}>
                    <div className={_video.file.length > 1 ? "footer__button first right" : "footer__button first diactive right"}></div>
                </div>
            </div>
            <div className="sub-footer__button-container last">
                <div className={_video.file.length > 1 ? "button-player active-hover" : "button-player"}>

                </div>
            </div>
            <div className="audio-slider-container">
                <img src={videoState.audio > 0 ? speak : muted} alt="speak" className="audio-image" 
                    onClick={audioState}
                />
                <input type="range" className="audio-range" step="0.01" min="0" max="1" value={videoState.audio} onChange={changeAudio}/>
            </div>
        </div>
        <Information/>
    </footer>

}
