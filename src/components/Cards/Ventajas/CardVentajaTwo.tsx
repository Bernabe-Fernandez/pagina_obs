

export default function CardVentajaTwo() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-xl border border-gray-200 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10">
          {/* TEXTO IZQUIERDA */}
            <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-[#2E6092] mb-6">
                    {ventajas[0].titulo}
                </h3>

                {ventajas[0].descripcion && (
                    <p className="text-gray-700 text-lg mb-4">
                        {ventajas[0].descripcion}
                    </p>
                )}

                {ventajas[0].listaVentajas &&
                    ventajas[0].listaVentajas.length > 0 && (
                        <ul className="text-gray-700 leading-relaxed text-lg space-y-3">
                        {ventajas[0].listaVentajas.map((item, index) => (
                            <li key={index}>• {item}</li>
                        ))}
                        </ul>
                    )}
            </div>

            {/* IMAGEN DERECHA */}
            <div className="w-full md:w-1/2">
                <img
                    src={ventajas[0].img}
                    alt={ventajas[0].titulo}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>
        </div>
  )
}
