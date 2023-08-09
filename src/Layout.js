import { PageContextProvider } from "./Contexts/pageContext"
import Header from "./Pages/Layout/Header"
import Footer from "./Pages/Layout/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkContextProvider } from "./Contexts/darkContext";
import Main from "./Pages/Main";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./Pages/Projects";

export default function Layout() {
    return (
        <PageContextProvider>
            <DarkContextProvider>
                <Header />
                <Main />
                <Projects />
                <AboutMe />
                <Contact />
                <Footer />
            </DarkContextProvider>
        </PageContextProvider>
    )
}