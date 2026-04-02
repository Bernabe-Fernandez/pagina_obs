import { usePageTitle } from "../../hooks/usePageTitle";


import Aplicacion from "../../components/productos/Aplicacion";
import Ventajas from "../../components/productos/Ventajas";
import Tipos from "../../components/productos/Tipos";
import Industria from "../../components/productos/Industria";
import Catal from "../../components/productos/Catal";

export default function BandasPage() {
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




