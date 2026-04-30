import { usePageTitle } from "../../hooks/usePageTitle";


import Aplicacion from "../../components/productos/Aplicacion";
import Ventajas from "../../components/productos/Ventajas";
import Tipos from "../../components/productos/Tipos";
import Industria from "../../components/productos/Industria";
import Catal from "../../components/productos/Catal";
import { useParams } from "react-router-dom";
import { productosList } from "../../data/productos";
import { TbViewportShort } from "react-icons/tb";

export default function BandasPage() {

  // aca debemos tomar la categoria que venga en el url de la pagina
  const { categoria } = useParams<{ categoria: string }>();


    usePageTitle(categoria ?? 'bandas');

    
    const producto = productosList.find(({ tipo }) => tipo === categoria);

    if (!producto) return null;

    const {
      id,
      tipo, 
      subtitulo,
      ventajas,
      aplicaciones,
      tipos,
      industrias,
    } = producto;


     return (
    <div>
      <Ventajas tipo={tipo} subtitulo={subtitulo} ventajas={ventajas} />
      <Aplicacion aplicaciones={aplicaciones} />
      <Tipos tipos={tipos} />
      <Industria tipo={tipo} industrias={industrias} />
      <Catal />
    </div>
  );
}




