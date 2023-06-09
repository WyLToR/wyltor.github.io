import { createContext, useEffect, useState } from "react";

export const darkContext = createContext("");
export function DarkContextProvider({ children }) {
    const [dark, setDark] = useState(localStorage.getItem("dark") == undefined ? false : localStorage.getItem("dark"));
    useEffect(() => {
        dark ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    }, [dark])
    return (
        <darkContext.Provider value={{ dark, setDark }}>
            {children}
        </darkContext.Provider>
    )
}