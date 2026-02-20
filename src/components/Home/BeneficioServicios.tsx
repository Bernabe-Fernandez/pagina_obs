

export default function BeneficioServicios() {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-20 my-20 bg-red-400">
  
    //   {/* LADO IZQUIERDO */}
    //   <div className="">
    //     <h2 className="uppercase text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
    //       Beneficios operativos para tu línea de producción
    //     </h2>

    //     <p className="text-lg text-gray-600 mb-10 max-w-xl">
    //       Aseguramos la continuidad operativa de las líneas de producción mediante 
    //       atención técnica, servicios preventivos y respuesta prioritaria.
    //     </p>

    //     <ul className="space-y-8">
    //       <li className="flex items-center gap-5">
    //           <img 
    //             src="/images/iconos/levantamiento.svg" 
    //             alt="levantamiento-icono" 
    //             className="w-16 h-16 object-contain"
    //           />
    //           <p className="text-gray-700">
    //             Levantamientos técnicos predictivos y preventivos sin costo en sitio.
    //           </p>
    //       </li>

    //       <li className="flex items-center gap-5">          
    //         <img 
    //           src="/images/iconos/atencion.svg" 
    //           alt="atencion-icono" 
    //           className="w-16 h-16 object-contain"
    //         />
    //         <p className="text-gray-700">
    //           Atención prioritaria a emergencias, respuesta menor a 6 horas en la ZMG y Bajío.
    //         </p>
    //       </li>

    //       <li className="flex items-center gap-5">
    //         <img 
    //           src="/images/iconos/ingenieria.svg" 
    //           alt="ingenieria-icono" 
    //           className="w-16 h-16 object-contain"
    //         />
    //         <p className="text-gray-700">
    //           Ingeniería de aplicación y monitoreo de bandas transportadoras.
    //         </p>
    //       </li>

    //       <li className="flex items-center gap-5">
    //         <img 
    //           src="/images/iconos/capacitacion.svg" 
    //           alt="capacitacion-icono" 
    //           className="w-16 h-16 object-contain"
    //         />
    //         <p className="text-gray-700">
    //           Capacitación técnica al personal operativo y opciones comerciales flexibles.
    //         </p>
    //       </li>
    //     </ul>
    //   </div>

    //   {/* LADO DERECHO */}
    //   <div className="flex justify-center items-center">
    //     <img 
    //       src="/images/home/servicios.jpg" 
    //       alt="nuestros-servicios" 
    //       className="w-full max-w-md rounded-2xl shadow-lg"
    //     />
    //   </div>

    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12 md:py-20 my-10 md:my-20 mx-4 sm:mx-10 lg:mx-48">

      {/* LADO IZQUIERDO */}
      <div>
        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-4 md:mb-6 text-center md:text-left">
          Beneficios operativos para tu línea de producción
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 text-center md:text-left">
          Aseguramos la continuidad operativa de las líneas de producción mediante 
          atención técnica, servicios preventivos y respuesta prioritaria.
        </p>

        <ul className="space-y-6 md:space-y-8">
          <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <img 
              src="/images/iconos/levantamiento.svg" 
              alt="levantamiento-icono" 
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Levantamientos técnicos predictivos y preventivos sin costo en sitio.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <img 
              src="/images/iconos/atencion.svg" 
              alt="atencion-icono" 
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Atención prioritaria a emergencias, respuesta menor a 6 horas en la ZMG y Bajío.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <img 
              src="/images/iconos/ingenieria.svg" 
              alt="ingenieria-icono" 
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Ingeniería de aplicación y monitoreo de bandas transportadoras.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <img 
              src="/images/iconos/capacitacion.svg" 
              alt="capacitacion-icono" 
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Capacitación técnica al personal operativo y opciones comerciales flexibles.
            </p>
          </li>
        </ul>
      </div>

      {/* LADO DERECHO */}
      <div className="flex justify-center items-center mt-10 md:mt-0">
        <img 
          src="/images/home/servicios.jpg" 
          alt="nuestros-servicios" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg"
        />
      </div>

    </div>
  )
}
