import type { procesoTipo } from "../../types";

type ProcesosProps = {
  data: procesoTipo[];
  descripcion: string; // dinamico 
};

export default function Procesos({ data, descripcion }: ProcesosProps) {
  return (
    <section className="w-full py-16 bg-white">
      <div>

        {/* Descripción dinámica */}
        <div className="text-center max-w-7xl mx-auto mb-60 text-[20px]">
          <p className="text-[#2E6092] leading-relaxed">
            {descripcion}
          </p>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
          PROCESOS COMUNES
        </h2>

        {/* Sección de cartas dinámicas */}
        <div className="grid grid-cols-4 w-3/4 gap-0 mx-auto">
          {data.map(({ id, img, titulo }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]"
            >
              <div className="w-full relative">
                <img
                  src={img}
                  alt={titulo}
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
                    {titulo}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
