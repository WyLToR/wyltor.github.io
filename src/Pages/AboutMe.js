import LifeLine from "./LifeLine"
import "../Style/Aboutme.css"
import { useContext, useRef, useState } from "react"
import Button from "react-bootstrap/Button"
import arrow_down from "../img/icon/arrow_down.svg"
import { darkContext } from "../Contexts/darkContext"
export default function AboutMe() {
    const { dark } = useContext(darkContext)
    const [visible, setVisible] = useState(false)
    const cb = (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting);
    }
    const contRef = useRef(null)
    return (
        <>
            <main className="main-page" style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
                <div className='welcome-text'>
                    <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>About Me</h1>
                    <Button
                        variant="primary"
                        onClick={() => setVisible(true)}
                        href="#lifeline">
                        <img src={arrow_down} />
                    </Button>
                </div>
            </main>
            <LifeLine visible={visible} setVisible={setVisible} contRef={contRef} cb={cb} />
        </>
    )
}