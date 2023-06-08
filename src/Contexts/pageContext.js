import { createContext, useState } from "react";

export const pageContext = createContext("");
export function PageContextProvider({ children }) {
    const [page, setPage] = useState("");
    return (
        <pageContext.Provider value={{ page, setPage }}>
            {children}
        </pageContext.Provider>
    )
}