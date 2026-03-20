
import Contact from "../../components/contacto/Contact";
import Ubicacion from "../../components/contacto/Ubicacion";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function ContactoPage() {
  usePageTitle("Contacto");

  return (
    <div>
      <Contact/>
      <Ubicacion/>
    </div>
  );
}



