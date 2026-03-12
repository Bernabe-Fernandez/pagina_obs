export default function Encuentro() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* APARTADO 1 – TEXTO AZUL */}
        <p className="text-[#2A4C9A] text-sm leading-relaxed max-w-3xl mx-auto text-center mb-16">
          Consulta nuestro catálogo completo de soluciones en bandas transportadoras, transmisión y accesorios industriales.
          Encuentra especificaciones técnicas, materiales y configuraciones disponibles para distintas aplicaciones y procesos productivos.
        </p>

        {/* APARTADO 2 – TÍTULO */}
        <h2 className="text-center text-[#2A4C9A] text-2xl font-bold tracking-wide mb-6">
          ¿QUÉ ENCONTRARÁS EN EL CATÁLOGO?
        </h2>

        {/* APARTADO 2 – DESCRIPCIÓN */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto text-sm leading-relaxed mb-12">
          En este catálogo encontrarás una amplia gama de bandas transportadoras, termosoldables,
          de transmisión de potencia y modulares, así como accesorios, equipos de instalación y
          soluciones en proyectos especiales.
        </p>

        {/* GRID DE IMÁGENES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Imagen 1 */}
          <div className="w-full h-40 rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/catalogo/mina.jpg"
              alt="imagen 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen 2 */}
          <div className="w-full h-40 rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/catalogo/huevos.jpg"
              alt="imagen 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen 3 */}
          <div className="w-full h-40 rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/catalogo/manzana.jpg"
              alt="imagen 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagen 4 */}
          <div className="w-full h-40 rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/catalogo/latas.jpg"
              alt="imagen 4"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}