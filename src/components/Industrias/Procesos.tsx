 import type { procesoTipo } from "../../types";

type ProcesosProps = {
  data: procesoTipo[];
  descripcion: string;
};

export default function Procesos({ data, descripcion }: ProcesosProps) {
  const count = data.length;

  // Ancho dinámico
  const widthClass =
    count === 3
      ? "w-[90%] sm:w-[85%] md:w-[80%] lg:w-[60%]"
      : "w-[80%]";

  // Escalado dinámico
  const scaleClass =
    count === 3
      ? "scale-[0.95]"
      : count === 4
      ? "scale-[0.90]"
      : "scale-[0.90]";

  // Grid dinámico
  const responsiveGrid =
    count === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="w-full py-16 bg-white">
      <div>
        {/* Descripción */}
        <div className="text-center max-w-6xl mx-auto mb-60 px-4 sm:px-6 text-[18px] sm:text-[22px] md:text-[24px]">
             <p className="text-[#2E6092] leading-relaxed">{descripcion}</p>
       </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
          PROCESOS COMUNES
        </h2>

        {/* Cards */}
        <div
          className={`grid ${responsiveGrid} ${widthClass} mx-auto gap-4 sm:gap-6 lg:gap-0`}
        >
          {data.map(({ id, img, titulo }, ) => (
            <div
              key={id}
              className={`
                bg-white shadow-md rounded-lg overflow-hidden
                ${scaleClass}
                transition-transform duration-300
                hover:scale-[1.03]
                hover:shadow-lg
              `}
            >

              {/* Tamaños de las cartas responsive en diferentes dispositivos */}
              <div className="w-full relative">
                <img
                  src={img}
                  alt={titulo}
                  className="
                    w-full
                    h-[450px]        /* Celular: más alta */
                    sm:h-[260px]     /* Tablet: más alta */
                    md:h-[400px]     /* iPad: mantiene proporción */
                    lg:h-full
                    object-cover
                    object-bottom
                  "
                />

                {/* Overlay azul */}
                <div
                  className="
                    absolute bottom-0 w-full
                    h-[70px]
                    sm:h-[80px]
                    md:h-[100px]
                    lg:h-[80px]
                    bg-gradient-to-b
                    from-[#3b8cff]/80
                    via-[#3b8cff]/40
                    to-[#3b8cff]/70
                    flex items-center justify-center
                  "
                >
                  <h3
                    className="
                      font-semibold text-white
                      text-[16px]
                      sm:text-[18px]
                      md:text-[20px]
                      lg:text-[22px]
                      leading-tight
                      drop-shadow-md
                      px-4 sm:px-6
                      text-center
                    "
                  >
                    {titulo}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
}