import { ReduxStore } from '../../../interface/reduxInterface';
import { useVideoTrack } from '../../hook/useVideoTrack';
import { useSelector } from 'react-redux';
import './footer.scss';
import { useEffect } from 'react';

export const Footer = () => {

    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    const {prev, next, first, last, play, pause} = useVideoTrack();

    useEffect(() => {console.log(videoState)},[videoState]);

    return <footer className="footer">
        <div className="footer__button-container">
            <div className="button-player" onClick={play}>
                <div className="footer__button play"></div>
            </div>
            <div className="button-player" onClick={pause}>
                <div className="footer__button stop"></div>
            </div>            
            <div className="footer__button"></div>
        </div>
        <div className="footer__button-container">
            <div className="button-player" onClick={first}>
                <div className="footer__button first"></div>
            </div>
            <div onClick={prev} className="button-player">
                <div className="footer__button prev"></div>
            </div>
            <div onClick={next} className="button-player">
                <div className="footer__button next"></div>
            </div>
            <div className="button-player" onClick={last}>
                <div className="footer__button first right"></div>
            </div>
        </div>
        <div className="footer__button-container">
            <div className="footer__button"></div>
        </div>
    </footer>

}