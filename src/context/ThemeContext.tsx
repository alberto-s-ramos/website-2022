import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

type ThemeProviderProps = {
    children: ReactNode
}

type ThemeContext = {
    toggleTheme: () => void,
    getTheme: () => string
}
export const ThemeContext = createContext({} as ThemeContext);

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useLocalStorage<string>( 'theme', 'dark')

    useEffect(() => {
        window.localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const getTheme = () => {
        return theme
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, getTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}