
import { useNavigate } from "react-router-dom";


export default function Manual() {

   const navigate = useNavigate();


  return (
    <section className="w-full bg-white pt-20 pb-0 px-6 mt-28">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-40 items-start">

        {/* COLUMNA IZQUIERDA: MANUAL */}
        <div className="w-full flex justify-center translate-x-[40px]">
          <img
            src="/images/catalago/manual/catalogo.jpg"
            alt="manual omnibandas"
            className="w-full max-w-[950px] rounded-none shadow-2xl object-cover mb-40"
            style={{ boxShadow: "0 0 25px rgba(0,0,0,0.25)" }}
          />
        </div>


        {/* COLUMNA DERECHA: TEXTO + BOTONES + BANDA */}
        <div className="w-full flex flex-col items-start mt-24 translate-x-[-60px]">

          <h2 className="text-[#2E6092]  text-[30px] font-bold mb-10 max-w-5xl">
              ¿Buscas la banda transportadora adecuada para tu proceso?
          </h2>

               <p className="text-[#2E6092] text-[20px] leading-relaxed mb-10">
                Consulta nuestro catálogo y habla con un especialista.
               </p>


            {/* BOTON  */}
            <div className="flex flex-col sm:flex-row justify-start gap-6 mb-0">
               <a
                 href="/images/catalago/manual/catalago.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-10 py-2 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white"
                 >
                  Descargar catálogo (PDF)
              </a>


              
               {/* BOTON Y TRASPASO A CONTACTO  */}
                <button
                 onClick={() => {
                 navigate("/contacto#inicio-contacto");
                 window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-10 py-2 bg-white text-blue-800 rounded-full border border-gray-200 shadow-md font-medium text-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white">
                   Solicitar cotización
                 </button>
              </div>



              {/* BANDA ALINEADA  */}
                 <div className="relative w-full h-full">
                <img
                 src="/images/catalago/manual/plano.jpg"
                 alt="banda transportadora"
                 className="w-full max-w-xl object-contain mt-10 scale-120 "
                 />
                  {/* Capa transparente */}
                  <div className="absolute top-0 bottom-0 left-[-40px] right-[-40px] bg-white/60"></div>
           
      
                </div>
             </div>
          </div>
    </section>
  );
}