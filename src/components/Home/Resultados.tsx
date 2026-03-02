
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../utilities/AnimatedCounter";


export default function Resultados() {

    const { ref, inView } = useInView({
        triggerOnce: false, // cambia a true si solo quieres una vez
        threshold: 0.4, // se activa cuando 40% es visible
    });

  return (
    <div ref={ref} className="relative text-white w-full min-h-[500px] md:min-h-[650px] flex items-center justify-center">

        {/* Imagen de fondo */}
        <div 
            className="absolute inset-0 bg-[url('/images/home/servicios.jpg')] bg-cover bg-center"
        />

        {/* Overlay azul */}
        <div className="absolute inset-0 bg-azulobs-500/70" />

        {/* CONTENIDO */}
        <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0 py-16 md:py-24 md:mx-20 lg:mx-48">
            
            <h3 className='uppercase text-xl sm:text-2xl md:text-4xl font-semibold mb-10 md:mb-16 text-center leading-snug'>
                Resultados que respaldan nuestra experiencia y capacidad operativa
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 w-full">

                <div className="flex flex-col items-center sm:items-center gap-3 text-center sm:text-left">
                    <p className="uppercase text-sm sm:text-base tracking-wide">
                        Plantas atendidas
                    </p>
                    {inView && <AnimatedCounter start={0} end={582} duration={5000} />}
                </div>

                <div className="flex flex-col items-center sm:items-center gap-3 text-center sm:text-left">
                    <p className="uppercase text-sm sm:text-base tracking-wide">
                        Proyectos realizados
                    </p>
                    {inView && <AnimatedCounter start={0} end={489} duration={5000} />}
                </div>

                <div className="flex flex-col items-center sm:items-center gap-3 text-center sm:text-left">
                    <p className="uppercase text-sm sm:text-base tracking-wide">
                        Años de experiencia
                    </p>
                    {inView && <AnimatedCounter start={0} end={31} duration={5000} />}
                </div>

                <div className="flex flex-col items-center sm:items-center gap-3 text-center sm:text-left">
                    <p className="uppercase text-sm sm:text-base tracking-wide">
                        Kms de bandas instaladas
                    </p>
                    {inView && <AnimatedCounter start={0} end={8590} duration={5000} />}
                </div>

            </div>
        </div>
    </div>
  )
}
