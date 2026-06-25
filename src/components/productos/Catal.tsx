import { useNavigate } from "react-router-dom";

export default function Catal() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white pt-10 lg:pt-20 pb-0 px-4 md:px-6 mt-10 md:mt-20 lg:mt-40 mb-20 md:mb-40 lg:mb-80">

      {/* RECUADRO */}
      <div
        className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 lg:p-20 pt-6 md:pt-8 lg:pt-10 pb-0 max-w-6xl mx-auto"
        style={{
          boxShadow:
            "0 -8px 20px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-40 items-center lg:items-start mt-4 md:mt-10 lg:mt-28">

          {/* COLUMNA IZQUIERDA */}
          <div className="w-full flex justify-center">
            <img
              src="/images/catalago/manual/catalogo.jpg"
              alt="manual omnibandas"
              className="w-full max-w-[220px] md:max-w-[320px] lg:max-w-md rounded-3xl shadow-lg object-cover mb-8 md:mb-12 lg:mb-40"
              style={{
                boxShadow: "0 0 25px rgba(0,0,0,0.25)",
              }}
            />
          </div>

          {/* COLUMNA DERECHA */}
          <div className="w-full flex flex-col items-start">

            {/* TEXTO + BOTONES */}
            <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 ml-0 lg:-ml-24 text-center lg:text-left">

              <h2 className="text-[#2E6092] text-[28px] md:text-[32px] lg:text-[30px] font-bold max-w-5xl">
                ¿Buscas la banda transportadora adecuada para tu proceso?
              </h2>

              <p className="text-[#2E6092] text-base md:text-lg lg:text-[20px] leading-relaxed mb-6 lg:mb-10">
                Consulta nuestro catálogo y habla con un especialista.
              </p>

              {/* BOTONES */}
              <div className="flex flex-col justify-start gap-4 md:gap-6 mb-6 lg:mb-10 w-full md:w-auto">

                <a
                  href="/images/catalago/manual/catalago.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-10 py-2 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white text-center"
                >
                  Descargar catálogo (PDF)
                </a>

                <button
                  onClick={() => {
                    navigate("/contacto#inicio-contacto");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="w-full md:w-auto px-10 py-2 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white"
                >
                  Solicitar cotización
                </button>

              </div>
            </div>

            {/* BANDA */}
            <div className="relative w-full h-full ml-0 md:ml-1 lg:-translate-x-8 lg:overflow-visible">

              <img
                src="/images/catalago/manual/plano.jpg"
                alt="banda transportadora"
                className="w-full max-w-xs md:max-w-lg lg:max-w-xl object-contain mt-4 md:mt-6 lg:mt-10 scale-100 md:scale-110 lg:scale-150 mx-auto lg:mx-0"
              />

              {/* CAPA TRANSPARENTE SOLO EN DESKTOP */}
              <div
                className="
                  hidden
                  lg:block
                  absolute
                  top-0
                  bottom-0
                  left-[3px]
                  right-[-190px]
                  bg-white/60
                  translate-x-[-100px]
                "
              ></div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}