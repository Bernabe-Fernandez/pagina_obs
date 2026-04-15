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
        correo: "ventas@omnibandas.com.mx"
      }
    ]
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
        correo: "correo@omnibandas.com.mx"
      },
      {
        rol: "Asesor técnico",
        nombre: "Jonathan Isaac Molina",
        tel: "33 1215 5797",
        correo: "jonathanmolina@omnibandas.com.mx"
      }
    ]
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
        correo: "ventas@omnibandas.com.mx"
      }
    ]
  },
  {
    nombre: "Zona Centro",
    img: "/images/zona/cartas/contacto4.jpg",
    icon: "/images/zona/cartas/centroo.svg",
    contactos: [
      {
        rol: "Ventas directas",
        nombre: "",
        tel: "33 1991 1863",
        correo: "ventas@omnibandas.com.mx"
      }
    ]
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
        correo: "ventaspacifico2@omnibandas.com.mx"
      },
      {
        rol: "Asesor técnico",
        nombre: "Everardo Armenta Cervantes",
        tel: "33 1895 9945",
        correo: "ventasgdl@omnibandas.com.mx"
      }
    ]
  }
];


export default function Zona() {
  return (
    <section className="w-full py-16 bg-white">

      <h2 className="text-center text-4xl font-bold text-azulobs-600 mb-10 mt-60">
        CONTACTO POR ZONA
      </h2>

      <p className="text-center text-azulobs-500 text-[20px] mb-40 max-w-4xl mx-auto">
        Para una atención más directa, comunícate con nuestro equipo de ventas según tu ubicación.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 mb-40">

        {zonas.map((zona, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[560px]"
          >

            {/* IMAGEN */}
            <div className="relative h-[250px] w-full overflow-hidden bg-blue-900">
              <img
                src={zona.img}
                alt={zona.nombre}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-200/[0.80]"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={zona.icon}
                  alt="icono"
                  className="w-[195px] h-[195px]"
                />
              </div>
            </div>

            {/* CONTENIDO */}
            <div className="p-5 flex flex-col justify-between -mt-1 flex-1">
              <div>
                <h3 className="text-xl font-bold text-azulobs-500 mb-4">
                  {zona.nombre}
                </h3>

                {zona.contactos.map((c, i) => (
                  <div key={i} className="mb-4">

                    {/* ROL */}
                    <p className="text-azulobs-400 font-semibold mb-1">{c.rol}</p>

                    {/* ICONO NOMBRE */}
                    {c.nombre && (
                      <div className="flex items-center gap-2 mb-1">
                        <Icon
                          path={mdiAccount}
                          size={0.9}
                          className="text-azulobs-500"
                        />
                        <p className="text-azulobs-400">{c.nombre}</p>
                      </div>
                    )}

                    {/* ICONO TELÉFONO */}
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        path={mdiPhone}
                        size={0.9}
                        className="text-azulobs-500"
                      />
                      <p className="text-azulobs-400">{c.tel}</p>
                    </div>

                    {/* ICONO CORREO */}
                    <div className="flex items-center gap-2">
                      <Icon
                        path={mdiEmail}
                        size={0.9}
                        className="text-azulobs-500 shrink-0"
                      />
                      <p className="text-azulobs-400">{c.correo}</p>
                    </div>

                  </div>
                ))}
              </div>

              {/* BOTÓN */}
              <div className="flex justify-end">
                <button
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
