import { services } from "../../data/servicios";

export default function Servicios() {




  return (
    
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-12 tracking-wide">
          QUÉ HACEMOS
        </h2>

        {/* Cards */}
        <div className="space-y-6">
          {
            services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300"
            >
              {/* Imagen */}
              <div className="md:w-1/3 w-full h-56 md:h-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="md:w-2/3 w-full p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-700 text-lg font-medium text-center md:text-left">
                  {service.title}
                </p>

                <button
                 className="
                   w-40 h-11
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
          ))}
        </div>

      </div>
    </section>
  )
}
