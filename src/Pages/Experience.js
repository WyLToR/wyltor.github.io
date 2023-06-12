import { useContext } from "react"
import { darkContext } from "../Contexts/darkContext"
import "../Style/Experience.css"
import Bridge from "../img/experiences/bridge.png"
import CSS from "../img/experiences/css.png"
import HTML from "../img/experiences/html.png"
import JS from "../img/experiences/js.png"
import LIGHTROOM from "../img/experiences/lightroom.png"
import NODEJS from "../img/experiences/nodejs.png"
import PHOTOSHOP from "../img/experiences/photoshop.png"
import PREMIEREPRO from "../img/experiences/premierepro.png"
import REACT from "../img/experiences/react.png"
import RESTAPI from "../img/experiences/restapi.png"
import SQL from "../img/experiences/sql.png"
import TS from "../img/experiences/ts.png"
import XD from "../img/experiences/xd.png"
export default function Experience() {
    const { dark } = useContext(darkContext)
    const img = [HTML, CSS, JS, TS, REACT, NODEJS, RESTAPI, SQL, PHOTOSHOP, PREMIEREPRO, XD, Bridge, LIGHTROOM]
    return (
        <>
            <main className="main-page" style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }} id="experience">
                <div className='welcome-text'>
                    <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Experiences</h1>
                    <div className="experience-grid">
                        {img.map((img, index) => (
                            <>
                                <div className="experience-item" key={index}>
                                    <img src={img} alt="" style={dark ? { backgroundColor: 'dark' } : { backgroundColor: 'white' }}  className="experience-img" />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}