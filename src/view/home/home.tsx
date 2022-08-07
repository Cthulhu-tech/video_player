import { Video } from "../../compopnents/layouts/video/video";
import { ReduxStore } from "../../interface/reduxInterface";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Iframe from "react-iframe";

export const Home = () => {

    const store = useSelector((store:ReduxStore) => store.Video.video);
    const link = useSelector((store:ReduxStore) => store.VideoLink.video);

    useEffect(() => {},[link, store]);

    return  !!link ? <Iframe url={link}/> : <Video src={store}/>

}