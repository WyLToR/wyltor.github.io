import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "../Style/Main.css"
import { darkContext } from '../Contexts/darkContext';
import { useContext } from 'react';
export default function Main() {
    const { dark } = useContext(darkContext)
    return (
        <>
            <main className="main-page" style={dark?{backgroundColor:'black'}:{backgroundColor:'white'}}>
                <div className='welcome-text'>
                    <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Welcome visitor</h1>
                    <Link to={"/aboutme"} className='animated-element jumpText'>About me</Link>
                </div>
            </main>
        </>
    )
}