import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../../Style/Header.css"
export default function Header() {
    return (
        <header>
            <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Link className="link-navbar-menu" to={"/"}>WyLToR</Link></Navbar.Brand>
                    <Navbar.Text><Link className="link-navbar-menu" to={"/aboutme"}>About Me</Link></Navbar.Text>
                    <Navbar.Text><Link className="link-navbar-menu" to={"/contact"}>Contact</Link></Navbar.Text>
                    <Navbar.Text><Link className="link-navbar-menu" to={"/cv"}>CV</Link></Navbar.Text>
                </Container>
            </Navbar>
        </header>
    )
}