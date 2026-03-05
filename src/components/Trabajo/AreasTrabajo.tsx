import { vacantes } from "../../data/vacantes";
import VacantesCard from "../Cards/Trabajo/VacantesCard";


export default function AreasTrabajo() {
  return (
     <section className="mt-20 md:mt-32">

        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">

            {/* Título */}
            <h1 className="
                text-blue-800 
                uppercase 
                font-bold 
                text-lg 
                md:text-xl 
                lg:w-1/2
            ">
                Constantemente estamos en búsqueda de talento para diferentes áreas dentro de la empresa.
            </h1>

            {/* Vacantes */}
            <div className="
                grid
                grid-cols-1
                md:grid-cols-5
                gap-6
            ">
                {
                    vacantes.map((vacante, index) => (
                        <VacantesCard
                            key={index}
                            vacante={vacante}
                        />
                    ))
                }
            </div>

            {/* Texto inferior */}
            <div className="w-full flex justify-center lg:justify-end mt-6">
                <p className="
                    text-blue-800 
                    text-base 
                    md:text-lg 
                    text-center 
                    lg:text-right 
                    max-w-xl
                ">
                    Si tu perfil no coincide exactamente con una vacante activa,
                    también puedes enviarnos tu información.
                </p>
            </div>

        </div>

    </section>
  )
}
