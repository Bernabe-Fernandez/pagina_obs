const IconMision = "/images/nosotros/compromiso/mision.svg";
const IconVision = "/images/nosotros/compromiso/vision.svg";
const IconFilosofia = "/images/nosotros/compromiso/filosofia.svg";

export default function Compromiso() {
  const CompromisoData = [
  {
    id: 1,
    title: "MISIÓN",
    text: "...",
    image: "/images/nosotros/compromiso/mision.jpeg",
    icon: IconMision,
  },
  {
    id: 2,
    title: "VISIÓN",
    text: "...",
    image: "/images/nosotros/compromiso/vision.jpeg",
    icon: IconVision,
  },
  {
    id: 3,
    title: "FILOSOFÍA",
    text: "...",
    image: "/images/nosotros/compromiso/filosofia.jpeg",
    icon: IconFilosofia,
  },
];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

    {/* Título */}
    <h2 className="text-center text-3xl font-bold text-blue-900 tracking-wide">
      NUESTRO COMPROMISO
    </h2>

    {/* Párrafo introductorio */}
    <p className="text-center text-gray-700 max-w-3xl mx-auto mt-6 mb-16 leading-relaxed">
      Trabajamos bajo un compromiso constante con la calidad, la seguridad y la continuidad operativa, aportando valor a nuestros clientes, socios comerciales y al desarrollo de la industria nacional.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {CompromisoData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >

          {/* Imagen */}
          <div className="w-full h-80 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ICONO FLOTANTE */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-24 h-24">
                <img
                  src={item.icon}
                  alt="icono"
                  className="w-full h-full object-contain"
                />
              </div>

          {/* Texto */}
          <div className="px-30 py-28 text-center">

            {/* ICONO COMPLETO */}
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>

             <img
                  src={item.icon}
                  alt="icono"
                  className="w-16 h-16 mx-auto mb-3"
                />

            <p className="text-gray-700 leading-relaxed text-xs">
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


