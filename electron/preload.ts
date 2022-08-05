const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {

  notificationApi: {

    closeAplication() {

        ipcRenderer.send('close');
        
    },
    

  }

})