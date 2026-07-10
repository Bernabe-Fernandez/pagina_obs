import { useNavigate } from "react-router-dom";

export default function Manual() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white pt-20 pb-0 px-6 mt-28">
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 lg:grid-cols-2 
          gap-10 lg:gap-40 
          items-start
        "
      >
        {/* COLUMNA IZQUIERDA: MANUAL */}
        <div className="w-full flex justify-center lg:translate-x-[40px]">
          <img
            src="/images/catalago/manual/catalago.webp"
            alt="manual omnibandas"
            className="
              w-full max-w-[950px] 
              rounded-none shadow-2xl object-cover 
              mb-10 sm:mb-20 lg:mb-40
            "
            style={{ boxShadow: "0 0 25px rgba(0,0,0,0.25)" }}
          />
        </div>

        {/* COLUMNA DERECHA: TEXTO + BOTONES + BANDA */}
        <div
          className="
            w-full flex flex-col items-center lg:items-start 
            mt-10 sm:mt-16 lg:mt-24 
            lg:translate-x-[-60px]
            text-center lg:text-left
          "
        >
          <h2
            className="
              text-[#2E6092] 
              text-[22px] sm:text-[26px] lg:text-[30px] 
              font-bold mb-6 sm:mb-8 lg:mb-10 max-w-5xl
            "
          >
            ¿Buscas la banda transportadora adecuada para tu proceso?
          </h2>

          <p
            className="
              text-[#2E6092] 
              text-[16px] sm:text-[18px] lg:text-[20px] 
              leading-relaxed mb-8 sm:mb-10
              max-w-md sm:max-w-lg lg:max-w-none
            "
          >
            Consulta nuestro catálogo y habla con un especialista.
          </p>

          {/* BOTONES */}
          <div
            className="
              flex flex-col sm:flex-row justify-center lg:justify-start 
              gap-4 sm:gap-6 mb-6 lg:mb-0
            "
          >
            <a
              href="/images/catalago/manual/catalago.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 sm:px-10 py-2 
                bg-white text-blue-800 
                rounded-full border border-gray-200 shadow-md 
                font-medium text-sm 
                transition-colors duration-200 
                hover:bg-blue-900 hover:text-white
              "
            >
              Descargar catálogo (PDF)
            </a>

            <button
              onClick={() => {
                navigate("/contacto#inicio-contacto");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="
                px-8 sm:px-10 py-2 
                bg-white text-blue-800 
                rounded-full border border-gray-200 shadow-md 
                font-medium text-sm 
                transition-colors duration-200 
                hover:bg-blue-900 hover:text-white
              "
            >
              Solicitar cotización
            </button>
          </div>

          {/* BANDA ALINEADA */}
          <div className="relative w-full h-full mt-8 sm:mt-10 lg:mt-10">
            <img
              src="/images/catalago/manual/plano.jpg"
              alt="banda transportadora"
              className="
                w-full max-w-[400px] sm:max-w-[500px] lg:max-w-xl 
                object-contain mx-auto lg:mx-0 scale-100 lg:scale-120
              "
            />
            <div className="absolute top-0 bottom-0 left-[-20px] right-[-20px] lg:left-[-40px] lg:right-[-40px] bg-white/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
