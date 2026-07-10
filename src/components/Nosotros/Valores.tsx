//importación de iconos//
import IconHonestidad from "/images/nosotros/valores/honestidad.svg";
import IconEmpatia from "/images/nosotros/valores/empatia.svg";
import IconCompanierismo from "/images/nosotros/valores/companierismo.svg";
import IconResponsabilidad from "/images/nosotros/valores/responsabilidad.svg";
import IconPerseverancia from "/images/nosotros/valores/perseverancia.svg";
import IconComunicacion from "/images/nosotros/valores/comunicacion.svg";
import IconRespeto from "/images/nosotros/valores/respeto.svg";
import IconUrgencia from "/images/nosotros/valores/sentido de urgencia.svg";

//importación de imágenes de fondo//
import BgHonestidad from "/images/nosotros/valores/honestidad.webp";
import BgEmpatia from "/images/nosotros/valores/empatia.webp";
import BgCompanierismo from "/images/nosotros/valores/compañerismo.webp";
import BgResponsabilidad from "/images/nosotros/valores/responsabilidad.webp";
import BgPerseverancia from "/images/nosotros/valores/perseverancia.webp";
import BgComunicacion from "/images/nosotros/valores/comunicacion.webp";
import BgRespeto from "/images/nosotros/valores/respeto.webp";
import BgUrgencia from "/images/nosotros/valores/sentido de urgencia.webp";

export default function Valores() {
  const valores = [
    { title: "HONESTIDAD", icon: IconHonestidad, bg: BgHonestidad, description: "Actuamos con transparencia y claridad en cada recomendación." },
    { title: "EMPATÍA", icon: IconEmpatia, bg: BgEmpatia, description: "Comprendemos las necesidades de cada cliente y su operación." },
    { title: "COMPAÑERISMO", icon: IconCompanierismo, bg: BgCompanierismo, description: "Trabajamos en equipo para lograr mejores resultados." },
    { title: "RESPONSABILIDAD", icon: IconResponsabilidad, bg: BgResponsabilidad, description: "Cumplimos nuestros compromisos con seriedad y ética." },
    { title: "PERSEVERANCIA", icon: IconPerseverancia, bg: BgPerseverancia, description: "Buscamos soluciones hasta lograr el resultado esperado." },
    { title: "COMUNICACIÓN", icon: IconComunicacion, bg: BgComunicacion, description: "Mantenemos una comunicación clara y oportuna." },
    { title: "RESPETO", icon: IconRespeto, bg: BgRespeto, description: "Actuamos con profesionalismo en cada relación." },
    { title: "SENTIDO DE URGENCIA", icon: IconUrgencia, bg: BgUrgencia, description: "Respondemos con rapidez ante situaciones críticas." },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 mt-24">
      <div className="max-w-6xl mx-auto ">

        {/* TÍTULO */}
        <h2 className="text-center text-10xl sm:text-3xl md:text-4xl font-bold text-blue-900 tracking-wide">
          NUESTROS VALORES
        </h2>


         
        {/* GRID */}
        <div
          className="
               grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                gap-6
                sm:gap-6
                md:gap-x-4 md:gap-y-16
                lg:gap-x-10 lg:gap-y-24
                 mt-12"
        >
          {valores.map((item, index) => (
            <div
              key={index}
              className={`
                relative aspect-square rounded-xl overflow-hidden group cursor-pointer
                ${index >= 6 ? "md:col-span-1 md:mx-auto" : ""}
                md:h-[240px] lg:h-[260px]
              `}
            >
              {/* Fondo azul + imagen + difuminado azul */}
              <div className="absolute inset-0">
                <img
                  src={item.bg}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-[#4da3ff]/70"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a4f7a]/55 to-[#1e3a5f]/85"></div>
              </div>

              {/* Ícono grande + título */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-36 h-36 md:w-20 md:h-20 lg:w-36 lg:h-36"
                />
                <h3 className="text-white text-lg md:text-[13px] lg:text-lg font-semibold tracking-wide text-center">
                  {item.title}
                </h3>
              </div>

              {/* Ícono grande + título + descripción (hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-4 text-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 mb-4 md:w-18 md:h-18 lg:w-24 lg:h-24"
                />
                <h3 className="text-white text-lg md:text-[13px] lg:text-lg font-semibold tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[12px] lg:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


