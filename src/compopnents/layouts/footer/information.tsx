import { ReduxStore } from '../../../interface/reduxInterface';
import { convertTime } from '../../../utils/converTime';
import { useSelector } from 'react-redux';
import Ticker from 'react-ticker';
import { useMemo } from 'react';


export const Information = () => {

    const videoState = useSelector((store:ReduxStore) => store.VideoStore);

    const getPath = (store:string | string[]) => {
        if(Array.isArray(store))
            return decodeURI(store[0].replace(/^.*(\\|\/|\:)/, ''));
        else
            return decodeURI(store.replace(/^.*(\\|\/|\:)/, ''));
    }

    const store = useSelector((store:ReduxStore) => store.Video.video);

    const urlPath = useMemo(() => getPath(store), [store]);

    return  <div className="video-info-container">
        <p className="video-info-text">{videoState.play && videoState.videoLength > 0 ? "Play" : "Stop"}</p>
        <div className="video-info-text-container"><Ticker>{() => <p className="video-info-text">{urlPath}</p>}</Ticker></div>
        <p className="video-info-text">{videoState.videoLength > 0 ? convertTime(videoState.videoPosition.position) + " / " + convertTime(videoState.videoLength) : "00:00" }</p>
    </div>

}