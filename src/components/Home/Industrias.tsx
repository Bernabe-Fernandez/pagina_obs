import CardIndustria from '../Cards/Home/CardIndustria'
import { industriasData } from '../../data/industrias'
import { Link } from 'react-router-dom'

export default function Industrias() {


  return (
    <>
        <div className="max-w-6xl mx-auto px-6 my-36">
            <div className='w-full flex flex-col justify-center items-center'>
                <h3 className='uppercase text-3xl md:text-4xl font-semibold text-blue-900 mb-6 text-center'>Industrias</h3>
                <p className="text-xl text-gray-600 mb-10 w-full text-center">
                    Experiencia en múltiples sectores industriales y procesos productivos.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2 auto-rows-[225px] grid-flow-dense">
                {industriasData.map((industria, index) => (
                    <div
                        key={index}
                        className={`
                            ${industria.altura === "ancha" ? "col-span-2" : ""}
                            ${industria.altura === "alta" ? "row-span-2" : ""}
                        `}
                    >
                        <CardIndustria industria={industria} />
                    </div>
                ))}

            </div>
            <div className='w-full flex justify-end mt-4'>
                <Link
                    to={"/contacto"}
                    className='p-3 bg-white text-blue-800 rounded-3xl shadow-lg border border-gray-200 hover:bg-blue-900/80 hover:text-white'
                >
                    Solicitar Asesoria
                </Link>
            </div>
        </div>
    </>
  )
}
