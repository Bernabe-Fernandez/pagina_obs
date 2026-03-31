export default function Aplicacion() {
  return (
    <section className="w-full py-20 bg-white mt-20">
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-10 items-center">

        {/* Imagen */}
        <div className="w-full">
          <img
            src="/images/bandas/aplicacion/cajas.jpg"
            className="w-[450px] h-auto object-cover rounded-lg translate-x-16"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            APLICACIONES COMUNES
          </h2>

          <ul className="text-[20px] text-[#2E6092] leading-relaxed space-y-4">
            <li>• Líneas de producción y ensamblaje</li>
            <li>• Procesos de empaque y clasificación</li>
            <li>• Transporte de productos a granel o unitarios</li>
            <li>• Sistemas automatizados y semiautomatizados</li>
          </ul>
        </div>

      </div>
    </section>
  );
}