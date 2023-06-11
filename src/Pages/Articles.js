import { useContext, useEffect, useRef, useState } from "react"
import { darkContext } from "../Contexts/darkContext"
import arrow_down from "../img/icon/arrow_down.svg"
import Button from "react-bootstrap/Button"
import Artic from "./Artic"
import "../Style/Articles.css"
export default function Articles() {
    const { dark } = useContext(darkContext)
    const [showedArticles, setShowedArticles] = useState(3);
    const [articles, setArticles] = useState([]);
    const [visible, setVisible] = useState(false)
    const sortedArticles = articles.sort((a, b) => {
        const titleA = a.Title.toUpperCase();
        const titleB = b.Title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    useEffect(() => {
        fetch(`https://portfolio-63560-default-rtdb.europe-west1.firebasedatabase.app/Articles.json`)
            .then(res => res.json())
            .then(data => setArticles(data))

    }, [articles]);
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
                <div className="artics-container">
                    {
                        visible ?
                            <>
                                {/* {sortedArticles.map(artic => <Artic artic={artic} />)} */}
                                {/* <button onClick={() => setShowedArticles(showedArticles + 3>maxArticles?maxArticles:showedArticles + 3)}>Read More</button> */}
                            </>
                            :
                            ""
                    }
                </div>
            </main>
        </>

    )
}