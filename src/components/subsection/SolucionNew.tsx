
import type { solucionesNewTipo } from "../../types";

type SolucionNewProps = {
  data: solucionesNewTipo[];
  titulo: string;
};

export default function SolucionNew({ data, titulo }: SolucionNewProps) {
  const count = data.length;
  const gridCols = `grid-cols-${count}`;
  const justify = count < 4 ? "justify-center" : "";

  // Ajustes visuales según cantidad de cartas
  const imageHeight =
    count === 2 ? "h-[280px]" : count === 3 ? "h-[250px]" : "h-[220px]";
  const titleSize =
    count === 2 ? "text-[20px]" : count === 3 ? "text-[18px]" : "text-[16px]";

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Título principal */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
          {titulo}
        </h2>

        {/* Grid dinámico */}
        <div className={`grid ${gridCols} gap-6 ${justify}`}>
          {data.map(({ id, img, titulo }) => (
            <div
              key={id}
              className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col items-center"
            >
              <div className={`w-full ${imageHeight} rounded-xl overflow-hidden`}>
                <img
                  src={img}
                  alt={titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Título debajo de la imagen */}
              <div className="mt-3">
                <p
                  className={`bg-white text-[#2E6092] font-semibold ${titleSize} text-center px-4 py-2 rounded-full shadow-sm`}
                >
                  {titulo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
