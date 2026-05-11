import type { aplicacionesViewTwoTipo } from "../../types";

type AplicacionesViewTwoProps = {
  aplicaciones: aplicacionesViewTwoTipo[];
};

export default function AplicacionesViewTwo({ aplicaciones }: AplicacionesViewTwoProps) {
  const count = aplicaciones.length;
  const gridCol = `grid-cols-${count}`;

  return (
    <div>

      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-azulobs-500 mt-40">
        INDUSTRIAS DONDE SE APLICAN
      </h2>

      {/* Subtítulo agregado */}
      <p className="text-center text-[#2E6092] max-w-6xl mx-auto mt-6 mb-20 leading-relaxed md:text-[24px]  ">
        Cada sistema se diseña considerando variables como tipo de producto, flujo de trabajo, 
        condiciones operativas, espacio disponible y nivel de automatización, lo que permite 
        desarrollar soluciones adaptables a prácticamente cualquier sector industrial.
      </p>

      {/* Sección de 4 cartas */}
      <div className={`grid ${gridCol} w-3/4 gap-0 mx-auto`}>
        {aplicaciones.map((item, index) => (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]"
            key={index}
          >
            <div className="w-full relative">
              <img
                src={item.img}
                className="w-full h-full object-cover object-bottom"
              />

              {/* Recuadro azul transparente */}
              <div
                className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                  from-[#3b8cff]/80
                  via-[#3b8cff]/40
                  to-[#3b8cff]/70
                  flex flex-col items-center justify-center px-4 text-center"
              >
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md mb-1">
                  {item.titulo}
                </h3>

                <p className="text-white text-[14px] leading-tight drop-shadow-md">
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
