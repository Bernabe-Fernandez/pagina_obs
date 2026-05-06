import type { ventajasTipo } from "../../types";

type VentajasProps = {
  tipo: string,
  subtitulo: string,
  ventajas: ventajasTipo[]
}

export default function Ventajas({ tipo, subtitulo, ventajas }: VentajasProps) {

  const count = ventajas.length;
  const gridCol = `grid-cols-${count}`;

  return (
    tipo === "proyectos" || tipo === "transportadores" ? (

      <div className="w-full py-16 bg-white flex flex-col gap-10">

        {/* CUADRO 1 */}
        <div className="w-full py-16 bg-white flex flex-col gap-16">



   {/* SUBTÍTULO DEBAJO DEL HEADER */}
     <div className="w-full max-w-6xl mx-auto py-10 mb-28  -mt-28 pt-2 ">
     <p className="text-[#2E6092] text-[22px] leading-relaxed text-center">
     {subtitulo}
   </p>
  </div>


  {/* TÍTULO GENERAL */}
  <h2 className="text-3xl font-bold text-center text-[#2E6092]">
    VENTAJAS PRINCIPALES
  </h2>

  {/* CUADRO 1 */}
  <div className="w-full max-w-6xl mx-auto bg-white shadow-xl border border-gray-200 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10">

    {/* TEXTO IZQUIERDA */}
    <div className="w-full md:w-1/2">
      <h3 className="text-3xl font-bold text-[#2E6092] mb-6">
        {ventajas[0].titulo}
      </h3>

      {ventajas[0].descripcion && (
      <p className="text-gray-700 text-lg mb-4">
      {ventajas[0].descripcion}
      </p>
      )}

      {ventajas[0].listaVentajas && ventajas[0].listaVentajas.length > 0 && (
        <ul className="text-gray-700 leading-relaxed text-lg space-y-3">
          {ventajas[0].listaVentajas.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}
    </div>

    {/* IMAGEN DERECHA */}
    <div className="w-full md:w-1/2">
      <img
        src={ventajas[0].img}
        alt={ventajas[0].titulo}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
    </div>
  </div>

  {/* CUADRO 2 */}
  <div className="w-full max-w-6xl mx-auto bg-white shadow-xl border border-gray-200 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10">

    {/* TEXTO IZQUIERDA */}
    <div className="w-full md:w-1/2">
      <h3 className="text-3xl font-bold text-[#2E6092] mb-6">
        {ventajas[1].titulo}
      </h3>

      {ventajas[1].listaVentajas && ventajas[1].listaVentajas.length > 0 && (
        <ul className="text-gray-700 leading-relaxed text-lg space-y-3">
          {ventajas[1].listaVentajas.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}
    </div>

    {/* IMAGEN DERECHA */}
    <div className="w-full md:w-1/2">
      <img
        src={ventajas[1].img}
        alt={ventajas[1].titulo}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>

  </div>

</div>

    ) : (

      <section className="w-full py-16 bg-white">
        <div>

          {/* Descripción */}
          <div className="text-center max-w-6xl mx-auto mb-60 text-[24px]">
            <p className="text-[#2E6092] leading-relaxed">
              {subtitulo}
            </p>
          </div>

          {/* Título */}
          <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
            VENTAJAS PRINCIPALES
          </h2>

          {/* Sección de 4 cartas */}
          <div className={`grid ${gridCol} w-3/4 gap-0 mx-auto`}>

            {ventajas.map((ventaja, index) => (
              <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]" key={index}>
                <div className="w-full relative">
                  <img
                    src={ventaja.img}
                    className="w-full h-full object-cover object-bottom"
                  />

                  {/* Recuadro azul transparente */}
                  <div className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                    from-[#3b8cff]/80
                    via-[#3b8cff]/40
                    to-[#3b8cff]/70
                    flex items-center justify-center">
                    <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md px-6 text-center">
                      {ventaja.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    )
  );
}
