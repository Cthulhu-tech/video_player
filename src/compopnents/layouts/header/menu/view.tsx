import { NavLink } from "react-router-dom"

export const View = () => {

    return <li className="dropdown__link">
    View
    <ul className="sub-dropdown dropdown-menu">
        <li className="sub-dropdown__link link">Library mode</li>
        <li className="sub-dropdown__link link">Cover mode</li>
        <NavLink to="/stats" className="sub-dropdown__link link">Stats</NavLink>
    </ul>
</li>

}