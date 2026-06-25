import type { aplicacionesViewTwoTipo } from "../../types";

type AplicacionesViewTwoProps = {
  aplicaciones: aplicacionesViewTwoTipo[];
  tipo: string;
  url: string;
};

export default function AplicacionesViewTwo({ aplicaciones, tipo, url }: AplicacionesViewTwoProps) {
  const count = aplicaciones.length;
  const esProyecto = tipo === "proyectos";
  const esHerramienta = tipo === "herramientas";
  const esTransportadores = tipo === "transportadores";

  // 🔹 Ajuste responsive para Tailwind
  const gridCols =
    count === 5
      ? "lg:grid-cols-5"
      : count === 4
      ? "lg:grid-cols-4"
      : count === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-2";

  return (
    <div>
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold text-center text-azulobs-500 mt-40">
        {esProyecto
          ? "TIPOS DE PROYECTOS DESARROLLADOS"
          : esHerramienta
          ? "TIPOS DE HERRAMIENTAS"
          : "INDUSTRIAS DONDE SE APLICAN"}
      </h2>

      {/* DESCRIPCIÓN */}
      <p className="text-center text-[#2E6092] max-w-6xl mx-auto mt-16 mb-20 leading-relaxed md:text-[24px] sm:text-[16px] md:text-[20px]">
        {esProyecto
          ? "Analizamos cada proceso y sus condiciones reales de operación para desarrollar soluciones que mejoran la eficiencia y continuidad productiva."
          : esHerramienta
          ? "Contar con las herramientas adecuadas es fundamental para asegurar una correcta instalación, ajuste y mantenimiento de los sistemas de transporte. Cada tipo de herramienta cumple una función específica que impacta directamente en el desempeño, la seguridad y la vida útil de la banda."
          : "Cada sistema se diseña considerando variables como tipo de producto, flujo de trabajo, condiciones operativas, espacio disponible y nivel de automatización, lo que permite desarrollar soluciones adaptables a prácticamente cualquier sector industrial."}
      </p>

      {/* GRID DE CARTAS */}
      <div
        className={`grid w-3/4 mx-auto gap-4 sm:gap-4 sm:grid-cols-1 md:grid-cols-2 ${gridCols}`}
      >
        {aplicaciones.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90] sm:scale-[0.95] md:scale-[0.93]
            transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="w-full relative">
              <img
                src={item.img}
                className="w-full h-[200px] sm:h-[220px] md:h-[260px] lg:h-full object-cover object-center rounded-lg"
              />

              {/* RECUADRO AZUL TRANSPARENTE */}
              <div
                className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                from-[#3b8cff]/80 via-[#3b8cff]/40 to-[#3b8cff]/70
                flex flex-col items-center justify-center px-4 text-center"
              >
                <h3 className="font-semibold text-white text-[20px] sm:text-[16px] md:text-[18px] leading-tight drop-shadow-md mb-1">
                  {item.titulo}
                </h3>

                <p className="text-white text-[14px] sm:text-[12px] md:text-[14px] leading-tight drop-shadow-md">
                  {item.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÓN FINAL */}
      {(esProyecto || esHerramienta || esTransportadores) && url && (
        <div className="   mt-20 
      w-3/4 mx-auto
      flex justify-center
      lg:justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-azulobs-500 text-white px-14 py-2 rounded-full text-[18px]
    font-semibold flex items-center justify-center text-center
    shadow-[0_4px_15px_rgba(0,0,0,0.25)]
    transition duration-300 hover:bg-white hover:text-azulobs-500
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] border border-transparent
    sm:px-10 sm:text-[14px] sm:leading-[1.3] sm:h-[50px]
    md:px-12 md:text-[16px]"
          >
            Ver opciones en el catálogo
          </a>
        </div>
      )}
    </div>
  );
}








