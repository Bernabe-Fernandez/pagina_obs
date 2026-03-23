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
    <section className="w-full py-16 bg-white mb-20">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">
        CONTACTO POR ZONA
      </h2>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Para una atención más directa, comunícate con nuestro equipo de ventas según tu ubicación.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4">

        {zonas.map((zona, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
          >

            {/* IMAGEN (MISMA ALTURA) + FONDO AZUL + ICONO MÁS GRANDE */}
            <div className="relative h-1/2 w-full overflow-hidden bg-blue-900">
              <img
                src={zona.img}
                alt={zona.nombre}
                className="w-full h-full object-cover object-center"
              />

              {/* Fondo azul difuminado */}
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>

              {/* Icono centrado y MÁS GRANDE */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={zona.icon}
                  alt="icono"
                  className="w-[195px] h-[195px]"   // ← AQUI SE HACE MÁS GRANDE
                />
              </div>
            </div>

            {/* CONTENIDO */}
            <div className="p-5 flex flex-col justify-between h-1/2">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {zona.nombre}
                </h3>

                <p className="text-gray-600">Vendedor</p>
                <p className="text-gray-600">Cel.</p>
                <p className="text-gray-600 mb-4">correo@omnibandas.com.mx</p>
              </div>

              {/* BOTÓN MÁS PEQUEÑO */}
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-1 rounded-md text-xs font-medium shadow-sm transition-all">
                Contactar
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}