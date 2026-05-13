import type { aplicacionesTipo, aplicacionesViewTwoTipo } from "../../types";
import AplicacionesViewTwo from "../../components/sections/AplicacionesViewTwo";

type AplicacionProps = {
  aplicaciones?: aplicacionesTipo;
  aplicacionesTwo?: aplicacionesViewTwoTipo[];
  tipo?: string;
};

export default function Aplicacion({ aplicaciones, aplicacionesTwo, tipo }: AplicacionProps) {

  if (!aplicacionesTwo) {
    aplicacionesTwo = [];
  }

  return (
    <>
      {
        tipo === "transportadores" || tipo === "proyectos" ? (
          <AplicacionesViewTwo 
            aplicaciones={aplicacionesTwo} 
            tipo={tipo}   // ⭐ SE AGREGA ESTE PROP
          />
        ) : (
          <section className="w-full py-20 bg-white mt-20">
            <div className="w-3/4 mx-auto grid grid-cols-2 gap-10 items-center">

              {/* Imagen */}
              <div className="w-full">
                <img
                  src={aplicaciones?.img}
                  className="w-[450px] h-auto object-cover rounded-lg translate-x-16"
                />
              </div>

              {/* Texto */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-20">
                  APLICACIONES COMUNES
                </h2>

                <ul className="text-[20px] text-[#2E6092] leading-relaxed space-y-4">
                  {aplicaciones?.aplicaciones.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </section>
        )
      }
    </>
  );
}
