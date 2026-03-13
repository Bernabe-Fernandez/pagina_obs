export default function Encuentro() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TEXTO AZUL INICIAL – MÁS GRANDE Y SEPARADO */}
        <p className="text-[#2A4C9A] text-xl leading-relaxed max-w- 6xl mx-auto text-center mb-24 font-semibold">
          Consulta nuestro catálogo completo de soluciones en bandas transportadoras, transmisión y accesorios industriales.
          Encuentra especificaciones técnicas, materiales y configuraciones disponibles para distintas aplicaciones y procesos productivos.
        </p>

        {/* TÍTULO – MÁS GRANDE Y EN AZUL */}
        <h2 className="text-center text-[#2A4C9A] text-4xl font-bold tracking-wide mb-8">
          ¿QUÉ ENCONTRARÁS EN EL CATÁLOGO?
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-center text-[#2E6092] max-w-4xl mx-auto text-lg leading-relaxed mb-20 font-medium">
          En este catálogo encontrarás una amplia gama de bandas transportadoras, termosoldables,
          de transmisión de potencia y modulares, así como accesorios, equipos de instalación y
          soluciones en proyectos especiales.
        </p>

        {/* GRID DE IMÁGENES – IGUAL A LA REFERENCIA */}
        <div className="grid grid-cols-1 gap-6">

          {/* Imagen minera grande arriba */}
          <div className="w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/catalago/encontraras/mina.jpg"
              alt="imagen minera"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fila de imágenes pequeñas debajo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Imagen huevo */}
            <div className="w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/huevos.jpg"
                alt="imagen huevos"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Imagen manzana */}
            <div className="w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/manzana.jpg"
                alt="imagen manzana"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Imagen latas */}
            <div className="w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/latas.jpg"
                alt="imagen latas"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

