const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {

  api: {

    closeAplication() {

        ipcRenderer.send('close');
        
    },

    minAplication() {

      ipcRenderer.send('min');
      
    },

    maxAplication() {

      ipcRenderer.send('max');
    
    },
    
    openFile() {

      ipcRenderer.send('openFile');

    },

    addToPool() {

      ipcRenderer.send('addToPool');

    },

    receive: (channel:string, fn:(data:string[]) => void) => {
      switch (channel) {
        case "dataFile":
          ipcRenderer.on(channel, (event, ...args) => fn(args));
          break;
        case "dataPool":
          ipcRenderer.on(channel, (event, ...args) => fn(args));
          break;
      }

    }

  }

})