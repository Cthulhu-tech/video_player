import { Outlet } from 'react-router-dom';
import { Footer } from './footer/footer';
import { Header } from './header/header';

import './layout.scss';

export const Layout = () => {

    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>

}
