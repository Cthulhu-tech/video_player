import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { app, BrowserWindow } from 'electron';
import { createWindow } from "./createWindow";

app.whenReady().then(() => {

  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  createWindow();

  app.on('activate', () => (BrowserWindow.getAllWindows().length === 0) && createWindow());

  app.on('window-all-closed', () => (process.platform !== 'darwin') && app.quit());

});
