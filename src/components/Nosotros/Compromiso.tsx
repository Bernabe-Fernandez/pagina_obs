const IconMision = "/images/nosotros/compromiso/libro.svg";
const IconVision = "/images/nosotros/compromiso/vision.svg";
const IconFilosofia = "/images/nosotros/compromiso/auriculares.svg";

export default function Compromiso() {
  const CompromisoData = [
    {
      id: 1,
      title: "MISIÓN",
      text: "Que las bandas y transportadores marca Omnibandas satisfagan a nuestros clientes, generar valor al mercado nacional, actuando con responsabilidad social y ofreciendo calidad en los productos que ofrecemos.",
      image: "/images/nosotros/compromiso/mision.jpeg",
      icon: IconMision,
    },
    {
      id: 2,
      title: "VISIÓN",
      text: "Ser la marca líder en bandas transportadoras para la industria mexicana, generando valor en cada solución implementada con un proceso de innovación continua.",
      image: "/images/nosotros/compromiso/vision.jpg",
      icon: IconVision,
    },
    {
      id: 3,
      title: "FILOSOFÍA",
      text: "Resolver de forma rápida y eficiente los problemas de producción de nuestros clientes, garantizando calidad, la continuidad operativa y maximizando la eficiencia de sus procesos industriales.",
      image: "/images/nosotros/compromiso/filosofia.jpg",
      icon: IconFilosofia,
    },
  ];

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2E6092] tracking-wide">
          NUESTRO COMPROMISO
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-center text-[#2E6092] max-w-5xl mx-auto mt-8 sm:mt-12 mb-12 sm:mb-16 leading-relaxed 
        text-[17px] sm:text-[19px] md:text-[22px]">
          Trabajamos bajo un compromiso constante con la calidad, la seguridad y la continuidad operativa, 
          aportando valor a nuestros clientes, socios comerciales y al desarrollo de la industria nacional.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-6">
          {CompromisoData.map((item) => (
            <div
              key={item.id}
              className="
                bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 relative pb-10
                md:h-[580px] lg:h-auto
              "
            >

              {/* IMAGEN */}
              <div className="w-full h-56 sm:h-64 md:h-[240px] lg:h-[240px] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />

                {/* ICONO FLOTANTE */}
                <div className="absolute left-4 sm:left-6 -bottom-14 sm:-bottom-16 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 z-10">
                  <img
                    src={item.icon}
                    alt="icono"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* TEXTO */}
              <div className="text-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8">

                {/* TÍTULO */}
                <h3 className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-[#2E6092] leading-relaxed 
                text-[20px] sm:text-[20px] md:text-[13.5px] lg:text-[20px] md:leading-snug">
                  {item.text}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



