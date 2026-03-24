{/*importacion de imagenes e iconos*/}

const zonas = [
  {
    nombre: "Zona Norte",
    img: "/images/zona/cartas/contacto1.jpg",
    icon: "/images/zona/cartas/nortee.svg"
  },
  {
    nombre: "Zona Bajío",
    img: "/images/zona/cartas/contacto2.jpg",
    icon: "/images/zona/cartas/bajio.svg"
  },
  {
    nombre: "Zona Occidente",
    img: "/images/zona/cartas/contacto3.jpg",
    icon: "/images/zona/cartas/occidentee.svg"
  },
  {
    nombre: "Zona Centro",
    img: "/images/zona/cartas/contacto4.jpg",
    icon: "/images/zona/cartas/centroo.svg"
  },
  {
    nombre: "Zona Pacífico",
    img: "/images/zona/cartas/contacto5.jpg",
    icon: "/images/zona/cartas/pacificoo.svg"
  }
];

export default function Zona() {
  return (
    <section className="w-full py-16 bg-white">

      <h2 className="text-center text-4xl font-bold text-azulobs-600 mb-10 mt-60">
        CONTACTO POR ZONA
      </h2>

      <p className="text-center text-azulobs-500 text-lg mb-40 max-w-3xl mx-auto">
        Para una atención más directa, comunícate con nuestro equipo de ventas según tu ubicación.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 mb-40">

        {zonas.map((zona, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
          >

            {/* IMAGEN */}
            <div className="relative h-1/2 w-full overflow-hidden bg-blue-900">
              <img
                src={zona.img}
                alt={zona.nombre}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-200/[0.80]"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={zona.icon}
                  alt="icono"
                  className="w-[195px] h-[195px]"
                />
              </div>
            </div>

            {/* CONTENIDO */}
            <div className="p-5 flex flex-col justify-between h-1/2">
              <div>
                <h3 className="text-xl font-bold text-azulobs-500 mb-2">
                  {zona.nombre}
                </h3>
                <p className="text-azulobs-400">Vendedor</p>
                <p className="text-azulobs-400">Cel.</p>
                <p className="text-azulobs-400">correo@omnibandas.com.mx</p>
              </div>

              {/* BOTÓN */}
              <div className="flex justify-end">
                <button
                  className="
                    px-4
                    py-1
                    text-[15px]
                    font-semibold
                    rounded-xl
                     bg-azulobs-500
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-azulobs-500
                    hover:shadow-[0_6px_14px_rgba(0,0,0,0.35)]
                  "
                >
                  Contactar
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}