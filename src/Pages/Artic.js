import { useContext } from "react"
import { darkContext } from "../Contexts/darkContext"
import "../Style/Artic.css"
export default function Artic({ artic }) {
    const { dark } = useContext(darkContext)
    return (
        <div className="artic-container" style={dark ? { border: "1px solid white", backgroundColor: "black" } : { border: "1px solid black", backgroundColor: "white" }}>
            <h3 style={dark ? { backgroundColor: "black", color: "white" } : { border: "1px solid black", backgroundColor: "white", color: "black" }}>{artic.Title}</h3>
            <b style={dark ? { backgroundColor: "black", color: "white" } : { border: "1px solid black", backgroundColor: "white", color: "black" }}>{artic.Date}</b>
            <p style={dark ? { backgroundColor: "black", color: "white" } : { border: "1px solid black", backgroundColor: "white", color: "black" }}>{artic.Description}</p>
        </div>
    )
}