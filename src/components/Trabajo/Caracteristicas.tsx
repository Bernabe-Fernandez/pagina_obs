import { caracteriticas } from '../../data/caracteristicas'
import Caracteristica from '../Cards/Trabajo/Caracteristica'

export default function Caracteristicas() {
  return (
    <section className="mt-20 md:mt-28 lg:mt-32">

        {/* Texto introductorio */}
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
            <p className="
                text-blue-900
                text-center
                leading-relaxed
                text-base
                md:text-lg
                lg:text-xl
                font-medium
                max-w-6xl
                mx-auto
            ">
                En Omnibandas creemos que cada área es parte fundamental del funcionamiento 
                de la empresa. Nuestro equipo está conformado por personas con distintos perfiles, 
                experiencias y responsabilidades, que trabajan en conjunto para ofrecer 
                soluciones confiables a nuestros clientes.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="
                flex
                flex-col
                lg:flex-row
                gap-10
                md:gap-14
                lg:gap-16
                items-stretch
            ">

                {/* Imagen */}
                <div className="
                    w-full
                    lg:w-2/5
                    flex
                ">
                    <img 
                        src="/images/trabajo/caracteristicas.jpg" 
                        alt="Equipo de trabajo Omnibandas"
                        className="
                            w-full
                            h-[320px]
                            md:h-[420px]
                            lg:h-auto
                            object-cover
                            rounded-2xl
                            shadow-lg
                        "
                    />
                </div>

                {/* Cards */}
                <div className="
                    w-full
                    lg:w-3/5
                    flex
                    flex-col
                    gap-4
                    md:gap-5
                    lg:gap-6
                    justify-between
                ">

                    {caracteriticas.map((caracteristica, index) => (
                        <Caracteristica 
                            key={index}
                            caracteristica={caracteristica}
                        />
                    ))}

                </div>

            </div>

        </div>

    </section>
  )
}