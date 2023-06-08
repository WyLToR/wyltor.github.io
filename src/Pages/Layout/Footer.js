import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "../../Style/Footer.css"
import { useState, useEffect } from "react"
import Image from 'react-bootstrap/Image';
export default function Footer() {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(data => fetch(`http://ipwho.is/${data.ip}`)
                .then(res => res.json())
                .then(info=>setUser(info))
            )
    }, [user])
    return (
        <footer>
            <Container>
                <Row>
                    <Col><b>Pages:</b></Col>
                    <Col><b>Contact Profiles:</b></Col>
                    <Col><b>Visitor:</b></Col>
                </Row>
                <Row>
                    <Col><Link className="link-footer" to={"/"}>Main</Link></Col>
                    <Col><Link className="link-footer" to={"www.codepen.io/WyLToR"}>CodePen</Link></Col>
                    <Col>IP: {user?.ip}</Col>
                </Row>
                <Row>
                    <Col><Link className="link-footer" to={"/aboutme"}>About Me</Link></Col>
                    <Col><Link className="link-footer" to="www.linkedin.com/in/bekesi-patrik">Linked In</Link></Col>
                    <Col>City: {user?.city}</Col>
                </Row>
                <Row>
                    <Col><Link className="link-footer" to={"/contact"}>Contact</Link></Col>
                    <Col><Link className="link-footer" to={"www.github.com/wyltor"}>GitHub</Link></Col>
                    <Col>Country: <Image src={user?.flag.img} width="30px"/></Col>
                </Row>
                <Row>
                    <Col><Link className="link-footer" to={"/cv"}>CV</Link></Col>
                    <Col><Link className="link-footer" to={"mailto:bekesi.patrik@gmail.com"}>Email</Link></Col>
                    <Col>Continent: {user?.continent}</Col>
                </Row>
            </Container>
        </footer>
    )
}