import { app, BrowserWindow } from 'electron';
import * as path from 'path';

export const options = {
    frame: false,
    resizable: true,
    minWidth: 320,
    minHeight: 240,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }

}
