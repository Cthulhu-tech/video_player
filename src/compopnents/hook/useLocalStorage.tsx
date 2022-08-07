import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: Array<number>) => {

    let [storedValue, setStoredValue] = useState<number[]>(() => {

        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as number[]) : initialValue;

    });

    const setValue = (value:number) => {

        let filter = storedValue.find(id => value === id);

        if(filter){

            storedValue = storedValue.filter(id => id !== value);

        }else{

            storedValue = [...storedValue, value];

        }

        setStoredValue(storedValue);

        if (typeof window !== "undefined") 
            window.localStorage.setItem(key, JSON.stringify(storedValue));

    };

    useEffect(() => {}, [storedValue]);

    return {storedValue, setValue};

}