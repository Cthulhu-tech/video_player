import { Favorites } from './favorites';
import { Player } from './play';
import { File } from './file';
import { View } from './view';
import { Help } from './help';
import './menu.scss';


export const Menu = () => {

    return <section className="header__menu container">
        <ul className="dropdown container">
            <File/>
            <View/>
            <Player/>
            <Favorites/>
            <Help/>
        </ul>
    </section>

}