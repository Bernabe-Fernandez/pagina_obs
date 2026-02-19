

export default function BeneficioServicios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-48 py-20">
  
      {/* LADO IZQUIERDO */}
      <div>
        <h2 className="uppercase text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
          Beneficios operativos para tu línea de producción
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-xl">
          Aseguramos la continuidad operativa de las líneas de producción mediante 
          atención técnica, servicios preventivos y respuesta prioritaria.
        </p>

        <ul className="space-y-8">
          <li className="flex items-center gap-5">
              <img 
                src="/images/iconos/levantamiento.svg" 
                alt="levantamiento-icono" 
                className="w-16 h-16 object-contain"
              />
            <p className="text-gray-700">
              Levantamientos técnicos predictivos y preventivos sin costo en sitio.
            </p>
          </li>

          <li className="flex items-center gap-5">
            <div className="bg-blue-100 w-20 h-20 flex items-center justify-center rounded-full">
              <img 
                src="/images/iconos/atencion.svg" 
                alt="atencion-icono" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-gray-700">
              Atención prioritaria a emergencias, respuesta menor a 6 horas en la ZMG y Bajío.
            </p>
          </li>

          <li className="flex items-center gap-5">
            <div className="bg-blue-100 w-20 h-20 flex items-center justify-center rounded-full">
              <img 
                src="/images/iconos/ingenieria.svg" 
                alt="ingenieria-icono" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-gray-700">
              Ingeniería de aplicación y monitoreo de bandas transportadoras.
            </p>
          </li>

          <li className="flex items-center gap-5">
            <div className="bg-blue-100 w-20 h-20 flex items-center justify-center rounded-full">
              <img 
                src="/images/iconos/capacitacion.svg" 
                alt="capacitacion-icono" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-gray-700">
              Capacitación técnica al personal operativo y opciones comerciales flexibles.
            </p>
          </li>
        </ul>
      </div>

      {/* LADO DERECHO */}
      <div className="flex justify-center items-center">
        <img 
          src="/images/home/servicios.jpg" 
          alt="nuestros-servicios" 
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

    </div>
  )
}
