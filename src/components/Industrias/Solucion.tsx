
import type { solucionTipo } from "../../types";

type SolucionProps = {
  subtitulo: string;
  data: solucionTipo[];
  tipo: string;
  url: string; // ✅ nuevo prop agregado
};

export default function Solucion({ subtitulo, data, url }: SolucionProps) {
  

  // Determinar clases dinámicas según cantidad de imágenes
  const gridClasses =
    data.length === 1
      ? "grid-cols-1 justify-center" //  una imagen centrada
      : data.length === 2
      ? "grid-cols-2 justify-end" //  dos imágenes alineadas a la derecha
      : data.length === 3
      ? "grid-cols-3 justify-end" // tres imágenes alineadas a la derecha
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center"; //  cuatro o más centradas

  return (
    <section className="w-full py-20 bg-white mt-60 ">
      <div className="max-w-6xl mx-auto ">
        {/* TÍTULO Y SUBTÍTULO */}
        <h2 className="text-4xl font-bold text-azulobs-500 mb-4">
          SOLUCIONES APLICABLES
        </h2>
        <p className="text-[20px] text-[#2E6092] leading-relaxed mb-16">
          {subtitulo}
        </p>

        {/* GRID DE CARTAS */}
        <div className={`grid gap-8 ${gridClasses}`}>
          {data.map(({ id, img, titulo }) => (
            <div
              key={id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-[320px]">
                <img
                  src={img}
                  alt={titulo}
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Etiqueta con ancho y posición dinámicos */}
                <div
                  className={`absolute bottom-4 bg-white px-6 py-2 rounded-full shadow-md text-center ${
                    data.length === 1
                      ? "right-6 w-[320px]" //  una imagen: alineado a la derecha
                      : data.length === 2
                      ? "right-6 w-[260px]" // dos imágenes: alineadas a la derecha y más largas
                      : data.length === 3
                      ? "right-6 w-[260px]" // tres imágenes: alineadas a la derecha y más largas
                      : data.length === 4
                      ? "left-1/2 transform -translate-x-1/2 w-[260px]" //  cuatro imágenes: centradas
                      : "left-1/2 transform -translate-x-1/2 w-[240px]" //  resto de casos
                  }`}
                >
                  <p className="text-[18px] font-semibold text-azulobs-500 text-center leading-tight">
                    {titulo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN FINAL */}
        <div className="mt-16 text-right pr-1">
          <a
            href={url} //  ahora usa el prop url
            target="_blank"
            rel="noopener noreferrer"
            className="bg-azulobs-500 text-white px-16 py-2 rounded-full text-[18px] 
            font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.25)] 
            transition duration-300 hover:bg-white
            hover:text-azulobs-500 
            hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
            border border-transparent"
          >
            Ver opciones en el catálogo
          </a>
        </div>
      </div>
    </section>
  );
}

