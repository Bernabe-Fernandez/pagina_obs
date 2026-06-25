import type { solucionTipo } from "../../types";

type SolucionProps = {
  subtitulo: string;
  data: solucionTipo[] | undefined;
  url: string;
};

export default function Solucion({
  subtitulo,
  data,
  url,
}: SolucionProps) {
  if (!data) {
    data = [];
  }

  const gridClasses =
    data.length === 1
      ? "grid-cols-1 justify-center lg:justify-end"
      : data.length === 2
      ? "grid-cols-1 sm:grid-cols-2 lg:justify-end"
      : data.length === 3
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12";

  return (
    <section className="w-full py-20 bg-white mt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* TÍTULO */}
        <h2 className="text-4xl font-bold text-azulobs-500 mb-4 sm:mb-8 md:mb-12">
          SOLUCIONES APLICABLES
        </h2>

        {/* SUBTÍTULO */}
        <p className="text-[20px] text-[#2E6092] leading-relaxed mb-16 sm:mb-20 md:mb-24">
          {subtitulo}
        </p>

        {/* GRID */}
        <div className={`grid gap-8 sm:gap-10 md:gap-12 ${gridClasses}`}>
          {data.map(({ id, img, titulo, url }) => (
            <div
              key={id}
              className="
                bg-white rounded-2xl overflow-hidden shadow-md
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              <div className="relative w-full h-[320px] sm:h-[340px] md:h-[360px] lg:h-[360px]">
                <img
                  src={img}
                  alt={titulo}
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* ETIQUETA */}
                <div
                  className={`
                    absolute bottom-6 sm:bottom-8 md:bottom-10 bg-white py-2 px-6 rounded-full shadow-md text-center
                    ${
                      data.length === 3
                        ? "lg:right-6 lg:left-auto lg:translate-x-0 w-auto px-4"
                        : data.length === 1 || data.length === 2
                        ? "lg:right-6 lg:left-auto lg:translate-x-0 w-[95%] max-w-[340px]"
                        : "left-1/2 -translate-x-1/2 w-[95%] max-w-[340px]"
                    }
                  `}
                  style={
                    data.length === 3
                      ? { width: "fit-content", maxWidth: "90%" }
                      : {}
                  }
                >
                  <a
                    href={url}
                    className={`text-[16px] sm:text-[18px] font-semibold text-azulobs-500 leading-tight block ${
                      data.length === 3 ? "whitespace-nowrap" : ""
                    }`}
                  >
                    {titulo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN */}
        <div className="mt-16 sm:mt-20 md:mt-24 flex justify-center lg:justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-azulobs-500 text-white px-8 sm:px-12 lg:px-16 py-3 rounded-full
              text-sm sm:text-base lg:text-[18px] font-semibold text-center
              shadow-[0_4px_15px_rgba(0,0,0,0.25)]
              transition duration-300 hover:bg-white hover:text-azulobs-500
              hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] border border-transparent
            "
          >
            Ver opciones en el catálogo
          </a>
        </div>

      </div>
    </section>
  );
}


