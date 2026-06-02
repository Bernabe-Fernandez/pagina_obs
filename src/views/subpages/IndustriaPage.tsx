import { usePageTitle } from "../../hooks/usePageTitle";
import { useParams } from "react-router-dom";

import { industriasPage } from "../../data/industrias";
import type { industriaTipo } from "../../types";

import Procesos from "../../components/Industrias/Procesos";
import Condicion from "../../components/Industrias/Condicion";
import Solucion from "../../components/Industrias/Solucion";
import Libro from "../../components/Industrias/Libro";


export default function IndustriaPage() {
  // 🔹 Tomamos la industria que venga en la URL
  const { categoria } = useParams<{ categoria: string }>();

  // 🔹 Cambiamos el título de la pestaña según la industria
  usePageTitle(categoria ?? "Industria");

  // 🔹 Buscamos la industria correspondiente en la data
  const data = industriasPage.find(({ tipo }) => tipo === categoria ) as industriaTipo;
  



  // Si no se encuentra, no renderizamos nada
  if (!data) return null;

  // Desestructuramos los datos para pasarlos a los componentes
  const { 
    procesos, 
    condiciones, 
    soluciones,
    url,
    tipo,
    descripcion,
    subtitulo,
    subtituloCondicion,
    subtituloSolucion,
  } = data;

  return (
    <div>
      <Procesos data={procesos} descripcion={descripcion} />
      <Condicion data={condiciones} subtitulo={subtituloCondicion}  />
      <Solucion data={soluciones} subtitulo={subtituloSolucion} url={url} />
      <Libro />
    </div>
  );
}