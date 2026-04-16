import { usePageTitle } from "../../hooks/usePageTitle";


import Procesos from "../../components/Industrias/Procesos";
import Condicion from "../../components/Industrias/Condicion";
import Solucion from "../../components/Industrias/Solucion";
import Libro from "../../components/Industrias/Libro";




export default function IndustriaPage() {
  usePageTitle("Industria Agroalimentaria");

  return (
    <div>
      <Procesos/>
      <Condicion />
       <Solucion />
        <Libro />
    </div>
  );
}
