export default function Calidad() {
  return (
    <section className="font-poppins w-full bg-white py-20 px-6 mt-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda: imágenes */}
        <div className="grid grid-rows-3 gap-6">
          <img
            src="/images/nosotros/calidad/trabajo.jpg"
            alt="calidad 1"
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />

          <img
            src="/images/nosotros/calidad/checar.jpg"
            alt="calidad 2"
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />

          <img
            src="/images/nosotros/calidad/equipo.jpg"
            alt="calidad 3"
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Columna derecha: texto */}
        <div className="-mt-28">
          <h2 className="text-3xl font-bold text-blue-900 mb-20">
            COMPROMISO CON LA CALIDAD
          </h2>

          <p className="text-[#2A4C9A] leading-relaxed text-lg mb-12">
            Operamos bajo un Sistema de Gestión de Calidad orientado a la mejora continua,
            el cumplimiento de estándares y la satisfacción de nuestros clientes.
          </p>

          <a
            href="/pdfs/politica-calidad.pdf"
            target="_blank"
            className="text-[#2A4C9A] font-semibold underline hover:text-blue-700 transition block mt-4"
          >
            Consultar Política del Sistema de Gestión de Calidad
          </a>
        </div>
      </div>
      {/* Texto debajo de la última imagen */}
      <div className="max-w-6xl mx-auto">
        <div className="md:w-1/2">
            <p className="text-[#2A4C9A] text-sm mt-10 text-center">
                Política de Privacidad | Términos de Uso | Aviso Legal
          </p>
        </div>
      </div>

    </section>
  );
}  