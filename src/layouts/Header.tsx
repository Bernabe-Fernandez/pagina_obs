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
    text_btn: "Contacta con un asesor",
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
  
   
  /*APARTADO PRODUCTOS*/
    
   "/productos/bandas": {
      title: "BANDAS TRANSPORTADORAS",
      subtitle: "Soluciones confiables para el transporte continuo de productos en líneas de producción procesamiento y empaque",
      image: "/images/backgrounds/headers/banda.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },

   "/industrias/alimentos": {
      title: "AGROALIMENTARIA",
      subtitle:
      "Soluciones de transporte diseñadas para el manejo eficiente de materias primas y productos en procesos agroalimentarios.",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      image: "/images/backgrounds/headers/agroalimentaria.jpg",
   },

     
   "/productos/transmision": {
      title: "BANDAS DE TRANSMISIÓN DE POTENCIA",
      subtitle: "Soluciones diseñadas para transmitir movimiento con precisión, sincronización y confiabilidad en procesos industriales.",
      image: "/images/backgrounds/headers/bandatransmicion.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },


   "/productos/guias": {
      title: "GUÍAS DE ORIENTACIÓN ",
      subtitle: "Componentes diseñados para dirigir, estabilizar y optimizar el funcionamiento de las bandas industriales.",
      image: "/images/backgrounds/headers/guias.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },


   "/productos/grapas": {
      title: "GRAPAS",
      subtitle: "Soluciones de unión diseñadas para asegurar continuidad operativa y facilitar el mantenimiento de bandas transportadoras.",
      image: "/images/backgrounds/headers/grapa.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },


   "/productos/transportadores": {
      title: "FABRICACIÓN DE TRANSPORTADORES",
      subtitle: "Diseño y fabricación de sistemas de transporte adaptados a las necesidades específicas de cada proceso industrial.",
      image: "/images/backgrounds/headers/fabricacion.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },
   

  "/productos/termosoldables": {
      title: "BANDAS TERMOSOLDABLES",
      subtitle: "Soluciones versátiles para sistemas de transporte continuo, adaptables a diferentes configuraciones y condiciones de operación.",
      image: "/images/backgrounds/headers/termosoldable.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },


     "/productos/modulares": {
      title: "BANDAS MODULARES",
      subtitle: "Soluciones modulares diseñadas para procesos que requieren higiene, flexibilidad y resistencia en el transporte de productos.",
      image: "/images/backgrounds/headers/modular.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },


     "/productos/olanes": {
      title: "OLANES",
      subtitle: "Accesorios diseñados para facilitar el arrastre, posicionamiento y control de productos en sistemas de transporte.",
      image: "/images/backgrounds/headers/olanes.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },


    "/productos/empujadores": {
      title: "EMPUJADORES",
      subtitle: "Accesorios diseñados para separar, posicionar y dirigir productos durante el transporte en bandas industriales.",
      image: "/images/backgrounds/headers/empujadores.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },



   "/productos/proyectos": {
      title: "PROYECTOS ESPECIALES",
      subtitle: "Desarrollo de soluciones a la medida para procesos que requieren un enfoque técnico especializado.",
      image: "/images/backgrounds/headers/proyectos.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },

    /*APARTADO INDUSTRIA*/
   
    "/industrias/confitera": {
      title: "CONFITERÍA  ",
      subtitle: "Soluciones de transporte para procesos de confitería que requieren precisión, continuidad y cuidado del producto.",
      image: "/images/backgrounds/headers/confiteria.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },
       


      
    "/industrias/embotelladora": {
      title: "EMBOTELLADORA",
      subtitle: "Soluciones de transporte industrial para el manejo estable y continuo de envases en líneas de embotellado y empaque.",
      image: "/images/backgrounds/headers/embotelladora.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },





         
      "/industrias/chocolatera": {
      title: "CHOCOLATERA",
      subtitle: "Sistemas de transporte adaptados al manejo controlado de productos sensibles en procesos de fabricación y transformación de chocolate.",
      image: "/images/backgrounds/headers/chocolatera.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



       "/industrias/panificadora": {
      title: "PANIFICADORA",
      subtitle: "Sistemas de transporte diseñados para líneas de producción continua en procesos de panificación y productos horneados.",
      image: "/images/backgrounds/headers/panificadora.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },




      "/industrias/tequilera": {
      title: "TEQUILERA",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/tequilera.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



      "/industrias/granos": {
      title: "Granos",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/granos.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



       "/industrias/latas": {
      title: "Granos",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/latas.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



       "/industrias/llantera": {
      title: "Granos",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/llantera.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



      
       "/industrias/farmaceutica": {
      title: "Granos",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/farma.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },





      "/industrias/cartonera": {
      title: "Granos",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/cartonera.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      }, 




       "/industrias/piedrera": {
      title: "Granos",
      subtitle: "Sistemas de transporte adaptados a los procesos de producción, envasado y manejo de la industria tequilera.",
      image: "/images/backgrounds/headers/piedra.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
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
