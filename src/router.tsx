import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import Layout from "./layouts/Layout";
import FloatingWhatsaap from "./components/utilities/FloatingWhatsaap";
import NosotrosPage from "./views/pages/NosotrosPage";
import ProductoPage from "./views/subpages/ProductoPage";
import IndustriaPage from "./views/subpages/IndustriaPage";
import CatalagoPage from "./views/pages/CatalagoPage";
import BolsaTrabajoPage from "./views/pages/BolsaTrabajoPage";
import ContactoPage from "./views/pages/ContactoPage";
import BlogPage from "./views/pages/BlogPage";
import ScrollToTopButton from "./components/utilities/ScrollToTopButton";


export default function AppRouter() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* rutas para la pagina web */}
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/nosotros" element={<NosotrosPage/>}/>
                    <Route path="/productos/:categoria" element={<ProductoPage/>}/>
                    <Route path="/industrias/:categoria" element={<IndustriaPage/>}/>
                    <Route path="/catalago" element={<CatalagoPage/>}/>
                    <Route path="/bolsa_trabajo" element={<BolsaTrabajoPage/>}/>
                    <Route path="/contacto" element={<ContactoPage/>}/>
                    <Route path="/blog" element={<BlogPage/>}/>
                </Route>
            </Routes>
            
            {/* icono de WhatsApp permanente */}
            <FloatingWhatsaap/>
            {/* boton para scroll to top */}
            <ScrollToTopButton/>
        </BrowserRouter>
    </>
  )
}
