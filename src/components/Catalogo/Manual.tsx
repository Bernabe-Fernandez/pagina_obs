export default function Manual() {
  return (
    <section className="w-full bg-white py-24 px-6">

      {/* GRID PRINCIPAL */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">

        {/* IMAGEN DEL MANUAL */}
        <div className="w-full flex justify-center">
          <img
            src="/images/catalago/manual/catalogo.jpg"
            alt="manual omnibandas"
            className="w-full max-w-md rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* CONTENEDOR DE LA BANDA */}
        <div className="w-full flex justify-center relative">
          <img
            src="/images/catalago/manual/plano.jpg"
            alt="banda transportadora"
            className="w-full max-w-md h-[420px] object-cover rounded-3xl"
          />

          {/* TEXTO Y BOTONES ENCIMA */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

            <h2 className="text-[#2E6092] text-3xl font-bold mb-4 drop-shadow-lg">
              ¿Necesitas ayuda para interpretar el catálogo o elegir un producto?
            </h2>

            <p className="text-white text-lg leading-relaxed mb-8 drop-shadow-lg">
              Las especificaciones pueden variar según la aplicación y el entorno de operación.
              Nuestro equipo puede ayudarte a seleccionar la opción adecuada para tu proceso.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                className="px-8 py-4 flex items-center justify-center
                bg-white text-blue-800
                rounded-full
                border border-gray-200
                shadow-md
                font-medium text-sm
                transition-colors duration-300
                hover:bg-blue-900 hover:text-white"
              >
                Contactar asesor
              </button>

              <button
                className="px-8 py-4 flex items-center justify-center
                bg-white text-blue-800
                rounded-full
                border border-gray-200
                shadow-md
                font-medium text-sm
                transition-colors duration-300
                hover:bg-blue-900 hover:text-white"
              >
                Descargar catálogo (PDF)
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}