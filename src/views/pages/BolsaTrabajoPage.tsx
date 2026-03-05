import AreasTrabajo from "../../components/Trabajo/AreasTrabajo";
import Caracteristicas from "../../components/Trabajo/Caracteristicas";
import ContactoTrabajo from "../../components/Trabajo/ContactoTrabajo";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function BolsaTrabajoPage() {

  //usamos el hook para mostrar el nombre de la pagina
    usePageTitle("Bolsa de Trabajo");


  return (
    <div>
      <Caracteristicas/>
      <AreasTrabajo/>
      <ContactoTrabajo/>
    </div>
  )
}
