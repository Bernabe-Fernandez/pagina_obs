import type { ventajasTipo } from "../../types";

type VentajasViewOneProps = {
  ventajas: ventajasTipo[];
};

export default function VentajasViewOne({ ventajas }: VentajasViewOneProps) {
  const count = ventajas.length;
  const gridCol = `grid-cols-${count}`;

  // Ajuste dinámico según cantidad de cartas
  const widthClass =
    count === 4 ? "w-3/4" : count === 3 ? "w-[55%]" : count === 5 ? "w-[90%]" : "w-3/4";

  const scaleClass =
    count === 4 ? "scale-[0.90]" : count === 3 ? "scale-[0.95]" : count === 5 ? "scale-[0.95]" : "scale-[0.90]";

  return (
    <div>
      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
        VENTAJAS PRINCIPALES
      </h2>

      {/* Sección de cartas */}
      <div className={`grid ${gridCol} ${widthClass} gap-0 mx-auto`}>
        {ventajas.map((ventaja, index) => (
          <div
            className={`bg-white shadow-md rounded-lg overflow-hidden ${scaleClass}`}
            key={index}
          >
            <div className="w-full relative">
              <img
                src={ventaja.img}
                className="w-full h-full object-cover object-bottom"
              />

              {/* Recuadro azul transparente */}
              <div
                className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                  from-[#3b8cff]/80
                  via-[#3b8cff]/40
                  to-[#3b8cff]/70
                  flex items-center justify-center"
              >
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md px-6 text-center">
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
