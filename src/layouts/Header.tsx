import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

//tipo hedaerdata para crear un objetro de este tipo
type HeaderData = {
  title:string,
  subtitle?:string,
  text_btn?:string,
  url_btn?:string,
  image:string,
  height?: string
}

//rutas base para seleccionar en el header
const headerConfig: Record<string, HeaderData>= {
  "/": {
    title: "",
    subtitle: "",
    text_btn:"Solicitar Cotización",
    url_btn:"/contacto",
    image: "/images/backgrounds/headers/home.jpg",
    height: "h-[700px]"
  },
  "/nosotros": {
    title:"Nosotros",
    subtitle:"Especialistas en soluciones industriales",
    image:"/images/backgrounds/headers/nosotros.jpg"
  },
  "/productos": {
    title: "Productos",
    subtitle: "Soluciones industriales",
    image: "/images/headers/products.jpg"
    },
  
    "/catalogo": {
    title: "CATÁLOGO",
    subtitle: "Soluciones en bandas transportadoras, transmisión y accesorios para aplicaciones industriales.",
    text_btn: "Solicitar asesoría",
    url_btn: "/contacto",
    image: "/images/backgrounds/headers/catalogo.jpg",
    
  },

  "/bolsa_trabajo": {
    title: "Bolsa de Trabajo",
    subtitle: "Forma parte de un equipo especializado en soluciones industriales, enfocado en la mejora continua y el trabajo colaborativo.",
    image: "/images/backgrounds/headers/trabajo.jpg",
    text_btn:"Contactar con Recursos Humanos",
    url_btn:"/bolsa_trabajo#formulario",
  },


  "/contacto": {
    title: "CONTACTO",
    subtitle: "Nuestro equipo está disponible para atender su requerimiento.",
    text_btn: "Contactar con un asesor",
    url_btn: "/contacto#formulario",
    image: "/images/backgrounds/headers/contacto.jpg",
  },
  

    
   "/productos/bandas": {
      title: "BANDAS TRANSPORTADORAS",
      subtitle: "Soluciones confiables para el transporte continuo de productos en líneas de producción procesamiento y empaque",
      image: "/images/backgrounds/headers/banda.jpg",
      text_btn: "Contactar con un asesor",
   },




};


export default function Header() {

 //leemos la ruta actual
  const location = useLocation();
  const isHome = location.pathname === "/";

  // estado del video
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  //colocamos la configuracion inicial y la por defecto
  const config = headerConfig[location.pathname] ?? {
    title: "Omnibandas",
    subtitle: "",
    image: "/images/headers/default.jpg"
  };

  const headerHeight = config.height ?? "h-96 md:h-[430px] lg:h-[500px]";

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🔥 reinicio REAL
          setVideoEnded(false);
          setVideoKey(prev => prev + 1);
        }
      },
      {
        threshold: 0.6
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [isHome]);

  useEffect(() => {
    if (isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVideoEnded(false);
      setVideoKey(prev => prev + 1); // 🔥 fuerza reconstrucción del video
    }
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`h-96 ${headerHeight} relative flex items-center text-white overflow-hidden mb-14`}
    >

      <div className="absolute inset-0">

        {/* VIDEO */}
        {isHome && (
          <video
            key={videoKey}
            ref={videoRef}
            className={`w-full h-full object-cover absolute inset-0 ${
              videoEnded ? "opacity-0" : "opacity-100"
            }`}
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          >
            <source src="/images/backgrounds/video/logoanimacion2.mp4" type="video/mp4" />
          </video>
        )}

        {/* IMAGEN */}
        <div
          className={`w-full h-full bg-no-repeat bg-center bg-cover md:bg-[length:100%] absolute inset-0 ${
            isHome
              ? videoEnded
                ? "opacity-100"
                : "opacity-0"
              : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${config.image})`,
            // filter: "brightness(0.85)"
          }}
        />

      </div>

      {/* Degradado */}
      {
        !isHome && (
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/90 via-blue-900/70 to-blue-800/65"></div>
        )
      }

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-8 py-10 flex flex-col justify-between mx-auto lg:mx-24">

        {/* Arriba */}
        <div className="border-t-2 border-white/70 w-full mb-3 mt-5">
          <div className="max-w-3xl pt-3 lg:max-w-4xl lg:pt-12">
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold leading-tight uppercase">
              {config.title}
            </h1>

            {config.subtitle && (
              <p className="mt-2 text-md md:text-lg lg:text-4xl text-white/90">
                {config.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Botón */}
        {config.text_btn && (
          <div className="flex justify-end">
            <Link
              to={config.url_btn ?? '/'}
              className="bg-white/75 text-blue-900 font-semibold px-4 lg:px-6 py-1.5 rounded-3xl hover:bg-blue-100 transition shadow-lg text-[17px]">
              {config.text_btn}
            </Link>
          </div>
        )}

      </div>

    </header>
  )
}
