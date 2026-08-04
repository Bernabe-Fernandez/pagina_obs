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

        {/* GRID DE IMÁGENES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-20 mt-10">
          {[
            { src: "/images/catalago/encontraras/transportadoras.webp", titulo: "BANDAS TRANSPORTADORAS", url: "/productos/bandas" },
            { src: "/images/catalago/encontraras/termosoldable.webp", titulo: "BANDAS TERMOSOLDABLES", url: "/productos/termosoldables" },
            { src: "/images/catalago/encontraras/potencia.webp", titulo: "BANDAS DE TRANSMISIÓN DE POTENCIA", url: "/productos/transmision" },
            { src: "/images/catalago/encontraras/empujadores.webp", titulo: "EMPUJADORES", url: "/productos/empujadores" },
            { src: "/images/catalago/encontraras/grapa.webp", titulo: "GRAPAS", url: "/productos/grapas" },
            { src: "/images/catalago/encontraras/guias.webp", titulo: "GUÍAS DE ORIENTACIÓN", url: "/productos/guias" },
            { src: "/images/catalago/encontraras/olanes.webp", titulo: "OLANES", url: "/productos/olanes" },
            { src: "/images/catalago/encontraras/herramientas.webp", titulo: "ACCESORIOS Y HERRAMIENTAS", url: "/productos/herramientas" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Imagen */}
              <div className="w-full h-[210px] md:h-[220px] rounded-t-xl shadow-md relative">
                <img
                  src={item.src}
                  alt={item.titulo}
                  className="w-full h-full object-cover object-top"
                />

                {/* Recuadro azul con degradado */}
                <div className="
                  absolute bottom-[-35px] 
                  w-full h-[70px] 
                  bg-gradient-to-b 
                  from-[#6fbfff] 
                  via-[#3b8cff] 
                  to-[#2E6092] 
                  flex items-center justify-center 
                  rounded-b-xl shadow-md
                  transition-all duration-300 group-hover:brightness-110
                ">
                  <p className="text-white font-semibold text-[16px] uppercase leading-tight text-center px-2 drop-shadow-sm">
                    {item.titulo}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


