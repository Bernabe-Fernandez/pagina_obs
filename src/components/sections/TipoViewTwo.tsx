import type { tiposTipo } from "../../types";

type TipoViewTwoProps = {
  tipos: tiposTipo[];
};

export default function TipoViewTwo({ tipos }: TipoViewTwoProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
          TIPOS DE BANDAS TRANSPORTADORAS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tipos.map((tipo) => (
            <div
              key={tipo.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={tipo.img}
                alt={tipo.titulo}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2E6092] mb-3">
                  {tipo.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tipo.subtituloTipo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

