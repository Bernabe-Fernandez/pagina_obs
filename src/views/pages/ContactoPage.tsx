
import Contact from "../../components/contacto/Contact";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function ContactoPage() {
  usePageTitle("Contacto");

  return (
    <div>
      <Contact/>
    </div>
  );
}



