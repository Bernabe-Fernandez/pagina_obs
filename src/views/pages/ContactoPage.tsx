
import Formulario from "../../components/contacto/Formulario";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function ContactoPage() {
  usePageTitle("Contacto");

  return (
    <div>
      <Formulario/>
    </div>
  );
}



