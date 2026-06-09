import { useEffect } from "react";
import FormularioContacto from '../forms/FormularioContacto'

export default function Contact() {

  // CARGAR LA PAGINA SCROLL
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 1000); // AJUSTE DEL NUMERO SCROLL
        }
      }
    };

    // ESPERA A QUE REACT TERMINE DE MONTAR
    setTimeout(scrollToHash, 0);
  }, []);

  return (
    <section className="w-full pt-48 pb-20 bg-white">

      {/* BLOQUE A: Título + descripción */}
      <div id="inicio-contacto" className="mb-16 mt-10 text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
          ¿BUSCAS INFORMACIÓN O ASESORÍA TÉCNICA?
        </h2>

        <p className="text-[18px] sm:text-[20px] text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Nuestro equipo está disponible para apoyarte según los requerimientos de tu proceso.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="
        max-w-20xl mx-auto 
        grid grid-cols-1 md:grid-cols-[45%_55%] 
        gap-6 sm:gap-8 
        px-6 sm:px-10 md:px-20 lg:px-60 
        items-start
      ">

        {/* Columna izquierda */}
        <div className="flex flex-col justify-start items-center min-h-[650px]">
          <div className="space-y-8 text-gray-700 mt-10 sm:mt-20">
            <div>
              <h3 className="font-semibold text-blue-900 text-xl sm:text-2xl">Dirección</h3>
              <p className="text-base sm:text-lg text-gray-700">
                Industria del Vestido 2326,<br />
                Zapopan Industrial Nte., 45130 Guadalajara, Jal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 text-xl sm:text-2xl">Teléfono</h3>
              <p className="text-base sm:text-lg text-gray-700">+52 33 663 2500</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 text-xl sm:text-2xl">Correo</h3>
              <p className="text-base sm:text-lg text-gray-700">ventas@omnibandas.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 text-xl sm:text-2xl">Horario</h3>
              <p className="text-base sm:text-lg text-gray-700">
                Lunes a viernes<br />9:00 – 18:00 h
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 text-xl sm:text-2xl">WhatsApp</h3>
              <p className="text-base sm:text-lg text-gray-700">+52 1 33 1527 4782</p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col justify-start mt-8 sm:mt-14 md:mt-20">
          <FormularioContacto />
        </div>

      </div>
    </section>
  );
}

