import type { ventajasTipo } from "../../types";
import VentajasViewOne from "../sections/VentajasViewOne";
import VentajasViewTwo from "../sections/VentajasViewTwo";

type VentajasProps = {
  tipo: string;
  subtitulo: string;
  ventajas: ventajasTipo[];
};

export default function Ventajas({ tipo, subtitulo, ventajas }: VentajasProps) {

  return (

    <section className="w-full py-16 bg-white">
      {/* Descripción */}
        <div className="text-center max-w-6xl mx-auto mb-60 text-[24px]">
          <p className="text-[#2E6092] leading-relaxed">{subtitulo}</p>
        </div>

      {
        tipo === "proyectos" || tipo === "transportadores" ? (
          <VentajasViewTwo ventajas={ventajas}/>
        ) : (
          <VentajasViewOne ventajas={ventajas}/>
        )
      }
    

    </section>
  )
}
