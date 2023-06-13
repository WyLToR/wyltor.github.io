import { useContext } from "react"
import { darkContext } from "../Contexts/darkContext"
import "../Style/Contact.css"
import codepen from "../img/Contact/codepen.png"
import facebook from "../img/Contact/facbook.png"
import linkedin from "../img/Contact/linkedin.png"
import github from "../img/Contact/github.png"

export default function Contact() {
    const { dark } = useContext(darkContext)
    return (
        <>
            <main className="main-page contact-page" style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }} id="contact">
                <div className='welcome-text'>
                    <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Contact</h1>
                </div>
                <div className="contact-icons">
                    <div className="img-side">
                        <a href="https://www.codepen.io/WyLToR"><img src={codepen} /></a>
                    </div>
                    <div className="img-side">
                        <a href="https://www.facebook.com/Patrik970526"><img src={facebook} /></a>
                    </div>
                    <div className="img-side">
                        <a href="https://www.linkedin.com/in/bekesi-patrik"><img src={linkedin} /></a>
                    </div >
                    <div className="img-side">
                        <a href="https://www.github.com/wyltor"><img style={dark ? { backgroundColor: 'white' } : { backgroundColor: 'white' }} src={github} /></a>
                    </div>
                </div >
            </main>

        </>
    )
}