export const Player = () => {

    return <li className="dropdown__link">
    Play
    <ul className="sub-dropdown dropdown-menu">
        <li className="sub-dropdown__link link">Play or Stop</li>
        <li className="sub-dropdown__link link">
            Speed
            <ul className="sub-sub-dropdown dropdown-menu">
                <li className="sub-sub-dropdown__link link">0.5x</li>
                <li className="sub-sub-dropdown__link link">1x</li>
                <li className="sub-sub-dropdown__link link">1.5x</li>
                <li className="sub-sub-dropdown__link link">2x</li>
            </ul>
        </li>
    </ul>
</li>

}