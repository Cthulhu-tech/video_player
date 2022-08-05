import { ElectronWindow } from "../../interface/electronInterface";

declare const window: ElectronWindow;

export const Header = () => {

    const close = () => window.electron.notificationApi.closeAplication();

    return <>
        <header className="header">
        
        </header>
    <button onClick={close}>click</button>
    </>

}