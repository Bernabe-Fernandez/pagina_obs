import type { vacanteCardBase } from "../../../types"


type VacantesCardProps = {
    vacante : vacanteCardBase
}


export default function VacantesCard({vacante}: VacantesCardProps) {
    return (
        <div
            className="
                w-full
                rounded-xl
                overflow-hidden
                bg-white
                shadow-md
                hover:shadow-lg
                transition
                flex
                flex-col
                group
            "
        >
            {/* Imagen */}
            <div className="w-full aspect-[4/4.3] overflow-hidden">
                <img
                    src={vacante.image}
                    alt={vacante.alt}
                    className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                    "
                />
            </div>

            {/* Texto */}
            <div
                className="
                    flex
                    items-center
                    justify-center
                    text-center
                    px-3
                    py-3
                    md:px-4
                    md:py-4
                "
            >
                <p
                    className="
                        text-blue-800
                        font-semibold
                        text-sm
                        sm:text-base
                        lg:text-sm
                        xl:text-base
                        leading-snug
                    "
                >
                    {vacante.titulo}
                </p>
            </div>
        </div>
    )
}
