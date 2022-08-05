import { NavLink } from 'react-router-dom';

export const Favorites = () => {

    return <li className="dropdown__link">
    Favorites
    <ul className="sub-dropdown dropdown-menu">
        <NavLink to="/noted" className="sub-dropdown__link link">Noted</NavLink>
        <NavLink to="/last" className="sub-dropdown__link link">Last viewed</NavLink>
    </ul>
</li>

}