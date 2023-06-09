import LifeLine from "./LifeLine"
import "../Style/Aboutme.css"
import { useRef, useState } from "react"
import Button from "react-bootstrap/Button"
import arrow_down from "../img/icon/arrow_down.svg"
export default function AboutMe() {
    const [visible, setVisible] = useState(false)
    const cb = (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting);
    }
    const contRef = useRef(null)
    return (
        <>
            <main className="main-page">
                <div className='welcome-text'>
                    <h1 className='animated-element'>About Me</h1>
                    <Button
                        variant="outline-primary"
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