import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button"
import arrow_up from "../img/icon/arrow_up.svg"
import "../Style/LifeLine.css"
import { useContext, useEffect, useRef } from 'react';
import { darkContext } from '../Contexts/darkContext';
import Experience from "./Experience"
export default function LifeLine({ visible, setVisible, contRef, cb }) {
    const { dark } = useContext(darkContext)
    const opt = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }
    useEffect(() => {
        const observer = new IntersectionObserver(cb, opt)
        if (contRef.current) observer.observe(contRef.current)
        return () => {
            if (contRef.current) observer.unobserve(contRef.current)
        }
    }, [contRef, opt])
    return (
        <main style={dark ? { color: 'black' } : { color: 'white' }}>
            <Container className='lifeline-grid' id='lifeline' style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
                {visible ?
                    <>
                        <div className='img' style={{ animation: "enter-animation 1s" }}>
                            <img className='picture' src='https://firebasestorage.googleapis.com/v0/b/portfolio-63560.appspot.com/o/ProfilePicture%2Fprof.jpg?alt=media&token=9c55489c-2579-4fe8-b393-e1d92616cde3&_gl=1*xz0qzd*_ga*MTA0NzEwNzMzOS4xNjgzNjQxOTQw*_ga_CW55HF8NVT*MTY4NjI5MTMyMS4xMC4xLjE2ODYyOTEzMzguMC4wLjA.' />
                        </div>
                        <div className='desc' style={{ animation: "enter-animation 1s" }}>
                            <h1 style={dark ? { color: 'white' } : { color: 'black' }}>My name is Patrik Békési</h1>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>I was born in Hungary in 1997</h2>
                        </div>
                        <div className='descColOne' style={{ animation: "enter-animation 1s" }}>
                            <h3 style={dark ? { color: 'white' } : { color: 'black' }}>When I was around 14 years old, I made up my mind that I would make a living out of IT.</h3>
                            <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Back then, I had no idea how to get started.
                                So, I enrolled in a Computer Science High School.</h3>
                        </div>
                        <div className='empty right' style={{ animation: "enter-animation 1s" }}>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>YOUNG</h3>
                            </div>
                        </div>
                        <div className='empty left' style={{ animation: "enter-animation 1s" }}>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>ENDURANCE</h3>
                            </div>
                        </div>
                        <div className='desc' style={{ animation: "enter-animation 1s" }}>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>At the beginning, they often say that everything is complicated. </h2>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Well, I trusted that perseverance would pay off. I fought tirelessly for four years.</h2>
                        </div>
                        <div className='descColOne' style={{ animation: "enter-animation 1s" }}>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Then came the dark period. I couldn't afford to attend a coding school. So, I decided to gather the money for it.</h2>
                        </div>
                        <div className='empty right' style={{ animation: "enter-animation 1s" }}>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>ISSUE</h3>
                            </div>
                        </div>
                        <div className='empty left' style={{ animation: "enter-animation 1s" }}>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>STRUGGLE</h3>
                            </div>
                        </div>
                        <div className='desc' style={{ animation: "enter-animation 1s" }}>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>I went into the world of commerce to learn how to work persistently. I faced numerous obstacles along the way. By the time I reached my goal,</h2>
                        </div>
                        <div className='descColOne' style={{ animation: "enter-animation 1s" }}>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>I enrolled in my future-oriented training school, Progmatic, where a new world opened up for me. I finally started to feel like I'm on the right path!</h2>
                        </div>
                        <div className='empty right' style={{ animation: "enter-animation 1s" }}>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>GOAL</h3>
                            </div>
                        </div>
                        <div className='descLast' style={{ animation: "enter-animation 1s" }}>
                            <h3 style={dark ? { color: 'white' } : { color: 'black' }}>With this <b>determination</b>, I started my journey in <b>development</b>.
                                I feel truly resolute in my purpose.
                                I believe that my creations will make a lasting impact on the world,
                                and I aspire to be recognized as a <b>valuable team member</b> and a <b>skilled developer</b>.</h3>
                        </div>
                        <div className='descLast'>
                            <h1 style={dark ? { color: 'white' } : { color: 'black' }}>Experiences</h1>
                        </div>
                        <div className='empty left'>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>First Work</h3>
                            </div>
                        </div>
                        <div className='desc'>
                            <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Hovány Corporate</h2>
                            <h3 style={dark ? { color: 'white' } : { color: 'black' }}>2017.07-2021.07</h3>
                            <ul style={dark ? { color: 'white' } : { color: 'black' }}>
                                <li>New vehicle sales</li>
                                <li>Used vehicle sales</li>
                                <li>Regional representation</li>
                                <li>Documentation management</li>
                                <li>Used vehicle inspection</li>
                            </ul>
                        </div>
                        <div style={dark ? { color: 'white' } : { color: 'black' }}>
                            <div className='descColOne'>
                                <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Optimum Gold Car Corporate</h2>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>2021.08-2022.08</h3>
                                <ul style={dark ? { color: 'white' } : { color: 'black' }}>
                                    <li>Used vehicle sales</li>
                                    <li>Site maintenance</li>
                                    <li>Documentation management</li>
                                    <li>Vehicle repair</li>
                                    <li>Vehicle naturalization</li>
                                </ul>
                            </div>
                        </div>
                        <div style={dark ? { color: 'white' } : { color: 'black' }}>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Second Work</h3>
                            </div>
                        </div>
                        <div className='empty left'>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Third Work</h3>
                            </div>
                        </div>
                        <div style={dark ? { color: 'white' } : { color: 'black' }}>
                            <div className='desc'>
                                <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Hovány Dél-Alföld Corporate</h2>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>2022.09-2023.03</h3>
                                <ul style={dark ? { color: 'white' } : { color: 'black' }}>
                                    <li>New vehicle sales</li>
                                    <li>Used vehicle sales</li>
                                    <li>Regional representation</li>
                                    <li>Documentation management</li>
                                    <li>Used vehicle inspection</li>
                                </ul>
                            </div>
                        </div>
                        <div style={dark ? { color: 'white' } : { color: 'black' }}>
                            <div className='descColOne'>
                                <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Juvenal Corporate</h2>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>2023.04-Present</h3>
                                <ul style={dark ? { color: 'white' } : { color: 'black' }}>
                                    <li>New vehicle sales</li>
                                    <li>Regional representation</li>
                                    <li>Documentation management</li>
                                </ul>
                            </div>
                        </div>
                        <div className='empty right'>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Fourth Work</h3>
                            </div>
                        </div>
                        <div className='descLast'>
                            <h1 style={dark ? { color: 'white' } : { color: 'black' }}>Studies</h1>
                        </div>
                        <div className='empty left'>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>School</h3>
                            </div>
                        </div>
                        <div style={dark ? { color: 'white' } : { color: 'black' }}>
                            <div className='desc'>
                                <h2 style={dark ? { color: 'white' } : { color: 'black' }}>IFF Hungary</h2>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>2012-2013</h3>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Multimedia&Character Designer</h3>
                                <ul style={dark ? { color: 'white' } : { color: 'black' }}>
                                    <li>Adobe <b>Photoshop</b></li>
                                    <li>Adobe <b>Premiere Pro</b></li>
                                    <li>Adobe <b>Flash</b></li>
                                    <li>Adobe <b>Bridge</b></li>
                                    <li>Adobe <b>Lightroom</b></li>
                                    <li>Adobe <b>XD</b></li>
                                </ul>
                            </div>
                        </div>
                        <div style={dark ? { color: 'white' } : { color: 'black' }}>
                            <div className='descColOne'>
                                <h2 style={dark ? { color: 'white' } : { color: 'black' }}>Progmatic Academy</h2>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>2022-2023</h3>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Fullstack Developer</h3>
                                <ul style={dark ? { color: 'white' } : { color: 'black' }}>
                                    <li><b>Frontend</b> (HTML5, CSS, JS/TS (ES6), AJAX, REST API, REACT, GIT, SCRUM)</li>
                                    <li><b>Backend</b> (NodeJS, expressJS, SQL)</li>
                                </ul>
                            </div>
                        </div>
                        <div className='empty right'>
                            <div className='block'>
                                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>School</h3>
                            </div>
                        </div>
                        <div className='descLast'>
                            <Experience />
                            <Button onClick={() => setTimeout(() => {
                                setVisible(false)
                            }, 1000)} href='#aboutme' size="sm" variant="outline-primary">Expand less <img src={arrow_up} width="15px" /></Button>
                        </div>
                    </>
                    :
                    ""}

            </Container>
        </main>
    )

}