import { useNavigate } from "react-router-dom";

export default function Catal() {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-white pt-20 pb-0 px-6 mt-40 mb-80">

{/* RECUADRO */}
  <div
  className="bg-white shadow-2xl rounded-2xl p-20 pt-10 pb-0 max-w-6xl mx-auto"
  style={{
    boxShadow: "0 -8px 20px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.15)"
  }}
>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-40 items-start mt-28">


        {/* COLUMNA IZQUIERDA: MANUAL */}
        <div className="w-full flex justify-center">
          <img
            src="/images/catalago/manual/catalogo.jpg"
            alt="manual omnibandas"
            className="w-full max-w-md rounded-3xl shadow-lg object-cover mb-40"
             style={{ boxShadow: "0 0 25px rgba(0,0,0,0.25)" }}
          />
        </div>


        {/* COLUMNA DERECHA */}
        <div className="w-full flex flex-col items-start">



          {/* BLOQUE DE TEXTO + BOTONES  */}
          <div className="flex flex-col items-start gap-6 -ml-24">

            <h2 className="text-[#2E6092] text-[30px] font-bold max-w-5xl">
              ¿Buscas la banda transportadora adecuada para tu proceso?
            </h2>

            <p className="text-[#2E6092] text-[20px] leading-relaxed mb-10">
              Consulta nuestro catálogo y habla con un especialista.
            </p>



            {/* BOTONES DEBAJO DEL TEXTO */}
            <div className="flex flex-col justify-start gap-6 mb-10">
              <a
                href="/images/catalago/manual/catalago.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-2 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white"
              >
                Descargar catálogo (PDF)
              </a>


              <button
                onClick={() => {
                  navigate("/contacto#inicio-contacto");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-10 py-2 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white"
              >
                Solicitar cotización
              </button>
            </div>

          </div>  


          {/* BANDA  */}
          <div className=" relative w-full h-full ml-2 ">
            <img
              src="/images/catalago/manual/plano.jpg"
              alt="banda transportadora"
               className="w-full max-w-xl object-contain mt-10 scale-150"
               style={{
               clipPath: "inset(0 30px 0 0)"
               }}
            />


            {/* Capa transparente  */}
            <div className="absolute top-0 bottom-0 left-[3px] right-[-168px] bg-white/60 translate-x-[-110px]"></div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
