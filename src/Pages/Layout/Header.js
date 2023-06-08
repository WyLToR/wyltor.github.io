import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../../Style/Header.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
    setTimeout(() => {
        toast("The webpage is under development")
        console.log("The webpage is under development, if you saw bug, please notice me on my email")
    }, 3000)
    return (
        <header>
            <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className="animated-element"><Link className="link-navbar-menu" to={"/"}>WyLToR</Link></Navbar.Brand>
                    <Navbar.Text className="animated-element"><Link className="link-navbar-menu" to={"/aboutme"}>About Me</Link></Navbar.Text>
                    <Navbar.Text className="animated-element"><Link className="link-navbar-menu" to={"/contact"}>Contact</Link></Navbar.Text>
                    <Navbar.Text className="animated-element"><Link className="link-navbar-menu" to={"/cv"}>CV</Link></Navbar.Text>
                    <ToastContainer />
                </Container>
            </Navbar>
        </header>
    )
}