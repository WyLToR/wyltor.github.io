import { createContext, useState } from "react";

export const darkContext = createContext("");
export function DarkContextProvider({ children }) {
    const [dark, setDark] = useState(localStorage.getItem("dark") != null ? localStorage.getItem("dark") : false);
    return (
        <darkContext.Provider value={{ dark, setDark }}>
            {children}
        </darkContext.Provider>
    )
}