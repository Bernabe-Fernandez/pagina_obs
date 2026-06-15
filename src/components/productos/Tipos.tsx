import type { tiposTipo , condicionTipo } from "../../types";
import TipoViewTwo from "../../components/sections/TipoViewTwo";

type TiposProps = {
  subtituloTipo?: string;
  tituloTipo: string;
  tipos?: tiposTipo[];
  condiciones?: condicionTipo[];
  tipo: string;
  url: string; 
};

export default function Tipos({ tituloTipo, subtituloTipo, tipos, condiciones, tipo, url }: TiposProps) {

  const usaPlantillaDos =
    tipo === "proyectos" ||
    tipo === "transportadores" ||
    tipo === "herramientas";

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-3/4 mx-auto flex flex-col items-end">

        {/* 🔹 TÍTULO */}
        <h2 className="text-3xl font-bold text-blue-900 mb-36 mt-28 w-full">
          {tituloTipo}
        </h2>

        {subtituloTipo && <p className="w-full">{subtituloTipo}</p>}

        {/* 🔹 PLANTILLA ESPECIAL (SIN BOTÓN) */}
        {usaPlantillaDos ? (
          <TipoViewTwo condiciones={condiciones ?? []} tipo={tipo} />
        ) : (
          <>
            {/* 🔹 GRID DE CARTAS */}
            <div className="space-y-16 w-full">
              {Array.isArray(tipos) &&
                tipos.map((tipo) => (
                  <div
                    key={tipo.id}
                    className="
                      grid grid-cols-1 lg:grid-cols-2 gap-3 items-center
                      max-lg:flex max-lg:flex-col max-lg:items-center
                    "
                  >
                    {/*  Texto arriba en móvil y tablet */}
                    <div className="
                      bg-white shadow-xl px-10 py-3 rounded-lg border border-gray-200
                      w-[400px] mx-auto lg:mx-0 max-lg:w-[320px]
                    ">
                      <p className="
                        text-center text-lg font-semibold text-[#2E6092] leading-tight
                        max-lg:text-[15px]
                      ">
                        {tipo.titulo}
                      </p>
                    </div>

                    {/*  Imagen abajo en móvil y tablet */}
                    <img
                      src={tipo.img}
                      alt={tipo.titulo}
                      className="
                        object-cover rounded-lg
                        w-[700px] h-[120px]
                        lg:w-[700px] lg:h-[120px]
                        max-lg:w-[350px] max-lg:h-[100px]
                        mx-auto lg:mx-0 mt-4
                      "
                    />
                  </div>
                ))}
            </div>

            {/* 🔹 BOTÓN FINAL */}
            <div
              className="
                mt-20
                lg:text-right lg:translate-x-[40px]
                md:flex md:justify-center md:translate-x-0
                sm:flex sm:justify-center sm:translate-x-0
              "
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-azulobs-500 text-white rounded-full font-semibold
                  shadow-[0_4px_15px_rgba(0,0,0,0.25)]
                  transition duration-300 hover:bg-white hover:text-azulobs-500
                  hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                  border border-transparent
                  text-[18px]
                  px-16 py-2
                  md:px-14 md:py-2
                  sm:px-10 sm:py-2
                  md:mt-8 sm:mt-8
                  sm:w-[250px]
                "
              >
                Ver opciones en el catálogo
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

