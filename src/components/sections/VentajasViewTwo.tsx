import type { ventajasTipo } from "../../types";

type VentajasViewTwoProps = {
    ventajas: ventajasTipo[];
}

export default function VentajasViewTwo({ventajas} : VentajasViewTwoProps) {
  return (
    <div className="flex flex-col gap-10">        

        {/* TÍTULO GENERAL */}
        <h2 className="text-3xl font-bold text-center text-[#2E6092]">
            VENTAJAS PRINCIPALES
        </h2>

        {
            ventajas.map((ventaja) => (
                <div className="w-full max-w-6xl mx-auto bg-white shadow-xl border border-gray-200 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10">
                {/* TEXTO IZQUIERDA */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-bold text-[#2E6092] mb-6">
                            {ventaja.titulo}
                        </h3>

                        {ventaja.descripcion && (
                            <p className="text-gray-700 text-lg mb-4">
                                {ventaja.descripcion}
                            </p>
                        )}

                        {ventaja.listaVentajas &&
                            ventaja.listaVentajas.length > 0 && (
                                <ul className="text-gray-700 leading-relaxed text-lg space-y-3">
                                {ventaja.listaVentajas.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                                </ul>
                            )}
                    </div>

                    {/* IMAGEN DERECHA */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={ventaja.img}
                            alt={ventaja.titulo}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            ))
        }
        
    </div>

    
  );
}
