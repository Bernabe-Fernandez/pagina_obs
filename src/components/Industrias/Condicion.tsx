export default function Condicion() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-12 mt-40">
          CONDICIONES DE OPERACIÓN
        </h2>


        {/* DESCRIPCIÓN */}
        <p className="text-center text-[20px] text-[#2E6092] max-w-6xl mx-auto leading-relaxed mb-36">
          En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte
          capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos
          de alta exigencia.
        </p>


        {/* GRID DE 4 ELEMENTOS */}
        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-4/5 mx-auto">


          {/* ITEM 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-azulobs-500 flex items-center justify-center mb-6">
              <img src="/images/Industria/condiciones/icono1.png" className="w-12 h-12" />
            </div>
            <h3 className="text-azulobs-600 font-semibold text-[20px] mb-3">
              Líneas de producción y ensamblaje
            </h3>
            <p className="text-[18px] text-[#2E6092] leading-relaxed">
              Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes,
              reduciendo riesgos y errores durante la instalación.
            </p>
          </div>


          {/* ITEM 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-azulobs-500 flex items-center justify-center mb-6">
              <img src="/images/Industria/condiciones/icono2.png" className="w-12 h-12" />
            </div>
            <h3 className="text-azulobs-600 font-semibold text-[20px] mb-3">
              Procesos de empaque y clasificación
            </h3>
            <p className="text-[18px] text-[#2E6092] leading-relaxed">
              Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.
            </p>
          </div>


          {/* ITEM 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-azulobs-500 flex items-center justify-center mb-6">
              <img src="/images/Industria/condiciones/icono3.png" className="w-12 h-12" />
            </div>
            <h3 className="text-azulobs-600 font-semibold text-[20px] mb-3">
              Transporte de productos a granel o unitarios
            </h3>
            <p className="text-[18px] text-[#2E6092] leading-relaxed">
              Sistemas de transporte interno que permiten el desplazamiento eficiente de productos
              a granel o unitarios.
            </p>
          </div>


          {/* ITEM 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-azulobs-500 flex items-center justify-center mb-6">
              <img src="/images/Industria/condiciones/icono4.png" className="w-12 h-12" />
            </div>
            <h3 className="text-azulobs-600 font-semibold text-[20px] mb-3">
               Sistemas automatizados y semiautomatizados
            </h3>
            <p className="text-[18px] text-[#2E6092] leading-relaxed">
              Equipos compatibles con sistemas automatizados y semiautomatizados.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
