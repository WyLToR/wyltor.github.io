import { Outlet } from "react-router-dom"
import { PageContextProvider } from "./Contexts/pageContext"
import Header from "./Pages/Layout/Header"
import Footer from "./Pages/Layout/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkContextProvider } from "./Contexts/darkContext";
import Main from "./Pages/Main";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import Articles from "./Pages/Articles";

export default function Layout() {
    return (
        <PageContextProvider>
            <DarkContextProvider>
                <Header />
                <Main />
                <AboutMe />
                <Contact />
                <Experience />
                <Articles />
                <Footer />
            </DarkContextProvider>
        </PageContextProvider>
    )
}