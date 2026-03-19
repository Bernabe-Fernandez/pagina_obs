
export default function ContactInfoAndForm() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">

        {/* Columna izquierda */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            ¿BUSCAS INFORMACIÓN O ASESORÍA TÉCNICA?
          </h2>

          <p className="text-gray-700 mb-8">
            Nuestro equipo está disponible para apoyarte según los requerimientos de tu proceso.
          </p>

          <div className="space-y-6 text-gray-700">

            <div>
              <h3 className="font-semibold text-blue-900">Dirección</h3>
              <p>Industria del Vestido 2326,<br />Zapopan Industrial Nte., 45130 Guadalajara, Jal.</p>
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

        {/* Columna derecha: Formulario */}
        <div>
          
        </div>

      </div>
    </section>
  );
}