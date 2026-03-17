export default function Manual() {
  return (
    <section className="w-full bg-white pt-20 pb-0 px-6 mt-28">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-40 items-start">

        {/* COLUMNA IZQUIERDA: MANUAL */}
        <div className="w-full flex justify-center">
          <img
            src="/images/catalago/manual/catalogo.jpg"
            alt="manual omnibandas"
            className="w-full max-w-md rounded-3xl shadow-lg object-cover mb-40"
          />
        </div>

        {/* COLUMNA DERECHA: TEXTO + BOTONES + BANDA */}
        <div className="w-full flex flex-col items-start">

          <h2 className="text-[#2E6092] text-3xl font-bold mb-10">
            ¿Necesitas ayuda para interpretar el catálogo o elegir un producto?
          </h2>

          <p className="text-[#2E6092] text-lg leading-relaxed mb-16">
            Las especificaciones pueden variar según la aplicación y el tipo de transporte.
            Nuestro equipo puede ayudarte a seleccionar la opción adecuada para tu proceso.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-6 mb-10">
            <button className="px-10 py-4 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-300 hover:bg-blue-900 hover:text-white">
              Contactar asesor
            </button>

            <button className="px-10 py-4 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-300 hover:bg-blue-900 hover:text-white">
              Descargar catálogo (PDF)
            </button>
          </div>

          {/* BANDA ALINEADA  */}
          <img
            src="/images/catalago/manual/plano.jpg"
            alt="banda transportadora"
            className="w-full max-w-xl object-contain mt-10 scale-150"
          />

        </div>
      </div>
    </section>
  );
}