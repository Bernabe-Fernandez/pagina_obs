export default function Compromiso() {
  const CompromisoData = [
    {
      id: 1,
      title: "MISIÓN",
      text: "Que las bandas y transportadores marca Omnibandas satisfagan a nuestros clientes y generen valor al mercado nacional, actuando con responsabilidad social.",
      image:  "/images/nosotros/compromiso/mision.jpeg"

    },
    {
      id: 2,
      title: "VISIÓN",
      text: "Ser la marca líder en bandas transportadoras para la industria mexicana, generando valor en cada solución implementada.",
      image: "/images/nosotros/compromiso/vision.jpeg"

    },
    {
      id: 3,
      title: "FILOSOFÍA",
      text: "Resolver de forma rápida y eficiente los problemas de producción de nuestros clientes, garantizando la continuidad operativa y maximizando la eficiencia de sus procesos industriales.",
      image: "/images/nosotros/compromiso/filosofia.jpeg"


    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="text-center text-3xl font-bold text-blue-900 tracking-wide">
          NUESTRO COMPROMISO
        </h2>

        {/* Párrafo introductorio */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mt-6 mb-12 leading-relaxed">
          Trabajamos bajo un compromiso constante con la calidad, la seguridad y la continuidad operativa, aportando valor a nuestros clientes, socios comerciales y al desarrollo de la industria nacional.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CompromisoData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
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

