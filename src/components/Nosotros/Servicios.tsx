import { services } from "../../data/servicios";

export default function Servicios() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 mt-20 sm:mt-28">

      {/* Contenedor de tarjetas */}
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-blue-900 mb-14 sm:mb-20 tracking-wide">
          QUÉ HACEMOS
        </h2>

        {/* Cards */}
        <div className="space-y-6 sm:space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
               className="
               grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
               bg-white rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] border border-gray-200 
                overflow-hidden transition-all duration-300
               hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:scale-[1.02]
               "
              >
              {/* Imagen */}
              <div className="h-40 sm:h-48 md:h-56 lg:h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center md:object-cover md:scale-100"
                />
              </div>

              {/* Contenido */}
              <div
                className={`p-5 sm:p-6 flex items-center md:items-stretch lg:items-center ${
                  service.title.includes("layout")
                    ? "md:h-[220px]"
                    : "md:h-[230px]"
                } lg:h-auto`}
              >
                <div className="
                  flex flex-col sm:flex-row items-start sm:items-start
                  justify-center md:justify-between lg:justify-between w-full
                  gap-4 sm:gap-6 md:gap-8 md:h-full
                ">

                  {/* Texto */}
                  <p
                    className="
                        text-[#2E6092]
                           text-base sm:text-lg md:text-[13.5px] lg:text-lg font-medium leading-snug
                           max-w-full sm:max-w-[300px] md:max-w-[280px]
                           text-left
                           md:flex-1 md:flex md:items-start md:justify-start
                           lg:flex lg:items-center lg:justify-start
                          "
                  >
                    {service.title}
                  </p>

                  {/* Botón */}
                  <button
                    onClick={() => {
                      if (index === 0) window.location.href = "/productos/transportadores";
                      if (index === 1) window.location.href = "/productos/herramientas";
                      if (index === 2) window.location.href = "/productos/transportadores";
                      if (index === 3) window.location.href = "/productos/proyectos";
                    }}
                    className="
                      w-full sm:w-[170px] md:w-[180px] lg:w-[170px] h-11
                      flex items-center justify-center
                      bg-white text-azulobs-500
                      rounded-full
                      shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                      font-medium text-sm
                      transition-all duration-300
                      hover:bg-azulobs-500 hover:text-white
                      focus:outline-none focus:ring-0 focus:border-transparent
                      md:self-center lg:self-center
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

      <div
        className="
         max-w-6xl mx-auto flex justify-center md:justify-end
         mt-16 sm:mt-24 mb-20
        "
      >
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
        transform xl:translate-x-[5px] 2xl:translate-x-[10px]
     "
       >
       Ver catálogo completo
     </a>
   </div>

    </section>
  );
}








