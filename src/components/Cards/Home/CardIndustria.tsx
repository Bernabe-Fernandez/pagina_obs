import { Link } from "react-router-dom"
import type { industriasBase } from "../../../types"


type cardIndustriaProps = {
    industria : industriasBase
}


export default function CardIndustria({industria} :  cardIndustriaProps) {
  return (
    <div className="group relative w-full h-full rounded-xl overflow-hidden cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${industria.img})` }}
        />
        {/* Overlay azul */}
        <div className="absolute inset-0 bg-blue-900/65 transition-all duration-500 group-hover:bg-blue-900/85" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">

            <div className="flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-2">
                 {/* Título */}
                <h2 className="text-2xl font-semibold uppercase mb-4">
                    {industria.titulo}
                </h2>

                {/* Contenido oculto */}
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-36 group-hover:opacity-100">
                
                    <p className="mb-2">
                        {industria.descripcion}
                    </p>

                    <Link
                        to={industria.url}
                        className="bg-white/50 text-white hover:bg-white hover:text-blue-900 px-6 py-2 rounded-lg font-medium inline-block"
                    >
                        Ver Soluciones
                    </Link>

                </div>

            </div>
        </div>
    </div>
  )
}
