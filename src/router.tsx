import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import Layout from "./layouts/Layout";
import FloatingWhatsaap from "./components/utilities/FloatingWhatsaap";
import NosotrosPage from "./views/pages/NosotrosPage";
import ProductoPage from "./views/subpages/ProductoPage";
import IndustriaPage from "./views/subpages/IndustriaPage";


export default function AppRouter() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/nosotros" element={<NosotrosPage/>}/>
                    <Route path="/productos/:categoria" element={<ProductoPage/>}/>
                    <Route path="/industrias/:categoria" element={<IndustriaPage/>}/>
                </Route>
            </Routes>
            
            {/* icono de WhatsApp permanente */}
            <FloatingWhatsaap/>
        </BrowserRouter>
    </>
  )
}
