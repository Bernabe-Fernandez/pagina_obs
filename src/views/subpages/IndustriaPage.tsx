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
     tipo,
     subtitulo,
  } = data;

  return (
    <div>
      <Procesos data={procesos}  />
      <Condicion data={condiciones} subtitulo={subtitulo}  />
      <Solucion data={soluciones} subtitulo={subtitulo} />
      <Libro />
    </div>
  );
}