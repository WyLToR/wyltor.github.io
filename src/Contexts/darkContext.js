import { createContext, useEffect, useState } from "react";

export const darkContext = createContext("");
export function DarkContextProvider({ children }) {
    const [dark, setDark] = useState(localStorage.getItem("dark")==null?false:JSON.parse(localStorage.getItem("dark")));
    return (
        <darkContext.Provider value={{ dark, setDark }}>
            {children}
        </darkContext.Provider>
    )
}