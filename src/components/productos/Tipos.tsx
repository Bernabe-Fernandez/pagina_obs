import type { tiposTipo } from "../../types";
import BotonCatalogo from "../Botones/BotonCatalogo";
import TipoViewTwo from "../sections/TipoViewTwo";

type TiposProps = {
  subtituloTipo: string|undefined,
  tituloTipo: string,
  tipos: tiposTipo[];
  tipo: string
};

export default function Tipos({ tituloTipo, subtituloTipo, tipos, tipo }: TiposProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-3/4 mx-auto">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-blue-900 mb-36 mt-28">
          {tituloTipo}
        </h2>

        {
          subtituloTipo && (
            <p>{subtituloTipo}</p>
          )
        }


        {/* GRID DE 4 ELEMENTOS */}
        {
          tipo === "proyectos" || tipo === "transportadores" ? (
            <TipoViewTwo    tipos={tipos}/>
          ) : (
              <>
                <div className="space-y-16">

                {tipos.map((tipo) => (
                  <div
                    key={tipo.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center"
                  >

                    {/* TEXTO */}
                    <div className="bg-white shadow-xl px-10 py-3 rounded-lg border border-gray-200 w-[400px] ">
                      <p className="text-center text-lg font-semibold text-[#2E6092] leading-tight">
                        {tipo.titulo}
                      </p>
                    </div>

                    {/* IMAGEN */}
                    <img
                      src={tipo.img}
                      className="max-w-none w-[700px] h-[120px] object-cover rounded-lg -ml-24"
                      alt={tipo.titulo}
                    />
                  </div>
                ))}

              </div>

              <BotonCatalogo/>
              </>
          )
        }
        </div>
      </section>
  );
}
