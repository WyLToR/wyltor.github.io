import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "../../Style/Footer.css"
import { useState, useEffect, useContext } from "react"
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import arrow_up from "../../img/icon/arrow_up.svg"
import { darkContext } from '../../Contexts/darkContext';
export default function Footer() {
    const { dark } = useContext(darkContext)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch("https://api.ipify.org?format=json")
            .then(res => {
                if(res.ok){
                    return res.json()
                }else{
                    setUser("no allocate")
                }
            })
            .then(data => setUser(data)
            ).finally(setLoading(true))
    }, [loading])
    return (
        <footer style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
            <Container>

                <h3 style={dark ? { color: 'white' } : { color: 'black' }}>Do you like my page? Buy me a <Button href="https://www.buymeacoffee.com/WyLToR" variant="outline-primary">Coffee</Button></h3><Button href="#top" size="sm" variant="outline-primary">Back to the TOP<img width="20px" src={arrow_up} /></Button>
            </Container>
            <Container style={dark ? { color: 'white' } : { color: 'black' }}>
                <Row>
                    <Col><b>Pages:</b></Col>
                    <Col><b>Profiles:</b></Col>
                    <Col><b>Visitor: {loading ? user?.ip : <Placeholder animation="glow"><Placeholder xs={3} /></Placeholder>}</b></Col>
                </Row>
                <Row>
                    <Col><a className="link-footer" href="#top">Main</a></Col>
                    <Col xs={8}><a className="link-footer" href="https://www.codepen.io/WyLToR">CodePen</a></Col>
                </Row>
                <Row>
                    <Col><a className="link-footer" href="#aboutme">About Me</a></Col>
                    <Col xs={8}><a className="link-footer" href="https://www.linkedin.com/in/bekesi-patrik">Linked In</a></Col>
                </Row>
                <Row>
                    <Col><a className="link-footer" href="#contact">Contact</a></Col>
                    <Col xs={8}><a className="link-footer" href="https://www.github.com/wyltor">GitHub</a></Col>
                </Row>
                <Row>
                    <Col><a className="link-footer" href="#experience">Experience</a></Col>
                    <Col xs={8}><a className="link-footer" href="mailto:bekesi.patrik@gmail.com">Email</a></Col>
                </Row>
            </Container>
        </footer>
    )
}