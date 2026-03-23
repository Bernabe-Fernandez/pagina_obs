import Contact from "../../components/contacto/Contact";
import Ubicacion from "../../components/contacto/Ubicacion";
import Zona from "../../components/contacto/Zona";
  


import { usePageTitle } from "../../hooks/usePageTitle";

export default function ContactoPage() {
  usePageTitle("Contacto");

  return (
    <div>
      <Contact/>
      <Ubicacion/>
      <Zona/>
    </div>
  );
}



