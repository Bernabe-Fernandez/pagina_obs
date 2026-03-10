
//importacion de iconos//
import IconHonestidad from "/images/nosotros/valores/honestidad.svg";
import IconEmpatia from "/images/nosotros/valores/empatia.svg";
import IconCompanierismo from "/images/nosotros/valores/companierismo.svg";
import IconResponsabilidad from "/images/nosotros/valores/responsabilidad.svg";
import IconPerseverancia from "/images/nosotros/valores/perseverancia.svg";
import IconComunicacion from "/images/nosotros/valores/comunicacion.svg";
import IconRespeto from "/images/nosotros/valores/respeto.svg";
import IconUrgencia from "/images/nosotros/valores/sentido de urgencia.svg";

//importacion de imagenes de fonsdo//
import BgHonestidad from "/images/nosotros/valores/honestidad.jpg";
import BgEmpatia from "/images/nosotros/valores/empatia.jpg";
import BgCompanierismo from "/images/nosotros/valores/companierismo.jpg";
import BgResponsabilidad from "/images/nosotros/valores/responsabilidad.jpg";
import BgPerseverancia from "/images/nosotros/valores/perseverancia.jpg";
import BgComunicacion from "/images/nosotros/valores/comunicacion.jpg";
import BgRespeto from "/images/nosotros/valores/respeto.jpg";
import BgUrgencia from "/images/nosotros/valores/sentido de urgencia.jpg";

export default function Valores() {

  const valores = [
    { title: "HONESTIDAD", icon: IconHonestidad, bg: BgHonestidad, description: "Actuamos con transparencia y claridad en cada recomendación. " },
    { title: "EMPATÍA", icon: IconEmpatia, bg: BgEmpatia, description: "Comprendemos las necesidades de cada cliente y su operación. " },
    { title: "COMPAÑERISMO", icon: IconCompanierismo, bg: BgCompanierismo, description: "Trabajamos en equipo para lograr mejores resultados. " },
    { title: "RESPONSABILIDAD", icon: IconResponsabilidad, bg: BgResponsabilidad, description: "Cumplimos nuestros compromisos con seriedad y ética." },
    { title: "PERSEVERANCIA", icon: IconPerseverancia, bg: BgPerseverancia, description: "Buscamos soluciones hasta lograr el resultado esperado. " },
    { title: "COMUNICACIÓN", icon: IconComunicacion, bg: BgComunicacion, description: "Mantenemos una comunicación clara y oportuna. " },
    { title: "RESPETO", icon: IconRespeto, bg: BgRespeto, description: "Actuamos con profesionalismo en cada relación." },
    { title: "SENTIDO DE URGENCIA", icon: IconUrgencia, bg: BgUrgencia, description: "Respondemos con rapidez ante situaciones críticas. " },
  ];

  return (
  <section className="w-full bg-white py-16 px-6 mt-24">

    <div className="max-w-6xl mx-auto">

      <h2 className="text-center text-3xl font-bold text-blue-900 tracking-wide">
        NUESTROS VALORES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">

        {valores.map((item, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
          >

            {/* Fondo azul + imagen + difuminado azul */}
            <div className="absolute inset-0">
              <img
                src={item.bg}
                alt={item.title}
                className="w-full h-full object-cover opacity-75"
              />

              <div className="absolute inset-0 bg-[#4da3ff]/70"></div>

              <div className="absolute inset-0 bg-gradient-to-b 
                from-transparent 
                via-[#2a4f7a]/55
                to-[#1e3a5f]/85">
              </div>
            </div>

            {/* Ícono grande + título */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
              <img src={item.icon} alt={item.title} className="w-36 h-36" />
              <h3 className="text-white text-lg font-semibold tracking-wide text-center">
                {item.title}
              </h3>
            </div>

            {/* Ícono grande + título + descripción (hover) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4 text-center">
              <img src={item.icon} alt={item.title} className="w-24 h-24 mb-4" />
              <h3 className="text-white text-lg font-semibold tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">
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