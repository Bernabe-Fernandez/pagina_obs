const IconMision = "/images/nosotros/compromiso/libro.svg";        // libro
const IconVision = "/images/nosotros/compromiso/vision.svg";       // cohete
const IconFilosofia = "/images/nosotros/compromiso/auriculares.svg"; // auriculares

export default function Compromiso() {
  const CompromisoData = [
    {
      id: 1,
      title: "MISIÓN",
      text: "Que las bandas y transportadores marca Omnibandas satisfagan a nuestros clientes y generen valor al mercado nacional, actuando con responsabilidad social.",
      image: "/images/nosotros/compromiso/mision.jpeg",
      icon: IconMision,
    },
    {
      id: 2,
      title: "VISIÓN",
      text: "Ser la marca líder en bandas transportadoras para la industria mexicana, generando valor en cada solución implementada.",
      image: "/images/nosotros/compromiso/vision.jpeg",
      icon: IconVision,
    },
    {
      id: 3,
      title: "FILOSOFÍA",
      text: "Resolver de forma rápida y eficiente los problemas de producción de nuestros clientes, garantizando la continuidad operativa y maximizando la eficiencia de sus procesos industriales.",
      image: "/images/nosotros/compromiso/filosofia.jpeg",
      icon: IconFilosofia,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-3xl font-bold text-blue-900 tracking-wide">
          NUESTRO COMPROMISO
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mt-6 mb-16 leading-relaxed">
          Trabajamos bajo un compromiso constante con la calidad, la seguridad y la continuidad operativa, aportando valor a nuestros clientes, socios comerciales y al desarrollo de la industria nacional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CompromisoData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 relative pb-10"
            >

              {/* Imagen */}
              <div className="w-full h-80 relative">
               <img
                 src={item.image}
                 alt={item.title}
                 className="w-full h-full object-cover rounded-t-2xl"
                />


              {/* ICONO FLOTANTE */}
              <div className="absolute left-6 -bottom-16 w-40 h-40 z-20">
               <img
                 src={item.icon}
                 alt="icono"
                 className="w-full h-full object-contain"
               />
            </div>
          </div>

              {/* Texto */}
              <div className="text-center px-6 pt-24 pb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
