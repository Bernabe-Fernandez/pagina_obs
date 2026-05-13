import type { condicionTipo } from "../../types";

type TipoViewTwoProps = {
  condiciones: condicionTipo[];
  tipo: string;
};

export default function TipoViewTwo({ condiciones, tipo }: TipoViewTwoProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-12 mt-40">
          CONDICIONES DE OPERACIÓN
        </h2>

        {/* DESCRIPCIÓN */}
        {tipo === "proyectos" ? (
          <p className="text-center text-[20px] text-[#2E6092] max-w-6xl mx-auto leading-relaxed mb-36">
            Los proyectos especiales permiten responder a requerimientos operativos particulares mediante el diseño y desarrollo de soluciones de transporte adaptadas a cada proceso.
          </p>
        ) : (
          <p className="text-center text-[20px] text-[#2E6092] max-w-6xl mx-auto leading-relaxed mb-36">
            En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte
            capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos
            de alta exigencia.
          </p>
        )}

        {/* GRID DE ELEMENTOS */}
        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-4/5 mx-auto">
          {condiciones.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-azulobs-500 flex items-center justify-center mb-6">
                <img src={item.icono} className="w-26 h-26" />
              </div>
              <h3 className="text-azulobs-600 font-semibold text-[20px] mb-3">
                {item.titulo}
              </h3>
              <p className="text-[18px] text-[#2E6092] leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

