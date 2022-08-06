import { useVideoTrack } from '../../hook/useVideoTrack';
import './footer.scss';

export const Footer = () => {

    const {prev, next} = useVideoTrack(); 

    return <footer className="footer">
        <div onClick={next}>next</div>
        <div onClick={prev}>prev</div>
    </footer>

}