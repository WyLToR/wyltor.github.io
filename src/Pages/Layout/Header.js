import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../../Style/Header.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from "react";
import { darkContext } from "../../Contexts/darkContext";
import dark_mode from "../../img/icon/dark_mode.svg"
import light_mode from "../../img/icon/light_mode.svg"
import Button from 'react-bootstrap/Button';
import { pageContext } from "../../Contexts/pageContext";

export default function Header() {
    const { dark, setDark } = useContext(darkContext)
    const { page, setPage } = useContext(pageContext)
    useEffect(() => {
        toast("The webpage is under development")
        console.log("The webpage is under development, if you saw bug, please notice me on my email")
    }, [page])
    const [url, setURL] = useSearchParams()
    const navigate = useNavigate();
    useEffect(() => {
        dark ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    }, [dark])
    return (
        <header className="header">
            <nav className="navbar-header d-flex justify-content-around align-items-center mt-5">
                    <div className="animated-element"><Button size="sm" onClick={() => navigate("/")}>WyLToR</Button></div>
                    <div className="animated-element"><Button size="sm" variant="outline-primary" href="#projects">Projects</Button></div>
                    <div className="animated-element"><Button size="sm" variant="outline-primary" color="black" href="#aboutme">AboutMe</Button></div>
                    <div className="animated-element"><Button size="sm" variant="outline-primary" href="#contact">Contact</Button></div>
                    <div className="animated-element">{dark ? <Button size="sm" variant="light" onClick={() => {
                        console.log()
                        setDark(false);
                        localStorage.setItem("dark", false)
                    }}><img src={light_mode} /></Button> : <Button size="sm" variant="light" onClick={() => {
                        setDark(true)
                        localStorage.setItem("dark", true)
                    }}><img src={dark_mode} /></Button>}</div>
            </nav>
        </header>
    )
}