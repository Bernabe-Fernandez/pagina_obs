import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "../components/menu/NavBar";


export default function Layout() {
    return (
        <>
            <NavBar/>
            <Header/>

            <main className="container mx-auto p-3 w-full h-full lg:w-auto xl:max-w-none">
                <Outlet/>
            </main>
        
            <Footer/>
        </>
    )
}
