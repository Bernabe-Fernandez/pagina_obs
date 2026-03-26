import { services } from "../../data/servicios";


export default function Servicios() {
  return (
    <section className="w-full bg-white py-10 px-6 mt-28">

      {/* Contenedor de tarjetas */}
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-20 tracking-wide">
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
                  <p className="text-[#2E6092] text-lg font-medium leading-snug max-w-[250px]">
                    {service.title}
                  </p>

                  {/* Botón */}
                  <button
                     
                    className="
                      w-[170px] h-10
                      flex items-center justify-center
                      bg-white text-azulobs-500
                      rounded-full
                      shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                      font-medium text-sm
                      transition-all duration-300
                      hover:bg-azulobs-500 hover:text-white
                      focus:outlinenone focus:ring-0 focus:border-transparent
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
        <div className="flex justify-end mt-24 pr-10 mb-28">


        <a
            href="/catalogo"
            className="
            w-[220px] h-11 flex items-center justify-center
           bg-white text-azulobs-500
            rounded-full
            shadow-[0_4px_10px_rgba(0,0,0,0.25)]
            font-medium text-sm
            transition-all duration-300
             hover:bg-azulobs-500 hover:text-white
            focus:outline-none focus:ring-0 focus:border-transparent
           -translate-x-60
         "
         >
          Ver catálogo completo
       </a>
    </div>


    </section>
  );
}