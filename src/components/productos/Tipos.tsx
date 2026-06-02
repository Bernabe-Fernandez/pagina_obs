import type { tiposTipo , condicionTipo } from "../../types";
import TipoViewTwo from "../../components/sections/TipoViewTwo";
import BotonCatalogo from "../Botones/BotonCatalogo"; //  Importación del botón

type TiposProps = {
  subtituloTipo?: string;
  tituloTipo: string;
  tipos?: tiposTipo[];
  condiciones?: condicionTipo[];
  tipo: string;
};

export default function Tipos({ tituloTipo, subtituloTipo, tipos, condiciones, tipo }: TiposProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-3/4 mx-auto">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-blue-900 mb-36 mt-28">
          {tituloTipo}
        </h2>

        {subtituloTipo && <p>{subtituloTipo}</p>}

        {tipo === "proyectos" || tipo === "transportadores" || tipo === "herramientas"? (
          <TipoViewTwo condiciones={condiciones ?? []} tipo={tipo} />
        ) : (
          <>
            <div className="space-y-16">
              {Array.isArray(tipos) &&
                tipos.map((tipo) => (
                  <div
                    key={tipo.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center"
                  >
                    <div className="bg-white shadow-xl px-10 py-3 rounded-lg border border-gray-200 w-[400px]">
                      <p className="text-center text-lg font-semibold text-[#2E6092] leading-tight">
                        {tipo.titulo}
                      </p>
                    </div>

                    <img
                      src={tipo.img}
                      className="max-w-none w-[700px] h-[120px] object-cover rounded-lg -ml-24"
                      alt={tipo.titulo}
                    />
                  </div>
                ))}
            </div>
          </>
        )}

      </div>

      {/* Mostrar botón SOLO cuando NO sea TipoViewTwo */}
      {!(tipo === "proyectos" || tipo === "transportadores") && (
        <BotonCatalogo />
      )}

    </section>
  );
}
