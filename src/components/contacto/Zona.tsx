
//importacion de imagenes de fondo//
import contacto1 from "/images/zona/valores/honestidad.jpg";
import contacto2 from "../../assets/contacto2.jpg";
import contacto3 from "../../assets/contacto3.jpg";
import contacto4 from "../../assets/contacto4.jpg";
import contacto5 from "../../assets/contacto5.jpg";



//importacion de iconos//
import iconNorte from "../../assets/zona-norte.png";
import iconBajio from "../../assets/zona-bajio.png";
import iconOccidente from "../../assets/zona-occidente.png";
import iconCentro from "../../assets/zona-centro.png";
import iconPacifico from "../../assets/zona-pacifico.png";

const zonas = [
  { nombre: "Zona Norte", img: contacto1, icon: iconNorte },
  { nombre: "Zona Bajío", img: contacto2, icon: iconBajio },
  { nombre: "Zona Occidente", img: contacto3, icon: iconOccidente },
  { nombre: "Zona Centro", img: contacto4, icon: iconCentro },
  { nombre: "Zona Pacífico", img: contacto5, icon: iconPacifico },
];

export default function Zona() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">
        CONTACTO POR ZONA
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Para una atención más directa, comunícate con nuestro equipo de ventas según tu ubicación.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-6">
        {zonas.map((zona, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            
            {/* Imagen 60% */}
            <div className="relative h-40">
              <img
                src={zona.img}
                alt={zona.nombre}
                className="w-full h-full object-cover"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Ícono */}
              <img
                src={zona.icon}
                alt="icono"
                className="absolute bottom-2 right-2 w-12 h-12"
              />
            </div>

            {/* Contenido 40% */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{zona.nombre}</h3>

              <p className="text-gray-600">Vendedor</p>
              <p className="text-gray-600">Cel.</p>
              <p className="text-gray-600 mb-4">correo@omnibandas.com.mx</p>

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md font-semibold">
                Contactar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}