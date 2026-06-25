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
    image:"/images/backgrounds/headers/nosotros.jpeg"


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
    image: "/images/backgrounds/headers/catalogo.png",
    
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




   "/productos/herramientas": {
      title: "HERRAMIENTAS INDUSTRIALES",
      subtitle: "Herramientas y equipos diseñados para facilitar la instalación, empalme y mantenimiento de bandas industriales en planta.",
      image: "/images/backgrounds/headers/herramienta.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
   },





    /*APARTADO INDUSTRIA*/



     "/industrias/verduras": {
      title: "VERDURAS Y LEGUMBRES",
      subtitle:
      "Soluciones de transporte para el manejo para el manejo continuo y eficiente de productos frescos en aplicaciones agroindustriales. ",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      image: "/images/backgrounds/headers/verduras.jpg",
   },




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
      subtitle: "Soluciones de transporte para el manejo de productos a granel en procesos de almacenamiento, transformación y distribución de granos.",
      image: "/images/backgrounds/headers/granos.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



       "/industrias/latas": {
      title: "  Latas",
      subtitle: "Soluciones de transporte industrial para el manejo y desplazamiento de envases metálicos en proceso de producción y empaque. ",
      image: "/images/backgrounds/headers/latas.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



       "/industrias/llantera": {
      title: "LLANTERA",
      subtitle: "Soluciones de transporte para procesos de manufactura, ensamble y manejo de productos en la industria llantera. ",
      image: "/images/backgrounds/headers/llantera.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



      
       "/industrias/farmaceutica": {
      title: "FARMACÉUTICA",
      subtitle: "Sistemas de transporte diseñados para procesos que requieren control, precisión y operación continua en entornos regulados.",
      image: "/images/backgrounds/headers/farma.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },





      "/industrias/cartonera": {
      title: "CARTONERA",
      subtitle: "Sistemas de transporte adaptados a procesos de fabricación, armado y manejo de productos de cartón y empaques.",
      image: "/images/backgrounds/headers/cartonera.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      }, 




       "/industrias/piedrera": {
      title: "PIEDRERA",
      subtitle: "Sistemas de transporte industrial diseñados para el manejo de materiales pesados y abrasivos en proceso de extracción y transformación.",
      image: "/images/backgrounds/headers/piedra.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },




       "/industrias/textil": {
      title: "TEXTILERA",
      subtitle: "Soluciones de transporte diseñadas para el manejo eficiente de materiales y productos en procesos textiles y de manufactura.",
      image: "/images/backgrounds/headers/textil.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },


    
       "/industrias/embutidos": {
      title: "EMBUTIDOS",
      subtitle: "Soluciones de transporte adaptadas a procesos cárnicos que requieren continuidad operativa, higiene y control del producto.",
      image: "/images/backgrounds/headers/embutido.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



      "/industrias/frutas": {
      title: "FRUTAS",
      subtitle: "Soluciones de transporte diseñadas para el manejo eficiente de productos frescos en procesos industriales y de empaque.",
      image: "/images/backgrounds/headers/fruta.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },


 
      "/industrias/envasado": {
      title: "ENVASE PET",
      subtitle: "Soluciones de transporte diseñadas para el manejo eficiente de envases PET en procesos de producción, llenado y empaque.",
      image: "/images/backgrounds/headers/pet.jpg",
      text_btn: "Solicitar asesoría",
      url_btn: "/contacto",
      },



};

 export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [videoEnded, setVideoEnded] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const config = headerConfig[location.pathname] ?? {
    title: "Omnibandas",
    subtitle: "",
    image: "/images/headers/default.jpg",
  };

  // 🔹 Altura responsive corregida
  const headerHeight =
    config.height ??
    "h-[220px] sm:h-[320px] md:h-[430px] lg:h-[500px]";

  // Reiniciar video cuando el header vuelve a ser visible
  useEffect(() => {
    if (!isHome) return;

    const currentHeader = headerRef.current;
    if (!currentHeader) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoEnded(false);
          setVideoKey((prev) => prev + 1);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(currentHeader);

    return () => {
      observer.unobserve(currentHeader);
    };
  }, [isHome]);

  // Reiniciar video al cambiar de ruta
  useEffect(() => {
    if (!isHome) return;

    const timer = setTimeout(() => {
      setVideoEnded(false);
      setVideoKey((prev) => prev + 1);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [isHome, location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`${headerHeight} relative flex items-center text-white overflow-hidden mb-14`}
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        {/* VIDEO */}
        {isHome && (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              key={videoKey}
              ref={videoRef}
              className={`
                w-full h-full
                object-cover object-center
                transition-opacity duration-700
                ${videoEnded ? "opacity-0" : "opacity-100"}
              `}
              autoPlay
              muted
              playsInline
              loop
              onEnded={() => setVideoEnded(true)}
            >
              <source
                src="/images/backgrounds/video/logoanimacion2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        )}

        {/* IMAGEN */}
        <div
          className={`
            absolute inset-0 w-full h-full
            bg-cover bg-center bg-no-repeat
            transition-opacity duration-700
            ${
              isHome
                ? videoEnded
                  ? "opacity-100"
                  : "opacity-0"
                : "opacity-100"
            }
          `}
          style={{ backgroundImage: `url(${config.image})` }}
        />
      </div>

      {/* Degradado */}
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/90 via-blue-900/70 to-blue-800/65" />
      )}

      {/* Contenido */}
      <div
        className="
          relative z-10 w-full h-full
          flex flex-col justify-between
          px-4 sm:px-6 md:px-8 py-6 md:py-10
          mx-auto lg:mx-24
          text-center md:text-left
        "
      >
        {/* Encabezado */}
        <div className="border-t-2 border-white/70 w-full mt-3 md:mt-5 mb-3">
          <div className="max-w-[90%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto md:mx-0 pt-2 md:pt-4 lg:pt-12">
            <h1
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-bold leading-tight uppercase
                text-center md:text-left
                px-2 sm:px-4
              "
            >
              {config.title}
            </h1>

            {config.subtitle && (
              <p
                className="
                  mt-2
                  text-xs sm:text-sm md:text-base lg:text-2xl
                  text-white/90
                  text-center md:text-left
                  px-2 sm:px-4
                "
              >
                {config.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Botón */}
        {config.text_btn && (
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <Link
              to={config.url_btn ?? "/"}
              className="
                bg-white/75 text-blue-900 font-semibold
                px-4 md:px-5 lg:px-6 py-1.5
                rounded-3xl hover:bg-blue-100
                transition shadow-lg
                text-sm md:text-base lg:text-[17px]
              "
            >
              {config.text_btn}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
