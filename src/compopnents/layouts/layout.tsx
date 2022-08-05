import { Outlet } from 'react-router-dom';
import { Header } from './header';
import './layout.scss';

export const Layout = () => {

    return <>
        <Header/>
        <Outlet/>
    </>

}
