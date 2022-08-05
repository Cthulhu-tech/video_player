export interface ElectronWindow extends Window {

    electron: {

        notificationApi: {

            closeAplication(): void;
    
        }

    }

}