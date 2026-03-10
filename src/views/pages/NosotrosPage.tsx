import Experiencia from "../../components/Nosotros/Experiencia";
import Servicios from "../../components/Nosotros/Servicios";
import Compromiso from "../../components/Nosotros/Compromiso";
import Valores from "../../components/Nosotros/Valores";
import Calidad from "../../components/Nosotros/Calidad";





import { usePageTitle } from "../../hooks/usePageTitle"


export default function NosotrosPage() {

    usePageTitle('Nosotros');

  return (
    <div>
      <Experiencia/>
      <Servicios/>
      <Compromiso/>
      <Valores/>
       <Calidad />
    </div>
  )
}
