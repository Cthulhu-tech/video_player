import { setFileStore, updateFileStore } from "../../../../redux/store/file";
import { ElectronWindow } from "../../../../interface/electronInterface";
import { playVideoState } from "../../../../redux/store/videoState";
import { setVideoPath } from "../../../../redux/store/video";
import { useDispatch } from "react-redux";

declare const window: ElectronWindow;

export const File = () => {

    const dispatch = useDispatch();

    const openFile = () => {

        window.electron.api.openFile();
        dispatch(playVideoState(false));

    };
    const AddToPool = () =>{

        window.electron.api.addToPool();
        dispatch(playVideoState(false));

    };
    const openUrl = () => {}

    window.electron.api.receive("dataFile", (data:string[]) => {
        
        dispatch(updateFileStore(data));
        dispatch(setVideoPath("file:///" + data[0]));

    });
    window.electron.api.receive("dataPool", (data:string[]) => {

        dispatch(setFileStore(data));
        dispatch(setVideoPath("file:///" + data[0][0]));
 
    });

    return <li className="dropdown__link">
        File
        <ul className="sub-dropdown dropdown-menu">
            <li className="sub-dropdown__link link" onClick={openFile}>Open</li>
            <li className="sub-dropdown__link link" onClick={AddToPool}>Add to pool...</li>
            <li className="sub-dropdown__link link" onClick={openUrl}>Open URL- link...</li>
        </ul>
    </li>

}