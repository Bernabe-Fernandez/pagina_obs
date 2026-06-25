import type { condicionItemTipo } from "../../types";

type CondicionProps = {
  data: condicionItemTipo[];
  subtitulo: string; // 👈 nuevo prop dinámico
};

export default function Condicion({ data, subtitulo }: CondicionProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-12 mt-40">
          CONDICIONES DE OPERACIÓN
        </h2>

        {/* ahora este texto viene del prop */}
        <p className="text-center text-[20px] text-[#2E6092] max-w-6xl mx-auto leading-relaxed mb-36">
          {subtitulo}
        </p>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40 w-4/5 mx-auto">
          {data.map(({ id, icono, titulo, descripcion }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-azulobs-500 flex items-center justify-center mb-6">
                <img src={icono} alt={titulo} className="w-26 h-26" />
              </div>
              <h3 className="text-azulobs-600 font-semibold text-[20px] mb-3">
                {titulo}
              </h3>
              <p className="text-[18px] text-[#2E6092] leading-relaxed">
                {descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


