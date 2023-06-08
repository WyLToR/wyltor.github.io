import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function Header() {
    return (
        <header>
            <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Link to={"/"}>WyLToR</Link></Navbar.Brand>
                    <Navbar.Text><Link to={"/aboutme"}>About Me</Link></Navbar.Text>
                    <Navbar.Text><Link to={"/contact"}>Contact</Link></Navbar.Text>
                    <Navbar.Text><Link to={"/cv"}>CV</Link></Navbar.Text>
                </Container>
            </Navbar>
        </header>
    )
}