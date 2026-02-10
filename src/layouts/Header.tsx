import { useLocation } from "react-router-dom";

//tipo hedaerdata para crear un objetro de este tipo
type HeaderData = {
  title:string,
  subtitle?:string,
  text_btn?:string,
  image:string
}

//rutas base para seleccionar en el header
const headerConfig: Record<string, HeaderData>= {
  "/": {
    title: "Bandas, Cadenas y Transportadores",
    subtitle: "Experiencia, Innovación y Compromiso en cada solución de transporte que desarrollados",
    text_btn:"Solicitar Cotización",
    image: "/images/backgrounds/headers/home.jpg"
  },
  "/productos": {
    title: "Productos",
    subtitle: "Soluciones industriales",
    image: "/images/headers/products.jpg"
  },
  "/bolsa-trabajo": {
    title: "Bolsa de Trabajo",
    subtitle: "Únete a nuestro equipo",
    image: "/images/headers/jobs.jpg"
  },
  "/contacto": {
    title: "Contacto",
    subtitle: "Estamos para ayudarte",
    image: "/images/headers/contact.jpg"
  }
};


export default function Header() {

  //leemos la ruta actual
  const location = useLocation();

  //colocamos la configuracion inicial y la por defecto
  const config = headerConfig[location.pathname] ?? {
    title: "Omnibandas",
    subtitle: "",
    image: "/images/headers/default.jpg"
  };

  return (
    <header className="h-96 md:h-[430px] lg:h-[580px] xl:h-[700px] relative flex items-center text-white overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover md:bg-[length:100%]"
        style={{
          backgroundImage: `url(${config.image})`,
          filter: "brightness(0.85)"
        }}
      />

      {/* Degradado azul diagonal */}
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/90 via-blue-900/70 to-blue-800/65"></div>


      {/* Contenido principal */}
      <div className="relative z-10 w-full h-full px-8 py-10 flex flex-col justify-between">

        {/* Arriba izquierda */}
        <div className="border-t-2 border-white/70 w-full mb-3 mt-5">

          <div className="max-w-2xl pt-4 lg:max-w-3xl  lg:pt-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
              {config.title}
            </h1>

            {config.subtitle && (
              <p className="mt-2 text-lg md:text-xl lg:text-3xl text-white/90 uppercase">
                {config.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Abajo derecha - Botón */}
        <div className="flex justify-end">
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition shadow-lg">
            {config.text_btn}
          </button>
        </div>

      </div>

    </header>
  )
}
