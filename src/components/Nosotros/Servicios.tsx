import { services } from "../../data/servicios";

export default function Servicios() {
  return (
    <section className="w-full bg-white py-10 px-6">

      {/* Contenedor de tarjetas */}
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8 tracking-wide">
          QUÉ HACEMOS
        </h2>

        {/* Cards */}
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300"
            >
              {/* Imagen */}
              <div className="h-40 md:h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex items-center">
                <div className="flex items-center justify-between w-full gap-6">

                  {/* Texto */}
                  <p className="text-gray-700 text-lg font-medium leading-snug max-w-[250px]">
                    {service.title}
                  </p>

                  {/* Botón */}
                  <button
                    className="
                      w-[170px] h-10
                      flex items-center justify-center
                      bg-white text-blue-800
                      rounded-full
                      border border-gray-200
                      shadow-md
                      font-medium text-sm
                      transition-colors duration-300
                      hover:bg-blue-900 hover:text-white
                    "
                  >
                    Conoce más
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón Ver catálogo completo */}
      <div className="flex justify-end mt-16 pr-10">
        <button
          className="
            w-[220px] h-11 flex items-center justify-center
            bg-white text-blue-800
            rounded-full
            border border-gray-200
            shadow-md
            font-medium text-sm
            transition-colors duration-300
            hover:bg-blue-900 hover:text-white
            -translate-x-20
          "
        >
          Ver catálogo completo
        </button>
      </div>

    </section>
  );
}