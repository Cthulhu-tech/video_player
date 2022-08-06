import { FileLoader, IAction } from "../../interface/reduxInterface";

const defaultState:FileLoader = {

    file: []

}

const setFile = 'setFile';
const updateFile = 'updateFile';

export const FileStore = (state = defaultState, action:IAction<string, string[][]>) => {
    switch (action.type){
        case setFile: 
        return {file: Array.from(new Set([...state.file, ...(action.payload as string[][]).flat()]))}
    case updateFile:
        return {file: [...(action.payload as string[][]).flat()]}
    default:
        return state;
    }
}

export const setFileStore = (payload: string[]) => ({ type: setFile, payload });
export const updateFileStore = (payload: string[]) => ({ type: updateFile, payload });
