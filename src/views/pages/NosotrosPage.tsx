import Experiencia from "../../components/Nosotros/Experiencia";
import Servicios from "../../components/Nosotros/Servicios";
import { usePageTitle } from "../../hooks/usePageTitle"


export default function NosotrosPage() {

    usePageTitle('Nosotros');

  return (
    <div>
      <Experiencia/>
      <Servicios/> 
    </div>
  )
}
