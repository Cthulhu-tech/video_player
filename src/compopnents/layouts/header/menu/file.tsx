import { ElectronWindow } from "../../../../interface/electronInterface";

declare const window: ElectronWindow;

export const File = () => {

    const openFile = () => window.electron.api.openFile();
    const openUrl = () => {}

    window.electron.api.receive("dataFile", (data:string[]) => {
        console.log(data);
    });

    return <li className="dropdown__link">
        File
        <ul className="sub-dropdown dropdown-menu">
            <li className="sub-dropdown__link link" onClick={openFile}>Open</li>
            <li className="sub-dropdown__link link" onClick={openUrl}>Open URL- link...</li>
        </ul>
    </li>

}