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
  const { industria } = useParams<{ industria: string }>();

  // 🔹 Cambiamos el título de la pestaña según la industria
  usePageTitle(industria ?? "Industria");

  // 🔹 Buscamos la industria correspondiente en la data
 /*const data = industriasPage.find(({ titulo }) => titulo === industria) as industriaTipo;*/
  
const data = industriasPage.find(
  ({ titulo }) => titulo.toLowerCase() === industria?.toLowerCase()
);


  // Si no se encuentra, no renderizamos nada
  if (!data) return null;

  // Desestructuramos los datos para pasarlos a los componentes
  const { 
    procesos, 
    condiciones, 
    soluciones 
  } = data;

  return (
    <div>
      <Procesos data={procesos} />
      <Condicion data={condiciones} />
      <Solucion data={soluciones} />
      <Libro />
    </div>
  );
}