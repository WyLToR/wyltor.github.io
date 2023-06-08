import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>Pages:</Col>
                    <Col>Contact Profiles:</Col>
                </Row>
                <Row>
                    <Col><Link to={"/"}>Main</Link></Col>
                    <Col><Link to={"www.codepen.io/WyLToR"}>CodePen</Link></Col>
                </Row>
                <Row>
                    <Col><Link to={"/aboutme"}>About Me</Link></Col>
                    <Col><Link to="www.linkedin.com/in/bekesi-patrik">Linked In</Link></Col>
                </Row>
                <Row>
                    <Col><Link to={"/contact"}>Contact</Link></Col>
                    <Col><Link to={"www.github.com/wyltor"}>GitHub</Link></Col>
                </Row>
                <Row>
                    <Col><Link to={"/cv"}>CV</Link></Col>
                    <Col><Link to={"mailto:bekesi.patrik@gmail.com"}>Email</Link></Col>
                </Row>
            </Container>
        </footer>
    )
}