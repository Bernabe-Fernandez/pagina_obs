import CardIndustria from '../Cards/Home/CardIndustria'
import { industriasData } from '../../data/industrias'
import { Link } from 'react-router-dom'

export default function Industrias() {


  return (
    <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:mx-28 lg:mx-64">

            {/* HEADER */}
            <div className='w-full flex flex-col justify-center items-center text-center'>
                <h3 className='uppercase text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-4 md:mb-6'>
                    Industrias
                </h3>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl">
                    Experiencia en múltiples sectores industriales y procesos productivos.
                </p>
            </div>

            {/* GRID RESPONSIVE */}
            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-4 md:gap-6 
                auto-rows-[200px] 
                md:auto-rows-[225px] 
                grid-flow-dense
            ">
                {industriasData.map((industria, index) => (
                    <div
                        key={index}
                        className={`
                            ${industria.altura === "ancha" ? "lg:col-span-2" : ""}
                            ${industria.altura === "alta" ? "lg:row-span-2" : ""}
                        `}
                    >
                        <CardIndustria industria={industria} />
                    </div>
                ))}
            </div>

            {/* BOTÓN */}
            <div className='w-full flex justify-center md:justify-end mt-8'>
                <Link
                    to={"/contacto"}
                    className='
                        px-6 py-3 
                        bg-white text-blue-800 
                        rounded-3xl shadow-lg 
                        border border-gray-200 
                        hover:bg-blue-900 hover:text-white 
                        transition-all duration-300
                    '
                >
                    Solicitar Asesoría
                </Link>
            </div>

        </div>
    </>
  )
}
