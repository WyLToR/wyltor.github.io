import { Container, Image, Placeholder } from "react-bootstrap";
import secondWebshop from '../img/projects/second-webshop.png'
import firstWebshop from '../img/projects/first-webshop.png'
import "../Style/Projects.css"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { darkContext } from "../Contexts/darkContext";
export default function Projects() {
    const { dark } = useContext(darkContext)
    const [clockModal, setClockModal] = useState(false)
    return (
        <>
            <main className="main-page" id="projects">
                <div className='welcome-text'>
                    <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Projects</h1>
                </div>
                <Container className="projects-grid">
                    <Link to="https://team-02-project-fe323.web.app/" className="project-link" style={dark ? { color: 'white' } : { color: 'black' }}>
                        <div className="project-description">
                            <Image src={firstWebshop} alt="first-webshop" className="w-50" />
                            <div>
                                <h3>E-Commerce site</h3>
                                <ul>
                                    <li>Frontend: React (firebase hosting)</li>
                                    <li>Backend: firebase</li>
                                </ul>
                                <h6>Features: form validation</h6>
                                <Link to="https://github.com/WyLToR/Frontend-Project">Github repository</Link>
                                <h6 className="project-tip">This project was the first e-commerce site</h6>
                            </div>
                        </div>
                    </Link>
                    <Link to="https://fullstack-webshop.firebaseapp.com/" className="project-link" style={dark ? { color: 'white' } : { color: 'black' }}>
                        <div className="project-description">
                            <Image src={secondWebshop} alt="second-webshop" className="w-50" />
                            <div>
                                <h3>E-Commerce site</h3>
                                <ul>
                                    <li>Frontend: React (firebase hosting)</li>
                                    <li>Backend: expressJS, PostgreSQL, (render.com hosting)</li>
                                </ul>
                                <h6>Features: form validation, authentication, email verify, useQuery, swagger</h6>
                                <Link to="https://github.com/WyLToR/Webshop-Project">Github repository</Link>
                                <h6 className="project-tip">the page may take more time to load</h6>
                            </div>
                        </div>
                    </Link>
                </Container>
            </main>
        </>
    )
}