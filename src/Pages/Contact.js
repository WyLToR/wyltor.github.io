import { useContext } from "react"
import { darkContext } from "../Contexts/darkContext"

export default function Contact() {
    const { dark } = useContext(darkContext)
    return (
        <main className="main-page" style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
            <div className='welcome-text'>
                <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Contact</h1>
            </div>
        </main>
    )
}