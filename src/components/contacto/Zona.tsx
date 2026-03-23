const zonas = [
  {
    nombre: "Zona Norte",
    img: "/images/trabajo/zona/cartas/contacto1.jpg",
    icon: "/images/trabajo/zona/cartas/nortee.svg"
  },
  {
    nombre: "Zona Bajío",
    img: "/images/trabajo/zona/cartas/contacto2.jpg",
    icon: "/images/trabajo/zona/cartas/bajio.svg"
  },
  {
    nombre: "Zona Occidente",
    img: "/images/trabajo/zona/cartas/contacto3.jpg",
    icon: "/images/trabajo/zona/cartas/occidentee.svg"
  },
  {
    nombre: "Zona Centro",
    img: "/images/trabajo/zona/cartas/contacto4.jpg",
    icon: "/images/trabajo/zona/cartas/centroo.svg"
  },
  {
    nombre: "Zona Pacífico",
    img: "/images/trabajo/zona/cartas/contacto5.jpg",
    icon: "/images/trabajo/zona/cartas/pacificoo.svg"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-6">
        {zonas.map((zona, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Imagen más alta */}
            <div className="relative h-56">
              <img
                src={zona.img}
                alt={zona.nombre}
                className="w-full h-full object-cover"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Icono dentro de círculo azul */}
              <div className="absolute bottom-3 right-3 bg-blue-700 p-3 rounded-full shadow-lg">
                <img
                  src={zona.icon}
                  alt="icono"
                  className="w-10 h-10 invert brightness-0"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {zona.nombre}
              </h3>

              <p className="text-gray-600">Vendedor</p>
              <p className="text-gray-600">Cel.</p>
              <p className="text-gray-600 mb-4">correo@omnibandas.com.mx</p>

              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md font-semibold shadow-sm hover:shadow-md transition-all">
                Contactar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}