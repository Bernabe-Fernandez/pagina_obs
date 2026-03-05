// import { useLocation } from "react-router-dom";
// import FormularioContacto from "../forms/FormularioContacto"
// import { useEffect } from "react";


// export default function ContactoTrabajo() {
//     const location = useLocation();

//     useEffect(() => {
//         if (location.hash) {
//             const element = document.querySelector(location.hash);
//             if (element) {
//                 element.scrollIntoView({ behavior: "smooth" });
//             }
//         }
//     }, [location]);

//   return (
//     <section 
//         id="formulario"
//         className="w-full py-24"
//     >

//         <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-14 mb-14">

//             {/* Encabezado */}
//             <div className="space-y-3 max-w-xl">

//                 <h2 className="text-blue-900 uppercase font-bold text-2xl md:text-3xl">
//                     Forma parte de nuestro equipo
//                 </h2>

//                 <h3 className="text-blue-800 text-lg leading-relaxed">
//                     Déjanos tus datos y cuéntanos en qué área
//                     te gustaría desarrollarte.
//                 </h3>

//             </div>
//         </div>

//         <div className="">

//              {/* Contenido formulario + imagen */}
//             <div
//                 className="w-full flex justify-end gap-2"
//             >

//                 {/* Formulario */}
//                 <div className="
//                     bg-white 
//                     border border-gray-200 
//                     rounded-xl 
//                     shadow-md 
//                     ml-20
//                     p-6 md:p-8

//                     w-[92%] 
//                     md:w-[500px] 
//                     lg:w-[550px] 
//                     2xl:w-[700px]
//                 ">

//                     <FormularioContacto />

//                 </div>


//                 {/* Imagen */}
//                 <div className="flex items-end">

//                     <img
//                         src="/images/trabajo/formulario.jpg"
//                         alt="formalario bolsa trabajo"
//                         className="h-[550px] object-contain"
//                     />

//                 </div>

//             </div>
            
//         </div>

//     </section>
//   )
// }


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FormularioTrabajo from "../forms/FormularioTrabajo";

export default function ContactoTrabajo() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

  return (
    <section 
        id="formulario"
        className="w-full py-16 md:py-20 lg:py-24"
    >

        {/* Encabezado */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10 md:gap-14 mb-10 md:mb-14">

            <div className="space-y-3 max-w-xl">

                <h2 className="text-blue-900 uppercase font-bold text-xl md:text-2xl lg:text-3xl">
                    Forma parte de nuestro equipo
                </h2>

                <h3 className="text-blue-800 text-base md:text-lg leading-relaxed">
                    Déjanos tus datos y cuéntanos en qué área
                    te gustaría desarrollarte.
                </h3>

            </div>
        </div>


        {/* Contenedor formulario + imagen */}
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">

            {/* Formulario */}
            <div className="w-full lg:flex-1 flex justify-center">
                <div className="
                    w-full
                    max-w-[550px]
                    2xl:max-w-[650px]
                    bg-white
                    border border-gray-200
                    rounded-xl
                    shadow-lg
                    p-6 md:p-8
                ">
                    <FormularioTrabajo />
                </div>
            </div>


            {/* Imagen */}
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
                <img
                    src="/images/trabajo/formulario.jpg"
                    alt="formulario bolsa trabajo"
                    className="
                        w-full
                        max-w-[600px]
                        lg:max-w-none
                        lg:h-[550px]
                        object-cover
                        rounded-xl
                    "
                />
            </div>

        </div>

    </section>
  )
}