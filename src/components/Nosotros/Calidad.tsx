export default function Calidad() {
  return (
    <section className="font-poppins w-full bg-white py-20 px-6 mt-40">
      <div className="max-w-6xl mx-auto">

        {/* CONTENEDOR PRINCIPAL: IMÁGENES + TEXTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* IMÁGENES */}
          <div className="space-y-6">
            <img
              src="/images/nosotros/calidad/checar.jpg"
              alt="calidad 1"
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />

            <img
              src="/images/nosotros/calidad/equipo.jpg"
              alt="calidad 2"
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* TEXTO A LA DERECHA */}
          <div>
            <h2 className="text-[#2E6092] font-bold mt-40 text-[32px]">
              COMPROMISO CON LA CALIDAD
            </h2>

            <p className="text-[#2E6092] leading-relaxed mt-16 text-[20px]">
              Operamos bajo un Sistema de Gestión de Calidad orientado a la mejora continua,
              el cumplimiento de estándares y la satisfacción de nuestros clientes.
            </p>

            <a
              href="https://omnibandas.com/calidad/politica_gestion_calidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2E6092] font-semibold underline hover:text-blue-700 transition text-[20px] mt-20 block"
            >
              Consultar Política del Sistema de Gestión de Calidad
            </a>
          </div>
        </div>

        {/* TEXTO FINAL CENTRADO — FUERA DEL GRID */}
        <div className="w-full flex justify-center mt-16 -ml-80">
  <p className="text-[#2E6092] text-center text-[18px]">
    Política de Privacidad | Términos de Uso | Aviso Legal
  </p>
</div>



      </div>
    </section>
  );
}