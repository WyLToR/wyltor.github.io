import { Outlet } from "react-router-dom"
import { PageContextProvider } from "./Contexts/pageContext"
import Header from "./Pages/Layout/Header"
import Footer from "./Pages/Layout/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkContextProvider } from "./Contexts/darkContext";

export default function Layout() {
    return (
        <PageContextProvider>
            <DarkContextProvider>
                <Header />
                <Outlet />
                <Footer />
            </DarkContextProvider>
        </PageContextProvider>
    )
}