import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "../Style/Main.css"
export default function Main() {
    return (
        <>
            <main className="main-page">
                <div className='welcome-text'>
                    <h1 className='animated-element'>Welcome visitor</h1>
                    <Link to={"/aboutme"} className='animated-element jumpText'>About me</Link>
                </div>
            </main>
        </>
    )
}