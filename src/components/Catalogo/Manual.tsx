export default function Manual() {
  return (
    <section className="w-full bg-white py-24 px-6">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* IMAGEN DEL MANUAL */}
        <div className="w-full flex justify-center">
          <img
            src="/images/catalago/manual/catalogo.jpg"
            alt="manual omnibandas"
            className="w-full max-w-md rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* COLUMNA DERECHA */}
        <div className="w-full flex flex-col items-center text-center">

          {/* TEXTO */}
          <h2 className="text-[#2E6092] text-xl font-bold mb-4">
            ¿Necesitas ayuda para interpretar el catálogo o elegir un producto?
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-md">
            Las especificaciones pueden variar según la aplicación y el entorno de operación.
            Nuestro equipo puede ayudarte a seleccionar la opción adecuada para tu proceso.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <button className="px-8 py-4 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-300 hover:bg-blue-900 hover:text-white">
              Contactar asesor
            </button>

            <button className="px-8 py-4 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-300 hover:bg-blue-900 hover:text-white">
              Descargar catálogo (PDF)
            </button>
          </div>

          {/* IMAGEN DEL PLANO ABAJO (PEGADA AL BORDE, SIN SOMBRA, SIN REDONDEO) */}
          <img
  src="/images/catalago/manual/plano.jpg"
  alt="banda transportadora"
  className="w-full max-w-xl h-[200px] object-cover mt-20"
/>




  



        </div>

      </div>
    </section>
  );
}