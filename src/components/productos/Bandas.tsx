export default function Bandas() {
  return (
   <section className="w-full py-16 bg-white">
       <div className="flex justify-center flex-wrap gap-0">




        {/* Descripción */}
        <div className="text-center max-w-5xl mx-auto mb-12 px-28">
          <p className="text-gray-700 leading-relaxed">
            Las bandas transportadoras son sistemas diseñados para el traslado continuo de productos a lo largo de un proceso productivo.
            En Omnibandas ofrecemos soluciones adaptadas a distintos entornos industriales, considerando el tipo de producto, la velocidad
            de operación y las condiciones de trabajos.
          </p>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          VENTAJAS PRINCIPALES
        </h2>

        {/* Sección de 4 cartas */}
        <div className="grid grid-cols-4 w-3/4 gap-0 mx-auto">


          
          {/* Carta 1 */}
    
          <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90] ">
            <div className="w-full aspect-[40/50] object-center">
              <img
                src="/images/bandas/cuadros/cereales.jpg"
                alt="Transporte continuo y estable"
                className="w-full h-full object-cover object-center"
              />
            </div>
                

              <div
                className="p-3 text-center"
              style={{ backgroundColor: "rgba(0, 51, 153, 0.65)" }}
                >
            <h3 className="font-semibold text-white" style={{ fontSize: "14px" }}>
                  Transporte continuo y estable
                </h3>
              </div>
          </div>


              
          {/* Carta 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
            <div className="w-full aspect-[40/50] object-center">
            <img
              src="/images/bandas/cuadros/carnes.jpg"
              alt="Versatilidad de configuración"
              className="w-full h-full object-cover object-center"
            />
             </div>
            
            <div
              className="p-3 text-center"
              style={{ backgroundColor: "rgba(0, 51, 153, 0.65)" }}
            >
              <h3 className="font-semibold text-white" style={{ fontSize: "14px" }}>
                Versatilidad de configuración
              </h3>
            </div>
          </div>


          {/* Carta 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
               <div className="w-full aspect-[40/50] object-center">
            <img
              src="/images/bandas/cuadros/ban.jpg"
              alt="Reducción de paros de producción"
              className="w-full h-full object-cover object-center"
            />
             </div>
            
            <div
              className="p-3 text-center"
              style={{ backgroundColor: "rgba(0, 51, 153, 0.65)" }}
            >
              <h3 className="font-semibold text-white" style={{ fontSize: "14px" }}>
                Reducción de paros de producción
              </h3>
            </div>
          </div>


          {/* Carta 4 */}
           <div className="bg-white shadow-md rounded-lg overflow-hidden scale-[0.90]">
                 <div className="w-full aspect-[40/50] object-center">
            <img
              src="/images/bandas/cuadros/cajas.jpg"
              alt="Mejora en la eficiencia del proceso"
              className="w-full h-full object-cover object-center"
            />
             </div>
       
            <div
              className="p-3 text-center"
              style={{ backgroundColor: "rgba(0, 51, 153, 0.65)" }}
            >
              <h3 className="font-semibold text-white" style={{ fontSize: "14px" }}>
                Mejora en la eficiencia del proceso
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}