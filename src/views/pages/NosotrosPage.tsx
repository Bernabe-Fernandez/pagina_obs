import Experiencia from "../../components/Nosotros/Experiencia";
import { usePageTitle } from "../../hooks/usePageTitle"


export default function NosotrosPage() {

    usePageTitle('Nosotros');

  return (
    <div>
      <Experiencia/>
    </div>
  )
}
