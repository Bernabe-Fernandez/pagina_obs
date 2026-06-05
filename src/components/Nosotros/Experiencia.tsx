export default function Experiencia() {
  return (
    <>
      {/* TEXTO SUPERIOR */}
      <div className="px-4 sm:px-6">
        <p className="text-[#2E6092] text-center max-w-5xl mx-auto leading-relaxed 
        text-[17px] sm:text-[18px] md:text-[20px] mt-16 sm:mt-20 md:mt-24">
          En Omnibandas somos una empresa 100% mexicana con más de 30 años de experiencia, 
          especializada en la fabricación, suministro e implementación de soluciones en bandas 
          y sistemas de transporte industrial. Trabajamos con un enfoque técnico y preventivo 
          para garantizar procesos confiables y eficientes.
        </p>
      </div>

      {/* SECCIÓN PRINCIPAL */}
      <section className="w-full bg-white py-16 sm:py-20 mt-20 sm:mt-32 md:mt-40">
        <div className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-24 
          grid grid-cols-1 lg:grid-cols-2 
          gap-10 sm:gap-14 lg:gap-4 
          items-start
        ">

          {/* Imagen */}
          <div className="flex items-center justify-center lg:justify-start w-full">
            <img
              src="/images/nosotros/experienciaa.jpg"
              alt="nuestra experiencia"
              className="
                w-full max-w-[350px] sm:max-w-[420px] md:max-w-[500px] 
                rounded-5xl shadow-lg
              "
            />
          </div>

          {/* Contenido */}
          <div className="text-[#2E6092] px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 uppercase">
              Nuestra Experiencia
            </h2>

            <p className="leading-relaxed mb-6 text-[16px] sm:text-[17px] md:text-[18.5px]">
              Contamos con una sólida trayectoria atendiendo a diversas industrias,
              con presencia destacada en las regiones del Bajío y el Pacífico,
              así como atención en distintos puntos de la República Mexicana.
            </p>

            <p className="leading-relaxed mb-6 text-[16px] sm:text-[17px] md:text-[18.5px]">
              Nuestro equipo técnico altamente capacitado realiza visitas continuas
              en planta para:
            </p>

            <ul className="space-y-3 text-[16px] sm:text-[17px] md:text-[18.5px]">
              <li>- Evaluar el desempeño de las bandas</li>
              <li>- Ejecutar mantenimiento preventivo</li>
              <li>- Detectar oportunidades de mejora</li>
              <li>- Reducir paros no programados</li>
            </ul>

            <p className="leading-relaxed mt-6 text-[16px] sm:text-[17px] md:text-[18.5px]">
              Todo con el objetivo de optimizar la operación y asegurar la continuidad productiva.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}




