
export default function Ventajas () {
  return (
    <section className="w-full py-16 bg-white">
      <div>

        {/* Descripción */}
        <div className="text-center max-w-6xl mx-auto mb-60 text-[24px]">
          <p className="text-[#2E6092] leading-relaxed">
            Las bandas transportadoras son sistemas diseñados para el traslado continuo de productos a lo largo de un proceso productivo.
            En Omnibandas ofrecemos soluciones adaptadas a distintos entornos industriales, considerando el tipo de producto, la velocidad
            de operación y las condiciones de trabajos.
          </p>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-azulobs-500 mb-20">
          VENTAJAS PRINCIPALES
        </h2>

        {/* Sección de 4 cartas */}
        <div className="grid grid-cols-4 w-3/4 gap-0 mx-auto">

          {/* CARTA 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
            <div className="w-full relative">
              <img
                src="/images/bandas/cuadros/cereales.jpg"
                className="w-full h-full object-cover object-bottom"
              />

              {/* Recuadro azul transparente */}
              <div className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                from-[#3b8cff]/80
                via-[#3b8cff]/40
                to-[#3b8cff]/70
                flex items-center justify-center">
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md px-6 text-center">
                  Transporte continuo y estable
                </h3>
              </div>
            </div>
          </div>

          {/* CARTA 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
            <div className="w-full relative">
              <img
                src="/images/bandas/cuadros/carnes.jpg"
                className="w-full h-full object-cover object-bottom"
              />

              <div className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                from-[#3b8cff]/80
                via-[#3b8cff]/40
                to-[#3b8cff]/70
                flex items-center justify-center">
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md px-6 text-center">
                  Versatilidad de configuración
                </h3>
              </div>
            </div>
          </div>

          {/* CARTA 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
            <div className="w-full relative">
              <img
                src="/images/bandas/cuadros/ban.jpg"
                className="w-full h-full object-cover object-bottom"
              />

              <div className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                from-[#3b8cff]/80
                via-[#3b8cff]/40
                to-[#3b8cff]/70
                flex items-center justify-center">
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md px-6 text-center">
                  Reducción de paros de producción
                </h3>
              </div>
            </div>
          </div>

          {/* CARTA 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
            <div className="w-full relative">
              <img
                src="/images/bandas/cuadros/cajas.jpg"
                className="w-full h-full object-cover object-bottom"
              />

              <div className="absolute bottom-[-3px] w-full h-[80px] bg-gradient-to-b
                from-[#3b8cff]/80
                via-[#3b8cff]/40
                to-[#3b8cff]/70
                flex items-center justify-center">
                <h3 className="font-semibold text-white text-[20px] leading-tight drop-shadow-md px-6 text-center">
                  Mejora en la eficiencia del proceso
                </h3>
              </div>
            </div>
          </div>
         
        </div>

      </div>
    </section>
  );
}