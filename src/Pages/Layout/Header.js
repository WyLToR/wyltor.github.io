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
        navigate("/")
    }, [url])
    return (
        <header>
            <Navbar collapseOnSelect bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="animated-element"><Button  onClick={()=>navigate("/")}>WyLToR</Button></Navbar.Brand>
                    <Navbar.Text className="animated-element"><Button variant="outline-primary" color="black" href="#aboutme">About Me</Button></Navbar.Text>
                    <Navbar.Text className="animated-element"><Button variant="outline-primary" href="#contact">Contact</Button></Navbar.Text>
                    <Navbar.Text className="animated-element"><Button variant="outline-primary" href="#experience">Experience</Button></Navbar.Text>
                    <Navbar.Text className="animated-element"><Button variant="outline-primary" href="#articles">Articles</Button></Navbar.Text>
                    <Navbar.Text className="animated-element">{dark ? <Button variant="light" onClick={() => {
                        setDark(false);
                        localStorage.setItem("dark", false)
                        document.body.style.backgroundColor = "white"
                    }}><img src={light_mode} /></Button> : <Button variant="light" onClick={() => {
                        setDark(true)
                        localStorage.setItem("dark", true)
                        document.body.style.backgroundColor = "black"
                    }}><img src={dark_mode} /></Button>}</Navbar.Text>
                    <ToastContainer />
                </Container>
            </Navbar>
        </header>
    )
}