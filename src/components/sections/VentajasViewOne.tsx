import type { ventajasTipo } from "../../types";

type VentajasViewOneProps = {
  ventajas: ventajasTipo[];
};

export default function VentajasViewOne({ ventajas }: VentajasViewOneProps) {
  const count = ventajas.length;

  // Mantiene tu lógica original intacta
  const widthClass =
    count === 3
      ? "w-[55%]"
      : count === 4
      ? "w-3/4"
      : count === 5
      ? "w-[90%] lg:w-[85%]"
      : "w-3/4";

  const scaleClass =
    count === 3
      ? "scale-[0.95]"
      : count === 4
      ? "scale-[0.90]"
      : count === 5
      ? "scale-[0.93]"
      : "scale-[0.90]";

  // Responsive dinámico según cantidad de cartas
  const responsiveGrid =
    count === 5
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:[&>*:nth-child(n+4)]:col-span-1 md:justify-center lg:grid-cols-5"
      : count === 4
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      : count === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div>
      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
        VENTAJAS PRINCIPALES
      </h2>

      {/* Sección de cartas */}
      <div
        className={`grid ${widthClass} mx-auto gap-4 sm:gap-6 lg:gap-0 ${responsiveGrid}`}
      >
        {ventajas.map((ventaja, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg overflow-hidden ${scaleClass}
              transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg /* 🔹 Efecto dinámico */
            `}
          >
            <div className="w-full relative">
              <img
                src={ventaja.img}
                className="
                  w-full 
                  h-[180px] sm:h-[200px] md:h-[300px] lg:h-full /* 🔹 iPad: alarga las cartas */
                  object-cover object-bottom
                "
              />

              {/* Recuadro azul transparente */}
              <div
                className="
                  absolute bottom-0 w-full 
                  h-[70px] sm:h-[80px] md:h-[100px] lg:h-[80px] /* 🔹 iPad: recuadro azul más alto */
                  bg-gradient-to-b
                  from-[#3b8cff]/80 via-[#3b8cff]/40 to-[#3b8cff]/70
                  flex items-center justify-center
                "
              >
                <h3
                  className="
                    font-semibold text-white 
                    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                    leading-tight drop-shadow-md px-4 sm:px-6 text-center
                  "
                >
                  {ventaja.titulo}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



