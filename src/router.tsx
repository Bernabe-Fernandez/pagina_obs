import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/page/HomePage";
import Layout from "./layouts/Layout";
import FloatingWhatsaap from "./components/utilities/FloatingWhatsaap";


export default function AppRouter() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                </Route>
            </Routes>
            
            {/* icono de WhatsApp permanente */}
            <FloatingWhatsaap/>
        </BrowserRouter>
    </>
  )
}
