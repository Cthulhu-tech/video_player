import { setVideoSrc } from "../../redux/store/videoSrc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './link.scss';

export const Link = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [link, setLink] = useState('');

    const linkHandler = () => {

        navigate("/", { replace: true });
        dispatch(setVideoSrc(link));

    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setLink(event?.target.value);

    return <section className="link__container">
        <input onChange={inputHandler} className="link__input" value={link}/>
        <button className="link__button"
            onClick={linkHandler}
        >Open url video</button>
    </section>
    

}