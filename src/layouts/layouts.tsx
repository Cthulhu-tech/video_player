import { Outlet } from "react-router-dom";
import Titlebar from "./titlebar";
import './layouts.scss';

const Layouts = () => {

    return <>
        <Titlebar/>
        <Outlet/>
    </>

}

export default Layouts;
