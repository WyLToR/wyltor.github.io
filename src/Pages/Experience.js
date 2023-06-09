import { useContext } from "react"
import { darkContext } from "../Contexts/darkContext"

export default function Experience() {
    const {dark}=useContext(darkContext)
    return (
        <main className="main-page" style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }} id="experience">
            <div className='welcome-text'>
                <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Documents</h1>
            </div>
        </main>
    )
}