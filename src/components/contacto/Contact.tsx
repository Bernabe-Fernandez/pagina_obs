
import FormularioContacto from '../forms/FormularioContacto'

export default function Contact() {
  return (
    <section className="w-full pt-48 pb-20 bg-white">

        {/* BLOQUE A: Título + descripción */}
       <div className="mb-16 mt-10 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-12">
                ¿BUSCAS INFORMACIÓN O ASESORÍA TÉCNICA?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro equipo está disponible para apoyarte según los requerimientos de tu proceso.
            </p>
        </div>

      <div className="max-w-20xl mx-auto grid grid-cols-[40%_60%] gap-3 px-60 items-start">

        {/* Columna izquierda */}
        <div className="flex flex-col justify-start items-center min-h-[650px]">


          {/* BLOQUE B: Información de contacto */}
          <div className="space-y-10 text-gray-700 mt-20">
            <div>
              <h3 className="font-semibold text-blue-900">Dirección</h3>
              <p>
                Industria del Vestido 2326,<br />
                Zapopan Industrial Nte., 45130 Guadalajara, Jal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Teléfono</h3>
              <p>+52 33 663 2500</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Correo</h3>
              <p>ventas@omnibandas.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">Horario</h3>
              <p>Lunes a viernes<br />9:00 – 18:00 h</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">WhatsApp</h3>
              <p>+52 1 33 1527 4782</p>
            </div>
          </div>

        </div>

        {/* Columna derecha */}
        <div className="flex flex-col justify-start mt-20">
          <FormularioContacto />
        </div>

      </div>
    </section>
  );
}

