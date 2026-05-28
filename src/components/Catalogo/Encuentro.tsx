export default function Encuentro() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TEXTO AZUL INICIAL */}
        <p className="text-[#2E6092] text-[20px] leading-relaxed max-w-10xl mx-auto text-center mb-60 font-semibold">
          Consulta nuestro catálogo completo de soluciones en bandas transportadoras, transmisión y accesorios industriales.
          Encuentra especificaciones técnicas, materiales y configuraciones disponibles para distintas aplicaciones y procesos productivos.
        </p>

        {/* TÍTULO */}
        <h2 className="text-center text-[#2A4C9A] text-4xl font-bold tracking-wide mb-12">
          ¿QUÉ ENCONTRARÁS EN EL CATÁLOGO?
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-center text-[#2E6092] max-w-5xl mx-auto text-[20px] leading-relaxed mb-24 font-medium">
          En este catálogo encontrarás una amplia gama de bandas transportadoras, termosoldables,
          de transmisión de potencia y modulares, así como accesorios, equipos de instalación y
          soluciones en proyectos especiales.
        </p>

        {/* GRID DE IMÁGENES – ESTRUCTURA TIPO CATÁLOGO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          {/* Bandas transportadoras */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/banda-transportadora.jpg"
                alt="Bandas transportadoras"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              BANDAS TRANSPORTADORAS
            </p>
          </div>

          {/* Bandas termosoldables */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/banda-termosoldable.jpg"
                alt="Bandas termosoldables"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              BANDAS TERMOSOLDABLES
            </p>
          </div>

          {/* Bandas de transmisión de potencia */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/banda-potencia.jpg"
                alt="Bandas de transmisión de potencia"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              BANDAS DE TRANSMISIÓN DE POTENCIA
            </p>
          </div>

          {/* Empujadores */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/empujadores.jpg"
                alt="Empujadores"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              EMPUJADORES
            </p>
          </div>

          {/* Grapas */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/grapas.jpg"
                alt="Grapas"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              GRAPAS
            </p>
          </div>

          {/* Guías de orientación */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/guias.jpg"
                alt="Guías de orientación"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              GUÍAS DE ORIENTACIÓN
            </p>
          </div>

          {/* Olanes */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/olanes.jpg"
                alt="Olanes"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              OLANES
            </p>
          </div>

          {/* Accesorios y herramientas */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/catalago/encontraras/accesorios.jpg"
                alt="Accesorios y herramientas"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#2E6092] font-semibold mt-3 text-[16px] uppercase">
              ACCESORIOS Y HERRAMIENTAS
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
