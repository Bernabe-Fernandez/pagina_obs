
import AnimatedCounter from "../utilities/AnimatedCounter";


export default function Resultados() {

  return (
    <div className="relative text-white max-w-full min-h-[700px] flex items-center justify-center">
        {/* Imagen de fondo */}
        <div 
            className="absolute inset-0 bg-[url('/images/home/servicios.jpg')] bg-cover bg-center"
        />
        {/* Overlay azul tenue */}
        <div className="absolute inset-0 bg-azulobs-500/60"/>

        <div className="relative max-w-4xl mx-auto px-6 py-10">
            <h3 className='uppercase text-2xl md:text-4xl font-semibold  mb-8 text-center'>resultados que respaldan nuestra experiencia y capacidad operativa</h3>
            <div className="grid grid-cols-2 gap-6 mx-auto w-full">
                <div className="flex flex-col justify-center items-start gap-4 mx-auto">
                    <p className="uppercase text-left text-lg">plantas atendidas</p>
                    <div className="flex gap-4">
                        <AnimatedCounter start={0} end={582} duration={5000} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 mx-auto">
                    <p className="uppercase text-left text-lg">proyectos realizados</p>
                    
                    <div className="flex gap-4">
                        <AnimatedCounter start={0} end={489} duration={5000} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 mx-auto">
                    <p className="uppercase text-left text-lg">años de experiencia</p>
                    <div className="flex gap-4">
                        <AnimatedCounter start={0} end={31} duration={5000} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 mx-auto">
                    <p className="uppercase text-left text-lg">kms de bandas instaladasx</p>
                    <div>
                        <div className="flex gap-4">
                            <AnimatedCounter start={0} end={8590} duration={5000} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
