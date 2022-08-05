export interface ElectronWindow extends Window {

    electron: {

        api: {
            closeAplication(): void;
            minAplication(): void;
            maxAplication(): void;
            openFile(): void;
            receive: (channel: string, fn: (data: string[]) => void) => void;
        }
    }

}