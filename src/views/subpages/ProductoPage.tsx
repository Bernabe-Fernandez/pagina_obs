import { usePageTitle } from "../../hooks/usePageTitle";


import Aplicacion from "../../components/productos/Aplicacion";
import Ventajas from "../../components/productos/Ventajas";

export default function BandasPage() {
  usePageTitle("Bandas Transportadoras");

  return (
    <div>
      <Ventajas />
      <Aplicacion />
    
    </div>
  );
}




