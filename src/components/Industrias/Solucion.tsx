import { useNavigate } from "react-router-dom";

export default function Solucion() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-20 bg-white mt-60">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO Y TEXTO FUERA DEL RECUADRO */}
        <div className="transform -translate-x-0">
          <h2 className="text-4xl font-bold text-azulobs-500 mb-10">
            SOLUCIONES APLICABLES
          </h2>

          <p className="text-[20px] text-[#2E6092] max-w-3xl mx-auto leading-relaxed -translate-x-60 mb-20">
            Configuraciones y productos comúnmente utilizados en procesos de esta industria.
          </p>
        </div>

        {/* RECUADRO PRINCIPAL CON SOMBRA SUPERIOR */}
        <div className="bg-white rounded-2xl p-12 mt-14 
                  shadow-[0_-15px_25px_-5px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.16)]
                  border border-gray-300">

          <div className="flex gap-10">


            {/* COLUMNA IZQUIERDA (DESCRIPCIONES EN RECUADROS) */}
            <div className="flex flex-col gap-6 w-1/4">

              <div className="bg-white mt-10 text-center rounded-xl px-6 py-2 border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)] transition cursor-pointer">
                <p className="text-[20px] font-semibold text-azulobs-500">
                  Bandas transportadoras
                </p>
              </div>

              <div className="bg-white mt-6 text-center rounded-xl px-6 py-2 border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)] transition cursor-pointer">
                <p className="text-[20px] font-semibold text-azulobs-500">
                  Bandas termosoldables
                </p>
              </div>

              <div className="bg-white mt-6 text-center rounded-xl px-6 py-2 border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)] transition cursor-pointer">
                <p className="text-[20px] font-semibold text-azulobs-500">
                  Bandas modulares
                </p>
              </div>

              <div className="bg-white mt-6 text-center rounded-xl px-6 py-2 border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)] transition cursor-pointer">
                <p className="text-[20px] font-semibold text-azulobs-500">
                  Accesorios técnicos
                </p>
              </div>

            </div>

            {/* COLUMNA DERECHA (IMÁGENES) */}
            <div className="grid grid-cols-4 gap-6 w-3/4">

              <div className="h-[420px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <img
                  src="/images/Industria/soluciones/margen1.jpg"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[420px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <img
                  src="/images/Industria/soluciones/margen2.jpg"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[420px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <img
                  src="/images/Industria/soluciones/margen3.jpg"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[420px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <img
                  src="/images/Industria/soluciones/margen4.jpg"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

          {/* BOTÓN FINAL */}
          <div className="text-right mt-16">
  <button
    onClick={() => navigate("/catalogo")}
    className="
      bg-azulobs-500 
      text-white 
      px-10 
      py-2
      rounded-lg 
      text-[20px] 
      font-semibold 
      shadow-[0_4px_15px_rgba(0,0,0,0.25)]
      transition 
      duration-300
      hover:bg-white 
      hover:text-azulobs-500 
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
      border 
      border-transparent 
    "
  >
    Ver opciones en el catálogo
  </button>
</div>
        </div>

      </div>
    </section>
  );
}
