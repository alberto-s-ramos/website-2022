import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: string | (() => string)){
    const [value, setValue] = useState<string>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === "function") {
            return (initialValue as () => string)();
        } else {
            return initialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue] as [typeof value, typeof setValue]
}