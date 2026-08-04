// import type { tiposTipo , condicionTipo } from "../../types";
// import TipoViewTwo from "../../components/sections/TipoViewTwo";

// type TiposProps = {
//   subtituloTipo?: string;
//   tituloTipo: string;
//   tipos?: tiposTipo[];
//   condiciones?: condicionTipo[];
//   tipo: string;
//   url: string; 
// };

// export default function Tipos({ tituloTipo, subtituloTipo, tipos, condiciones, tipo, url }: TiposProps) {

//   const usaPlantillaDos =
//     tipo === "proyectos" ||
//     tipo === "transportadores" ||
//     tipo === "herramientas";

//   return (
//     <section className="w-full py-20 bg-white">
//       {/*  Contenedor principal */}
//       <div className="w-3/4 mx-auto flex flex-col lg:items-end items-center">

//         {/*  TÍTULO */}
//         <h2 className="text-3xl font-bold text-blue-900 mb-36 mt-28 w-full">
//           {tituloTipo}
//         </h2>

//         {subtituloTipo && <p className="w-full">{subtituloTipo}</p>}

//         {/*  PLANTILLA ESPECIAL (SIN BOTÓN) */}
//         {usaPlantillaDos ? (
//           <TipoViewTwo condiciones={condiciones ?? []} tipo={tipo} />
//         ) : (
//           <>
//             {/* GRID DE CARTAS */}
//             <div className="space-y-16 w-full">
//               {Array.isArray(tipos) &&
//                 tipos.map((tipo) => (
//                   <div
//                     key={tipo.id}
//                     className="
//                       grid grid-cols-1 lg:grid-cols-2 gap-3 items-center
//                       max-lg:flex max-lg:flex-col max-lg:items-center
//                     "
//                   >
//                     {/*  Texto arriba en móvil y tablet */}
//                     <div className="
//                       bg-white shadow-xl px-10 py-3 rounded-lg border border-gray-200
//                       w-[400px] mx-auto lg:mx-0 max-lg:w-[320px]
//                     ">
//                       <p className="
//                         text-center text-lg font-semibold text-[#2E6092] leading-tight
//                         max-lg:text-[15px]
//                       ">
//                         {tipo.titulo}
//                       </p>
//                     </div>

//                     {/*  Imagen abajo en móvil y tablet */}
//                     <img
//                       src={tipo.img}
//                       alt={tipo.titulo}
//                       className="
//                         object-cover rounded-lg
//                         w-[700px] h-[120px]
//                         lg:w-[700px] lg:h-[120px]
//                         max-lg:w-[350px] max-lg:h-[100px]
//                         mx-auto lg:mx-0 mt-4
//                          transition-transform duration-500 hover:scale-105 hover:translate-y-1
//                       "
//                     />
//                   </div>
//                 ))}
//             </div>

//             {/*  BOTÓN FINAL */}
//             <div
//               className="
//                 mt-20
//                 lg:text-right lg:translate-x-[14px]
//                 text-center translate-x-0
//               "
//             >
//               <a
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   bg-azulobs-500 text-white rounded-full font-semibold
//                   shadow-[0_4px_15px_rgba(0,0,0,0.25)]
//                   transition duration-300 hover:bg-white hover:text-azulobs-500
//                   hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
//                   border border-transparent
//                   text-[18px]
//                   px-16 py-2
//                   sm:px-12 sm:py-2 sm:w-[250px]
//                   md:px-14 md:py-2 md:w-[300px]
//                   lg:px-20 lg:py-2 lg:w-[400px]
//                   mx-auto block
//                 "
//               >
//                 Ver opciones en el catálogo
//               </a>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

import type { tiposTipo , condicionTipo } from "../../types";
import TipoViewTwo from "../../components/sections/TipoViewTwo";

type TiposProps = {
  subtituloTipo?: string;
  tituloTipo: string;
  tipos?: tiposTipo[];
  condiciones?: condicionTipo[];
  tipo: string;
  url: string; 
};

export default function Tipos({ tituloTipo, subtituloTipo, tipos, condiciones, tipo, url }: TiposProps) {

  const usaPlantillaDos =
    tipo === "proyectos" ||
    tipo === "transportadores" ||
    tipo === "herramientas";

  const esOlanes = tipo === "olanes"; // ⭐ Condición específica para OLANES

  return (
    <section className="w-full py-20 bg-white">
      {/* Contenedor principal */}
      <div className="w-3/4 mx-auto flex flex-col lg:items-end items-center">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-16 w-full">
          {tituloTipo}
        </h2>

        {subtituloTipo && <p className="w-full">{subtituloTipo}</p>}

        {/* PLANTILLA ESPECIAL PARA OLANES */}
        {esOlanes ? (
          <>
            <div className="w-full flex flex-col md:flex-row items-start justify-start gap-40 md:gap-10 mb-40">
              
              {/* Recuadros de texto a la izquierda */}
              <div className="flex flex-col gap-60 w-full md:w-1/3 items-center md:items-start mt-10 md:pl-[30px]">
                {Array.isArray(tipos) &&
                  tipos.map((tipo) => (
                    <div
                      key={tipo.id}
                      className="
                        bg-white text-[#2E6092] font-semibold px-10 py-2 rounded-md
                        shadow-md w-[200px] text-center border border-gray-200
                      "
                    >
                      {tipo.titulo}
                    </div>
                  ))}
              </div>

              {/* Imágenes a la derecha */}
              <div className="flex flex-row gap-6 w-full md:w-2/3 justify-center md:justify-start flex-wrap relative">
                {Array.isArray(tipos) &&
                  tipos.map((tipo,) => (
                    <img
                      key={tipo.id}
                      src={tipo.img}
                      alt={tipo.titulo}
                      className="
                        rounded-xl w-[320px] h-[500px] object-cover object-center shadow-md
                        transition-transform duration-500 hover:scale-105 hover:translate-y-1
                      "
                    />
                  ))}

                {/* BOTÓN FINAL debajo de la imagen derecha */}
                {url && (
                  <div
                     className="
                       absolute -bottom-20 right-0 translate-x-[-220px] translate-y-[40px]
                       flex justify-end w-full
                      "
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        bg-azulobs-500 text-white rounded-full font-semibold
                        shadow-[0_4px_15px_rgba(0,0,0,0.25)]
                        transition duration-300 hover:bg-white hover:text-azulobs-500
                        hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                        border border-transparent
                        text-[18px]
                        px-16 py-2
                        sm:px-12 sm:py-2 sm:w-[250px]
                        md:px-14 md:py-2 md:w-[300px]
                        lg:px-20 lg:py-2 lg:w-[400px]
                      "
                    >
                      Ver opciones en el catálogo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : usaPlantillaDos ? (
          <TipoViewTwo condiciones={condiciones ?? []} tipo={tipo} />
        ) : (
          <>
            {/* GRID DE CARTAS */}
            <div className="space-y-16 w-full">
              {Array.isArray(tipos) &&
                tipos.map((tipo) => (
                  <div
                    key={tipo.id}
                    className="
                      grid grid-cols-1 lg:grid-cols-2 gap-3 items-center
                      max-lg:flex max-lg:flex-col max-lg:items-center
                    "
                  >
                    {/* Texto arriba en móvil y tablet */}
                    <div className="
                      bg-white shadow-xl px-10 py-3 rounded-lg border border-gray-200
                      w-[400px] mx-auto lg:mx-0 max-lg:w-[320px]
                    ">
                      <p className="
                        text-center text-lg font-semibold text-[#2E6092] leading-tight
                        max-lg:text-[15px]
                      ">
                        {tipo.titulo}
                      </p>
                    </div>

                    {/* Imagen abajo en móvil y tablet */}
                    <img
                      src={tipo.img}
                      alt={tipo.titulo}
                      className="
                        object-cover rounded-lg
                        w-[700px] h-[120px]
                        lg:w-[700px] lg:h-[120px]
                        max-lg:w-[350px] max-lg:h-[100px]
                        mx-auto lg:mx-0 mt-4
                        transition-transform duration-500 hover:scale-105 hover:translate-y-1
                      "
                    />
                  </div>
                ))}
            </div>

            {/* BOTÓN FINAL */}
            {url && (
              <div
                className="
                  mt-20
                  lg:text-right lg:translate-x-[14px]
                  text-center translate-x-0
                "
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-azulobs-500 text-white rounded-full font-semibold
                    shadow-[0_4px_15px_rgba(0,0,0,0.25)]
                    transition duration-300 hover:bg-white hover:text-azulobs-500
                    hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                    border border-transparent
                    text-[18px]
                    px-16 py-2
                    sm:px-12 sm:py-2 sm:w-[250px]
                    md:px-14 md:py-2 md:w-[300px]
                    lg:px-20 lg:py-2 lg:w-[400px]
                    mx-auto block
                  "
                >
                  Ver opciones en el catálogo
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
