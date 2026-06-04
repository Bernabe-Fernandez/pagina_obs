import type { aplicacionesViewTwoTipo } from "../../types";

type AplicacionesViewTwoProps = {
  aplicaciones: aplicacionesViewTwoTipo[];
  tipo: string;
  url: string; //
};

export default function AplicacionesViewTwo({ aplicaciones, tipo, url }: AplicacionesViewTwoProps) {
  const count = aplicaciones.length;
  const gridCol = `grid-cols-${count}`;
  const esProyecto = tipo === "proyectos";
  const esHerramienta = tipo === "herramientas";
   const esTransportadores = tipo === "transportadores";

  return (
    <div>
      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-azulobs-500 mt-40">
        {esProyecto
          ? "TIPOS DE PROYECTOS DESARROLLADOS"
          : esHerramienta
          ? "TIPOS DE HERRAMIENTAS"
          : "INDUSTRIAS DONDE SE APLICAN"}
      </h2>

      {/* Descripción */}
      <p className="text-center text-[#2E6092] max-w-6xl mx-auto mt-16 mb-20 leading-relaxed md:text-[24px]">
        {esProyecto
          ? "Analizamos cada proceso y sus condiciones reales de operación para desarrollar soluciones que mejoran la eficiencia y continuidad productiva."
          : esHerramienta
          ? "Contar con las herramientas adecuadas es fundamental para asegurar una correcta instalación, ajuste y mantenimiento de los sistemas de transporte. Cada tipo de herramienta cumple una función específica que impacta directamente en el desempeño, la seguridad y la vida útil de la banda."
          : "Cada sistema se diseña considerando variables como tipo de producto, flujo de trabajo, condiciones operativas, espacio disponible y nivel de automatización, lo que permite desarrollar soluciones adaptables a prácticamente cualquier sector industrial."}
      </p>

      {/* Grid de cartas */}
      <div className={`grid ${gridCol} w-3/4 gap-0 mx-auto`}>
        {aplicaciones.map((item, index) => (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]"
            key={index}
          >
            <div className="w-full relative">
              <img
                src={item.img}
                className="w-full h-full object-cover object-bottom"
              />

              <div
                className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                  from-[#3b8cff]/80
                  via-[#3b8cff]/40
                  to-[#3b8cff]/70
                  flex flex-col items-center justify-center px-4 text-center"
              >
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md mb-1">
                  {item.titulo}
                </h3>

                <p className="text-white text-[14px] leading-tight drop-shadow-md">
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÓN FINAL (solo para proyectos y herramientas) */}
      {(esProyecto || esHerramienta || esTransportadores) && url && (
        <div className="mt-20 text-right pr-48">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-azulobs-500 text-white px-14 py-2 rounded-full text-[18px] 
            font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.25)] 
            transition duration-300 hover:bg-white
            hover:text-azulobs-500 
            hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
            border border-transparent"
          >
            Ver opciones en el catálogo
          </a>
        </div>
      )}
    </div>
  );
}

