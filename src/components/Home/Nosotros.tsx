import { Link } from "react-router-dom";

export default function Nosotros() {
    return (
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-20">

            {/* IMAGEN */}
            <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
                <img
                    src="/images/home/nosotros.jpg"
                    alt="nuestro-equipo"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* TEXTO */}
            <div className="w-full flex flex-col justify-center gap-4 md:gap-6 my-8 md:my-12 text-base sm:text-lg md:text-xl text-blue-800 text-center md:text-left max-w-4xl">
                <p>
                    En <span className="text-blue-900 font-bold">Omnibandas</span> somos una empresa especializada en el suministro, asesoría e implementación de soluciones en bandas transportadoras y de transmisión de potencia para aplicaciones industriales.
                </p>

                <p>
                    Acompañamos a nuestros clientes desde el diagnóstico técnico hasta la operación continua, ofreciendo soporte especializado, ingeniería de aplicación y atención oportuna para asegurar la continuidad de sus procesos productivos.
                </p>
            </div>

            {/* BOTÓN */}
            <div className="w-full flex justify-center md:justify-end">
                <Link
                    to={'/nosotros'}
                    className='
                        px-6 py-3 
                        bg-white text-blue-800 
                        rounded-3xl shadow-lg 
                        border border-gray-200 
                        hover:bg-blue-900 hover:text-white 
                        transition-all duration-300
                    '
                >
                    Conoce nuestra experiencia
                </Link>
            </div>

        </div>
    )
}
