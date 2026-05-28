import { useNavigate } from "react-router-dom";
import type { solucionTipo, solucionesNewTipo } from "../../types";
import SolucionNew from "../../components/subsection/SolucionNew";

type SolucionProps = {
  subtitulo: string;
  data: solucionTipo[];
  dataNew?: solucionesNewTipo[];
  tipo: string;
};

export default function Solucion({ subtitulo, data, dataNew, tipo }: SolucionProps) {
  const navigate = useNavigate();

  // Lista de industrias que usan la nueva plantilla
  const industriasNew = [
    "embotelladora",
    "embutidos",
    "panificadora",
    "cartonera",
    "envasado",
  ];

  const usaNuevaPlantilla = industriasNew.includes(tipo.toLowerCase());

  return (
    <section className="w-full py-20 bg-white mt-60">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO Y SUBTÍTULO */}
        <div className="transform translate-x-[120px]">
          <h2 className="text-4xl font-bold text-azulobs-500 mb-6">
            SOLUCIONES APLICABLES
          </h2>

          <p className="text-[20px] text-[#2E6092] leading-relaxed mb-16">
            {subtitulo}
          </p>
        </div>

        {/* CONDICIÓN PARA ELEGIR PLANTILLA */}
        {usaNuevaPlantilla && dataNew ? (
          <SolucionNew data={dataNew} titulo="SOLUCIONES" />
        ) : (
          <div className="flex flex-col items-center gap-10 mt-28">
            {data.map(({ id, img, titulo }) => (
              <div
                key={id}
                className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                <img
                  src={img}
                  alt={titulo}
                  className="w-full h-[300px] object-cover"
                />

                {/* Etiqueta sobre la imagen */}
                <div className="absolute bottom-4 right-6 bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="text-[18px] font-semibold text-azulobs-500">
                    {titulo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOTÓN FINAL */}
        <div className="mt-16 text-right pr-28">
          <button
            onClick={() => navigate("/catalogo")}
            className="
              bg-azulobs-500 
              text-white 
              px-5
              py-2
              rounded-full 
              text-[18px] 
              font-semibold 
              shadow-[0_4px_15px_rgba(0,0,0,0.25)]
              transition 
              duration-300
              hover:bg-white 
              hover:text-azulobs-500 
              hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
              border 
              border-transparent 
            "
          >
            Ver opciones en el catálogo
          </button>
        </div>

      </div>
    </section>
  );
}
