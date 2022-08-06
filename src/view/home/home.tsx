import { Video } from "../../compopnents/layouts/video/video";
import { ReduxStore } from "../../interface/reduxInterface";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Home = () => {

    const store = useSelector((store:ReduxStore) => store.Video.video);

    useEffect(() => {},[store]);

    return  <Video src={store}/>

}