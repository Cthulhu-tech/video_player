import { app, BrowserWindow, ipcMain } from 'electron';
const electron = require('electron');
import * as path from 'path';

export const createWindow = () => {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    minWidth: 600,
    minHeight: 600,
    resizable: true,
    backgroundColor: 'black',
    webPreferences: {
      
      webSecurity: false,
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')

    },

    icon: path.join(__dirname, '../assets/icon.ico')
    
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

  ipcMain.on('close', (evt, arg) => app.quit());
  ipcMain.on('min', (evt, arg) => win.minimize());
  ipcMain.on('max', (evt, arg) => win.isMaximized() ? win.unmaximize() : win.maximize());

  ipcMain.on('openFile', (evt, arg) => {

    electron.dialog.showOpenDialog({
      properties:['openFile'],
      filters: [{name: 'Movies', extensions: ['mkv', 'avi', 'mp4']}]
    }).then((result) => {

      win.webContents.send("dataFile", result.filePaths);

    }).catch((err) => {

      console.log(err);

    })

  });

  ipcMain.on('addToPool', (evt, arg) => {

    electron.dialog.showOpenDialog({
      properties:['multiSelections'],
      filters: [{name: 'Movies', extensions: ['mkv', 'avi', 'mp4']}]
    }).then((result) => {

      win.webContents.send("dataPool", result.filePaths);

    }).catch((err) => {

      console.log(err);

    })

  });
  

}