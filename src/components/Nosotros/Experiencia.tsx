
export default function Experiencia() {
  return (
        <>
            <div>
                <p className="text-[#2E6092] text-center max-w-5xl mx-auto leading-relaxed text-[20px] mt-24">
                En Omnibandas somos una empresa 100% mexicana con más de 30 años de experiencia, especializada en la fabricación, suministro e implementación de soluciones en bandas y sistemas de transporte industrial. Trabajamos con un enfoque técnico y preventivo para garantizar procesos confiables y eficientes.
                </p>
            </div>
            
                <section className= "w-full bg-white py-20 mt-40">
                    <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-4 items-start">

                        {/* Imagen */}
                        <div className="flex items-center justify-start  w-full">
                            <img 
                                src="/images/nosotros/experienciaa.jpg"  
                                alt="nuestra experiencia" 
                                className="w-full max-w-[500px] rounded-5xl shadow-lg"

                            />
                        </div>

                        {/* Contenido */}
                        <div className="text-[#2E6092]">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase">
                                Nuestra Experiencia
                            </h2>

                              <p className="leading-relaxed mb-6 text-[18.5px]">
                                Contamos con una sólida trayectoria atendiendo a diversas industrias,
                                con presencia destacada en las regiones del Bajío y el Pacífico,
                                así como atención en distintos puntos de la República Mexicana.
                            </p>

                            <p className="leading-relaxed mb-6 text-[18.5px]">
                                Nuestro equipo técnico altamente capacitado realiza visitas continuas
                                en planta para:
                            </p>

                            <ul className="space-y-3 text-[18.5px]">
                                <li>- Evaluar el desempeño de las bandas</li>
                                <li>- Ejecutar mantenimiento preventivo</li>
                                <li>- Detectar oportunidades de mejora</li>
                                <li>- Reducir paros no programados</li>
                            </ul>

                            <p className="leading-relaxed mt-6 text-[18.5px]">
                                Todo con el objetivo de optimizar la operación y asegurar la continuidad productiva.
                            </p>
                        </div>
                    </div>
                </section>
               
               <div>
    
    </div>
            </> 
                    
  )
};



