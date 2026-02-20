import { Link } from "react-router-dom";

export default function Nosotros() {
    return (
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto px-6 my-10">
            <div className="w-full h-[450px] overflow-hidden">
                <img
                    src="/images/home/nosotros.jpg"
                    alt="nuestro-equipo"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="w-full flex flex-col justify-center gap-4 my-10 text-xl text-blue-800">
                <p>En <span className="text-blue-900 font-bold">Omnibandas</span> somos una empresa especializada en el suministro, asesoría e impelmentación de soluciones en bandas transportadoras y de transmisión de potencia para aplicaciones industriales.</p>
                <p>Acompañamos a nuestros clientes desde el diagnóstico técnico hasta la operación continua, ofreciendo soporte especializado, ingeniería de aplicación y atención oportuna para asegurar la continuidad de sus procesos productivos.</p>
            </div>
            <div className="w-full flex justify-end">
                <Link
                    to={'/nosotros'}
                    className='p-3 bg-white text-blue-800 rounded-3xl shadow-lg border border-gray-200 hover:bg-blue-900/80 hover:text-white'
                >
                    Conoce nuestra experiencia
                </Link>
            </div>
        </div>
    )
}
