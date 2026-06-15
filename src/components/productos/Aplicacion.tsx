import type { aplicacionesTipo, aplicacionesViewTwoTipo } from "../../types";
import AplicacionesViewTwo from "../../components/sections/AplicacionesViewTwo";

type AplicacionProps = {
  aplicaciones?: aplicacionesTipo;
  aplicacionesTwo?: aplicacionesViewTwoTipo[];
  tipo?: string;
  url: string; 
};

export default function Aplicacion({ aplicaciones, aplicacionesTwo, tipo, url }: AplicacionProps) {

  if (!aplicacionesTwo) {
    aplicacionesTwo = [];
  }

  return (
    <>
      {
        tipo === "transportadores" || tipo === "proyectos" || tipo === "herramientas" ? (
          <AplicacionesViewTwo 
            aplicaciones={aplicacionesTwo} 
            tipo={tipo}
            url={url}   
          />
        ) : (
          <section className="w-full py-20 bg-white mt-20">
            {/* 🔹 Responsive: laptop y tablet igual, celular apilado */}
            <div className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">

              {/* Imagen con efecto profesional */}
              <div className="order-2 sm:order-1 flex justify-center sm:justify-start sm:translate-x-12">
                <img
                  src={aplicaciones?.img}
                  className="
                    w-[280px] sm:w-[380px] lg:w-[450px]
                    h-auto object-cover rounded-lg
                    transition-transform duration-500 ease-out
                    hover:-translate-y-2 hover:scale-[1.04]
                  "
                />
              </div>

              {/* Texto */}
              <div className="order-1 sm:order-2">
                <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center sm:text-left sm:text-2xl lg:text-3xl">
                  APLICACIONES COMUNES
                </h2>

                <ul className="
                  text-[18px] sm:text-[14px] lg:text-[20px]
                  text-[#2E6092] leading-relaxed space-y-5
                  text-center sm:text-left
                ">
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





