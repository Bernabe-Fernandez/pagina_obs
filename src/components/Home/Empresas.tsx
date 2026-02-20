

export default function Empresas() {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24 lg:my-28 text-center">
      
      {/* TÍTULO */}
      <h3 className='uppercase text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-4 md:mb-6'>
        Ellos ya confían en nosotros
      </h3>

      {/* DESCRIPCIÓN */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl">
        Trabajamos con marcas reconocidas por su calidad, innovación y cumplimiento de estándares industriales, lo que nos permite ofrecer soluciones confiables y de alto desempeño para cada aplicación.
      </p>

      {/* IMAGEN */}
      <div className="w-full flex justify-center">
        <img 
          src="/images/home/empresas.png" 
          alt="empresas-que-confian-en-nosotros"
          className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl object-contain"
        />
      </div>

    </div>
  )
}