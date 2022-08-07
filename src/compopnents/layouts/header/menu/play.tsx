import { speedVideoState } from "../../../../redux/store/videoState";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Player = () => {

    const dispatch = useDispatch();
    const [active, stateActive] = useState();

    return <li className="dropdown__link">
        Play
        <ul className="sub-dropdown dropdown-menu">
            <li className="sub-dropdown__link link">Play or Stop</li>
            <li className="sub-dropdown__link link">
                Speed
                <ul className="sub-sub-dropdown dropdown-menu">
                    <li className="sub-sub-dropdown__link link"
                        onClick={() => dispatch(speedVideoState(0.25))}
                    >0.25x</li>
                    <li className="sub-sub-dropdown__link link"
                        onClick={() => dispatch(speedVideoState(0.5))}
                    >0.5x</li>
                    <li className="sub-sub-dropdown__link link"
                        onClick={() => dispatch(speedVideoState(1))}
                    >1x</li>
                    <li className="sub-sub-dropdown__link link"
                        onClick={() => dispatch(speedVideoState(1.5))}
                    >1.5x</li>
                    <li className="sub-sub-dropdown__link link"
                        onClick={() => dispatch(speedVideoState(2))}
                    >2x</li>
                </ul>
            </li>
        </ul>
    </li>

}