import { usePageTitle } from "../../hooks/usePageTitle";


import Aplicacion from "../../components/productos/Aplicacion";
import Ventajas from "../../components/productos/Ventajas";
import Tipos from "../../components/productos/Tipos";
import Industria from "../../components/productos/Industria";
import Catal from "../../components/productos/Catal";

export default function BandasPage() {

  // aca debemos tomar la categoria que venga en el url de la pagina

  usePageTitle("Bandas Transportadoras");



  return (
    <div>
      <Ventajas />
      <Aplicacion />
      <Tipos />
      <Industria />
      <Catal />

    
    </div>
  );
}




