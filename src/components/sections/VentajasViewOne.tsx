import type { ventajasTipo } from "../../types";

type VentajasViewOneProps = {
    ventajas: ventajasTipo[];
}

export default function VentajasViewOne({ventajas} : VentajasViewOneProps) {
    const count = ventajas.length;
    const gridCol = `grid-cols-${count}`;
  return (
      <div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
          VENTAJAS PRINCIPALES
        </h2>

        {/* Sección de 4 cartas */}
        <div className={`grid ${gridCol} w-3/4 gap-0 mx-auto`}>
          {ventajas.map((ventaja, index) => (
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]"
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
  )
}
