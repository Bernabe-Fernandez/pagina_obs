import type { caracteristicaType } from "../../../types";

type caracteristicaProps = {
    caracteristica: caracteristicaType
}

export default function Caracteristica({ caracteristica }: caracteristicaProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-md p-4 transition hover:shadow-xl">

        <h2 className="text-blue-900 font-bold text-lg mb-4">
            {caracteristica.titulo}
        </h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {caracteristica.contenido}
        </p>

    </article>
  )
}