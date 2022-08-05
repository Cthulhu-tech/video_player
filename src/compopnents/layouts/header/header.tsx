import { ElectronWindow } from '../../../interface/electronInterface';
import { useState, useEffect } from 'react';

import restoreImg from '../../../assets/header/restore.svg';
import minImg from '../../../assets/header/minimaze.svg';
import maxImg from '../../../assets/header/maximaze.svg';
import closeImg from '../../../assets/header/close.svg';
import icon from '../../../assets/header/ico.png';
import { Menu } from './menu/menu';

import './header.scss';

declare const window: ElectronWindow;

export const Header = () => {

    const close = () => window.electron.api.closeAplication();
    const min = () => window.electron.api.minAplication();

    const max = () => {

        setFullscreen(!fullscreen);
        window.electron.api.maxAplication()
    
    }

    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {}, [fullscreen]);

    return  <header className="header">
        <section className="header__drag title-bar">
            <div className="container">
                <img src={icon} alt="ico" />
                <p className="header__paragraph_m">Media Player Classic</p>
            </div>
            <div className="header__manage">
                <button className="header__button container button"onClick={min}>
                    <img src={minImg} alt="min" />
                </button>
                <button className="header__button container button"onClick={max}>
                    <img src={fullscreen ? restoreImg : maxImg} alt="max" />
                </button>
                <button className="header__button button container close"onClick={close}>
                    <img src={closeImg} alt="close" />
                </button>
            </div>
        </section>
        <Menu/>
    </header>

}