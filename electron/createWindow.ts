import { app, BrowserWindow } from 'electron';
import * as path from 'path';

export const createWindow = () => {

    const win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      minWidth: 600,
      minHeight: 600,
      resizable: true,
      webPreferences: {
  
        preload: path.join(__dirname, 'preload.js')
  
      }
    })
  
    if (app.isPackaged) win.loadURL(`file://${__dirname}/../index.html`);
    else {
  
      win.loadURL('http://localhost:3000');
  
      win.webContents.openDevTools();
  
        require('electron-reload')(__dirname, {
            electron: path.join(__dirname,
            '..',
            '..',
            'node_modules',
            '.bin',
            'electron' + (process.platform === "win32" ? ".cmd" : "")),
            forceHardReset: true,
            hardResetMethod: 'exit'
        });
  
    }
  
}