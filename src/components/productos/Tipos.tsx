import type { tiposTipo } from "../../types";

type TiposProps = {
  tipos: tiposTipo[];
};

export default function Tipos({ tipos }: TiposProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-3/4 mx-auto">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-blue-900 mb-36 mt-28">
          TIPOS DE BANDAS TRANSPORTADORAS
        </h2>

        {/* GRID DE 4 ELEMENTOS */}
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

        {/* BOTÓN */}
        <div className="flex justify-end mt-24 translate-x-12">
          <button
            className="px-16 py-2 bg-white text-blue-800 rounded-full border border-gray-300 shadow-md font-medium text-lg transition-colors duration-200 hover:bg-blue-900 hover:text-white"
          >
            Ver opciones en el catálogo
          </button>
        </div>

      </div>
    </section>
  );
}
