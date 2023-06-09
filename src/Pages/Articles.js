import { useContext, useRef, useState } from "react"
import { darkContext } from "../Contexts/darkContext"
import arrow_down from "../img/icon/arrow_down.svg"
import Button from "react-bootstrap/Button"
export default function Articles() {
    const { dark } = useContext(darkContext)
    const [visible, setVisible] = useState(false)
    return (
        <>
            <main className="main-page" style={dark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }} id="articles">
                <div className='welcome-text'>
                    <h1 className='animated-element' style={dark ? { color: 'white' } : { color: 'black' }}>Articles</h1>
                    <Button
                        variant="primary"
                        onClick={() => setVisible(true)}
                        href="#artics">
                        <img src={arrow_down} />
                        Read</Button>
                </div>
            </main>
            <main>
                {
                    visible ?
                        <article id="artics">
                            ARTICLE
                        </article>
                        :
                        ""
                }
            </main>
        </>

    )
}