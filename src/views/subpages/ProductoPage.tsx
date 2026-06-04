import { usePageTitle } from "../../hooks/usePageTitle";



import Aplicacion from "../../components/productos/Aplicacion";
import Ventajas from "../../components/productos/Ventajas";
import Tipos from "../../components/productos/Tipos";
import Industria from "../../components/productos/Industria";
import Catal from "../../components/productos/Catal";
import { useParams } from "react-router-dom";
import { productosList } from "../../data/productos";
import { TbViewportShort } from "react-icons/tb";
import TipoViewTwo from "../../components/sections/TipoViewTwo";

export default function BandasPage() {

  // aca debemos tomar la categoria que venga en el url de la pagina
  const { categoria } = useParams<{ categoria: string }>();


    usePageTitle(categoria ?? 'bandas');

    
    const producto = productosList.find(({ tipo }) => tipo === categoria);

    if (!producto) return null;

    const {
      
      tipo,  
      subtitulo,
      ventajas,
      aplicaciones,
      aplicacionesViewTwo,
      url,
      condiciones,
      tituloTipo,
      subtituloTipo,
      tipos,
      industrias,
    } = producto;


     return (
    <div>
      
      <Ventajas tipo={tipo} subtitulo={subtitulo} ventajas={ventajas} />
      <Aplicacion aplicaciones={aplicaciones} tipo={tipo} aplicacionesTwo={aplicacionesViewTwo}  url={url} />
      <Tipos tituloTipo={tituloTipo} subtituloTipo={subtituloTipo} tipos={tipos} condiciones={condiciones} tipo={tipo}  url={url} />
      {
        (tipo != "transportadores" && tipo != "fabricacion" && tipo != "proyectos" && tipo != "herramientas") && (
           <Industria tipo={tipo} industrias={industrias} />
        ) 
      }
      <Catal />
    </div>
  );
}




