import { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiPhone, mdiEmail } from "@mdi/js";

const zonas = [
  {
    nombre: "Zona Norte",
    img: "/images/zona/cartas/contacto1.jpg",
    icon: "/images/zona/cartas/nortee.svg",
    contactos: [
      {
        rol: "Ventas directas",
        nombre: "",
        tel: "33 1991 1863",
        correo: "ventas@omnibandas.com.mx",
      },
    ],
  },
  {
    nombre: "Zona Bajío",
    img: "/images/zona/cartas/contacto2.jpg",
    icon: "/images/zona/cartas/bajio.svg",
    contactos: [
      {
        rol: "Asesor técnico",
        nombre: "César Lizardi Guillen",
        tel: "33 2254 5598",
        correo: "correo@omnibandas.com.mx",
      },
      {
        rol: "Asesor técnico",
        nombre: "Jonathan Isaac Molina",
        tel: "33 1215 5797",
        correo: "jonathanmolina@omnibandas.com.mx",
      },
    ],
  },
  {
    nombre: "Zona Occidente",
    img: "/images/zona/cartas/contacto3.jpg",
    icon: "/images/zona/cartas/occidentee.svg",
    contactos: [
      {
        rol: "Ventas directas",
        nombre: "",
        tel: "33 1991 1863",
        correo: "ventas@omnibandas.com.mx",
      },
    ],
  },
  {
    nombre: "Zona Centro",
    img: "/images/zona/cartas/contacto4.jpg",
    icon: "/images/zona/cartas/centroo.svg",
    contactos: [
      {
        rol: "Ventas directas",
        nombre: "Raúl Ramírez",
        tel: "33 1991 1863",
        correo: "ventas@omnibandas.com.mx",
      },
    ],
  },
  {
    nombre: "Zona Pacífico",
    img: "/images/zona/cartas/contacto5.jpg",
    icon: "/images/zona/cartas/pacificoo.svg",
    contactos: [
      {
        rol: "Asesor técnico",
        nombre: "Jorge Domínguez Flores",
        tel: "33 2835 2969",
        correo: "ventaspacifico2@omnibandas.com.mx",
      },
      {
        rol: "Asesor técnico",
        nombre: "Everardo Armenta Cervantes",
        tel: "33 1895 9945",
        correo: "ventasgdl@omnibandas.com.mx",
      },
    ],
  },
];

export default function Zona() {
  const [abierto, setAbierto] = useState(Array(zonas.length).fill(false));

  const toggleZona = (index: number) => {
    setAbierto((prev) => {
      const nuevo = [...prev];
      nuevo[index] = !nuevo[index];
      return nuevo;
    });
  };

  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-4xl font-bold text-azulobs-600 mb-10 mt-40">
        CONTACTO POR ZONA
      </h2>

      <p className="text-center text-azulobs-500 text-[20px] mb-40 max-w-4xl mx-auto">
        Para una atención más directa, comunícate con nuestro equipo de ventas según tu ubicación.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 mb-40 items-start">
        {zonas.map((zona, index) => (
          <div
            key={index}
            className={`bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl border border-gray-200 flex flex-col transition-all duration-700 ${
              abierto[index] ? "transform -translate-y-2" : "transform translate-y-0"
            }`}
            style={{ height: abierto[index] ? "620px" : "360px", 
                transition: "height 0.45s ease"
            }} // 🔹 Altura uniforme al expandirse
          >


            {/* IMAGEN */}
            <div className="relative h-[230px] w-full overflow-hidden bg-blue-900">
              <img
                src={zona.img}
                alt={zona.nombre}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-200/[0.80]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={zona.icon} alt="icono" className="w-[185px] h-[185px]" />
              </div>
            </div>

            {/* CONTENIDO */}
            <div className="p-5 flex flex-col justify-between mt-[-10px]">
              <div>
                <h3 className="text-xl font-bold text-azulobs-500 mb-4 text-center">
                  {zona.nombre}
                </h3>

                {/* ANIMACIÓN SUAVE DE CONTACTOS */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    abierto[index] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {zona.contactos.map((c, i) => (
                    <div key={i} className="mb-4">
                      <p className="text-azulobs-400 font-semibold mb-1">{c.rol}</p>

                      {c.nombre && (
                        <div className="flex items-center gap-2 mb-1">
                          <Icon path={mdiAccount} size={0.9} className="text-azulobs-500" />
                          <p className="text-azulobs-400">{c.nombre}</p>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-1">
                        <Icon path={mdiPhone} size={0.9} className="text-azulobs-500" />
                        <p className="text-azulobs-400">{c.tel}</p>
                      </div>

                      <div className="flex items-start gap-2">
                         <Icon path={mdiEmail} size={0.9} className="text-azulobs-500 shrink-0 mt-[2px]" />
                         <p className="text-azulobs-400 break-all whitespace-normal leading-tight w-[180px]">
                         {c.correo}
                         </p>
                        </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTÓN */}
              <div
                className={`flex transition-all duration-500 ${
                abierto[index] ? "justify-end" : "justify-center"
                } mt-auto mb-4 absolute bottom-5 left-0 w-full px-5`}
                >

                <button
                  onClick={() => toggleZona(index)}
                  className="
                    px-4
                    py-1
                    text-[15px]
                    font-semibold
                    rounded-xl
                    bg-azulobs-500
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-azulobs-500
                    hover:shadow-[0_6px_14px_rgba(0,0,0,0.35)]
                  "
                >
                  Contactar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


