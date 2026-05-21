import type { industriasBase, industriaTipo } from "../types";

export const industriasData : industriasBase[] = [
    {
        id:1,
        titulo:"cartonera",
        descripcion: "Bandas para procesos de corrugado, flexografía, impresión, troquelado, alfombras aspirantes.",
        img:"/images/home/industrias/cartonera.jpg",
        url:"/industrias/cartonera",
        alt:"img-cartonera",
        altura:"alta",
    },
    {
        id:2,
        titulo:"confitería",
        descripcion: "Bandas para procesos de chicle, caramelo macizo, chocolate.",
        img:"/images/home/industrias/confiteria.jpg",
        url:"/industrias/confiteria",
        alt:"img-confiteria",
        altura:null
    },
    {
        id:3,
        titulo:"farmacéutica",
        descripcion: "Bandas para procesos de cuartos limpios, medicamentos y envasado.",
        img:"/images/home/industrias/farmaceutica.jpg",
        url:"/industrias/farmaceutica",
        alt:"img-farmaceutica",
        altura:null
    },
    {
        id:4,
        titulo:"tequilera",
        descripcion: "Bandas para procesos primarios, salida de hornos, envasado y paletizado.",
        img:"/images/home/industrias/tequilera.jpg",
        url:"/industrias/tequilera",
        alt:"img-tequilera",
        altura:null
    },
    {
        id:5,
        titulo:"panificadora",
        descripcion: "Bandas para proceso de horneado, masa, boleado, inyección, enfriado y empacado.",
        img:"/images/home/industrias/panificadora.jpg",
        url:"/industrias/panificadora",
        alt:"img-panificadora",
        altura:"alta"
    },
    {
        id:6,
        titulo:"granos",
        descripcion: "Bandas para procesos de elevación con canjulones, transporte horizontal a granel y envasado.",
        img:"/images/home/industrias/granos.jpg",
        url:"/industrias/granos",
        alt:"img-granos",
        altura:null
    },
    {
        id:7,
        titulo:"chocolatera",
        descripcion: "Bandas para procesos de entrampado, túneles fríos, selección y empacado.",
        img:"/images/home/industrias/chocolatera.jpg",
        url:"/industrias/chocolatera",
        alt:"img-chocolatera",
        altura:null
    },
    {
        id:8,
        titulo:"embotelladora",
        descripcion: "Bandas para procesos desde despaletizado, lavado, etiquetado, envasado, empacado y paletizado.",
        img:"/images/home/industrias/embotelladora.jpg",
        url:"/industrias/embotelladora",
        alt:"img-embotelladora",
        altura:"ancha"
    },
    {
        id:9,
        titulo:"latas",
        descripcion: "Bandas para procesos de troquelado, horneado, pintado, elevadores magnéticos, transporte elevado y producto final.",
        img:"/images/home/industrias/latas.jpg",
        url:"/industrias/latas",
        alt:"img-latas",
        altura:null
    },
    {
        id:10,
        titulo:"piedrera",
        descripcion: "Impacto, peso y condiciones severas.",
        img:"/images/home/industrias/piedrera.jpg",
        url:"/industrias/piedrera",
        alt:"img-piedrera",
        altura:"alta"
    },
    {
        id:11,
        titulo:"llantera",
        descripcion: "Carga pesada y procesos industriales.",
        img:"/images/home/industrias/llantera.jpg",
        url:"/industrias/llantera",
        alt:"img-llantera",
        altura:null
    },
    {
        id:12,
        titulo:"tabacalera",
        descripcion: "Procesos delicados y alta repetibilidad.",
        img:"/images/home/industrias/tabacalera.jpg",
        url:"/industrias/tabacalera",
        alt:"img-tabacalera",
        altura:null
    },
    {
        id:13,
        titulo:"agroalimentaria",
        descripcion: "Higiene, humedad y manejo continuo.",
        img:"/images/home/industrias/agroalimentaria.jpg",
        url:"/industrias/agroalimentaria",
        alt:"img-agroalimentaria",
        altura:"ancha"
    }
]



export const industriasPage : industriaTipo[] = [
    
    { 
    id: 1,
    tipo: "alimentos",
    descripcion : "La industria agroalimentaria abarca una amplia variedad de procesos relacionados con el manejo, transformación y empaque de productos de origen agrícola. En este sector, el transporte interno debe garantizar un flujo continuo del producto sin comprometer su calidad, frescura o integridad, incluso en entornos donde la humedad, el polvo y los residuos orgánicos están presentes de forma constante.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/proceso/imagen1.jpg", titulo: "Transporte de producto a granel" },
      { id: 2, img: "/images/Industria/proceso/imagen2.jpg", titulo: "Transferencia entre etapas de proceso  " },
      { id: 3, img: "/images/Industria/proceso/imagen3.jpg", titulo: "Alimentación de líneas de producción  " },
      { id: 4, img: "/images/Industria/proceso/imagen4.jpg", titulo: "Manejo previo y posterior al empaque" },
    ],


    subtituloCondicion: "En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos de alta exigencia.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/operacion/banda.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/operacion/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.",
      },

      {
        id: 3,
        icono: "/images/Industria/operacion/transporte.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Sistemas de transporte interno que permiten el desplazamiento eficiente de productos a granel o unitarios.",
      },

      {
        id: 4,
        icono: "/images/Industria/operacion/engrane.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Equipos compatibles con sistemas automatizados y semiautomatizados.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  

    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/soli.jpg",
        titulo: "Bandas transportadoras",
        
      },
      

    ],
    
    },


  
    { 
    id: 2,
    tipo: "confitera",
    descripcion : "La industria de la confitería se caracteriza por el manejo de productos de pequeño tamaño y alta rotación, donde la precisión y la repetitividad del proceso son clave. Los sistemas de transporte deben permitir un flujo ordenado y constante del producto, facilitando su transferencia entre procesos de conformado, decoración y empaque.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/confiteria/proceso/imagen1.jpg", titulo: "Transporte de piezas pequeñas " },
      { id: 2, img: "/images/Industria/confiteria/proceso/imagen2.jpg", titulo: "Clasificación y alineación" },
      { id: 3, img: "/images/Industria/confiteria/proceso/imagen3.jpg", titulo: "Transferencia a líneas de empaque" },
    ],


    subtituloCondicion: "En la industria de confitería, las condiciones de operación requieren sistemas de transporte capaces de adaptarse a procesos continuos, variaciones en el producto y altos ritmos de producción, manteniendo el control y la estabilidad a lo largo de cada etapa del proceso.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/confiteria/condicion/icono1.svg",
        titulo: " Procesos continuos",
        descripcion: "Sistemas diseñados para operar de forma continua, asegurando un flujo constante del producto durante todo el proceso.",
      },
      {
        id: 2,
        icono: "/images/Industria/confiteria/condicion/reloj.svg",
        titulo: "Alta velocidad de producción",
        descripcion: "Soluciones capaces de trabajar a altas velocidades, acompañando los ritmos propios de los procesos de confitería sin comprometer la estabilidad.",
      },

      {
        id: 3,
        icono: "/images/Industria/confiteria/condicion/icono3.svg",
        titulo: "Volúmenes variables de producto",
        descripcion: "Equipos que se adaptan a cambios en el volumen y tipo de producto, manteniendo un desempeño confiable en diferentes condiciones de operación.",
      },

      {
        id: 4,
        icono: "/images/Industria/confiteria/condicion/icono4.svg",
        titulo: " Precisión y control en el manejo",
        descripcion: "Sistemas que permiten un manejo preciso y controlado del producto, contribuyendo a la uniformidad y calidad del proceso.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/soli.jpg",
        titulo: "Bandas transportadoras",
        
      },
      

    ],
    },



     { 
    id: 3,
    tipo: "embotelladora",
    descripcion : "La industria embotelladora opera con líneas de alta velocidad donde el manejo estable de envases es crítico. El transporte interno debe asegurar un flujo continuo y sincronizado de botellas o envases a lo largo de procesos como llenado, etiquetado y empaque, minimizando interrupciones y desalineaciones.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/embotelladora/proceso/imagen1.jpg", titulo: "Transporte de envases vacíos y llenos" },
      { id: 2, img: "/images/Industria/embotelladora/proceso/imagen2.jpg", titulo: "Acumulación y transferencia" },
      { id: 3, img: "/images/Industria/embotelladora/proceso/imagen3.jpg", titulo: "Integración con llenado y etiquetado " },
      
    ],


    subtituloCondicion: "En la industria embotelladora, las condiciones de operación requieren sistemas de transporte capaces de trabajar a altas velocidades, mantener un flujo continuo y asegurar un control preciso del producto a lo largo de líneas altamente automatizadas.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/embotelladora/condicion/icono1.svg",
        titulo: "Procesos continuos",
        descripcion: "Sistemas diseñados para operar de forma continua, asegurando un flujo constante del producto a lo largo de la línea.",
      },
      {
        id: 2,
        icono: "/images/Industria/embotelladora/condicion/icono2.svg",
        titulo: "Alta velocidad de producción",
        descripcion: "Soluciones capaces de acompañar ritmos elevados de producción, manteniendo la estabilidad y el control durante el transporte.",
      },

      {
        id: 3,
        icono: "/images/Industria/embotelladora/condicion/icono3.svg",
        titulo: " Precisión en el flujo",
        descripcion: "Equipos que garantizan un manejo preciso del producto, manteniendo alineación, orden y regularidad en el flujo.",
      },

      {
        id: 4,
        icono: "/images/Industria/embotelladora/condicion/icono4.svg",
        titulo: "Sistemas automatizados",
        descripcion: "Sistemas compatibles con líneas altamente automatizadas, facilitando la integración y el control del proceso.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      {
        id: 2,
        img: "/images/Industria/soluciones/margen2.jpg",
        titulo: "Bandas termosoldables",
       
      },
      {
        id: 3,
        img: "/images/Industria/soluciones/margen3.jpg",
        titulo: "Bandas modulares",
       
      },
      {
        id: 4,
        img: "/images/Industria/soluciones/margen4.jpg",
        titulo: "Accesorios técnicos ",
       
      },

    ],
    
    },






    
     { 
    id: 4,
    tipo: "granos",
    descripcion : "La industria de granos comprende procesos de almacenamiento, transformación y distribución de productos a granel. En este entorno, el transporte interno debe soportar altos volúmenes de material y garantizar un flujo constante, incluso en condiciones donde el polvo y la abrasión son factores presentes.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/granos/proceso/imagen1.jpg", titulo: "Transporte de producto a granel" },
      { id: 2, img: "/images/Industria/granos/proceso/imagen2.jpg", titulo: "Alimentos de procesos" },
      { id: 3, img: "/images/Industria/granos/proceso/imagen3.jpg", titulo: "Transporte continuo" },
    ],


    subtituloCondicion: "En la industria de granos, las condiciones de operación demandan sistemas de transporte capaces de manejar grandes volúmenes de producto, operar de forma continua y mantener un flujo estable en entornos industriales exigentes..",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/granos/condicion/icono1.svg",
        titulo: " Procesos continuos",
        descripcion: "Sistemas diseñados para operar de forma continua, asegurando un flujo constante del producto.",
      },
      {
        id: 2,
        icono: "/images/Industria/granos/condicion/icono2.svg",
        titulo: " Altos volúmenes de producto",
        descripcion: "Soluciones capaces de transportar grandes volúmenes de grano, manteniendo eficiencia y estabilidad.",
      },

      {
        id: 3,
        icono: "/images/Industria/granos/condicion/icone3.svg",
        titulo: "Transporte a granel",
        descripcion: "Equipos adecuados para el manejo y traslado de producto a granel entre las distintas etapas del proceso.",
      },

      {
        id: 4,
        icono: "/images/Industria/granos/condicion/icono4.svg",
        titulo: "Entornos exigentes de operación",
        descripcion: "Sistemas preparados para trabajar en condiciones industriales demandantes, garantizando rendimiento y durabilidad.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/granos/solucion/imagen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      
    ],
    
    },





     { 
    id: 5,
    tipo: "latas",
    descripcion : "La industria de latas involucra procesos repetitivos y de alta velocidad para la fabricación y manejo de envases metálicos. Los sistemas de transporte deben garantizar estabilidad, alineación y continuidad del flujo durante etapas como conformado, llenado y empaque.",
    titulo: "Industria latas", 

    procesos: [
      { id: 1, img: "/images/Industria/latas/proceso/imagen1.jpg", titulo: "Transporte de envases vacíos  " },
      { id: 2, img: "/images/Industria/latas/proceso/imagen2.jpg", titulo: "Acumulación y transferencia " },
      { id: 3, img: "/images/Industria/latas/proceso/imagen3.jpg", titulo: "Integración con líneas de llenado " },
    ],


    subtituloCondicion: "En la industria de latas, las condiciones de operación requieren sistemas de transporte capaces de trabajar a altas velocidades, con procesos altamente repetitivos y un control preciso del producto, manteniendo la continuidad operativa a lo largo de la línea.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/latas/condicion/imagen1.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/latas/condicion/imagen2.svg",
        titulo: "Procesos repetitivos y continuos",
        descripcion: "Soluciones capaces de operar de forma continua y repetitiva, asegurando estabilidad y precisión en el flujo.",
      },

      {
        id: 3,
        icono: "/images/Industria/latas/condicion/imagen3.svg",
        titulo: "Precisión en el flujo",
        descripcion: "Equipos que garantizan un flujo preciso y ordenado del producto, evitando errores y desalineaciones.",
      },

      {
        id: 4,
        icono: "/images/Industria/latas/condicion/imagen4.svg",
        titulo: "Automatización del proceso",
        descripcion: "Sistemas compatibles con procesos altamente automatizados, favoreciendo la eficiencia y la integración operativa.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/latas/solucion/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
    
    ],
    
    },





    
     { 
    id: 6,
    tipo: "tabacalera",
    descripcion : "La industria agroalimentaria abarca una amplia variedad de procesos relacionados con el manejo, transformación y empaque de productos de origen agrícola. En este sector, el transporte interno debe garantizar un flujo continuo del producto sin comprometer su calidad, frescura o integridad, incluso en entornos donde la humedad, el polvo y los residuos orgánicos están presentes de forma constante.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/proceso/imagen1.jpg", titulo: "Transporte de producto a granel" },
      { id: 2, img: "/images/Industria/proceso/imagen2.jpg", titulo: "Transferencia entre etapas de proceso  " },
      { id: 3, img: "/images/Industria/proceso/imagen3.jpg", titulo: "Alimentación de líneas de producción  " },
      { id: 4, img: "/images/Industria/proceso/imagen4.jpg", titulo: "Manejo previo y posterior al empaque" },
    ],


    subtituloCondicion: "En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos de alta exigencia.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/operacion/banda.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/operacion/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.",
      },

      {
        id: 3,
        icono: "/images/Industria/operacion/transporte.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Sistemas de transporte interno que permiten el desplazamiento eficiente de productos a granel o unitarios.",
      },

      {
        id: 4,
        icono: "/images/Industria/operacion/engrane.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Equipos compatibles con sistemas automatizados y semiautomatizados.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      {
        id: 2,
        img: "/images/Industria/soluciones/margen2.jpg",
        titulo: "Bandas termosoldables",
       
      },
      {
        id: 3,
        img: "/images/Industria/soluciones/margen3.jpg",
        titulo: "Bandas modulares",
       
      },
      {
        id: 4,
        img: "/images/Industria/soluciones/margen4.jpg",
        titulo: "Accesorios técnicos ",
       
      },

    ],
    
    },




     { 
    id: 7,
    tipo: "llantera",
    descripcion : "La industria llantera integra procesos de manufactura y ensamble que requieren un transporte interno preciso y repetitivo. El sistema de transporte debe facilitar el flujo ordenado de componentes y producto terminado, adaptándose a líneas de producción y estaciones de trabajo.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/llantera/proceso/imagen1.jpg", titulo: "Transporte de componentes" },
      { id: 2, img: "/images/Industria/llantera/proceso/imagen2.jpg", titulo: "Transferencia ente estaciones" },
      { id: 3, img: "/images/Industria/llantera/proceso/imagen3.jpg", titulo: " Manejo de producto terminado " },
    ],


    subtituloCondicion: "En la industria llantera, los sistemas de transporte deben garantizar procesos continuos y repetitivos, integrándose con maquinaria especializada y asegurando precisión y control durante cada etapa de producción.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/llantera/condicion/icono1.svg",
        titulo: "Procesos continuos",
        descripcion: "Sistemas diseñados para acompañar líneas de producción que operan de forma continua.",
      },
      {
        id: 2,
        icono: "/images/Industria/llantera/condicion/icono2.svg",
        titulo: "Procesos repetitivos",
        descripcion: "Equipos preparados para ciclos de trabajo repetidos, manteniendo uniformidad y estabilidad.",
      },

      {
        id: 3,
        icono: "/images/Industria/llantera/condicion/icono3.svg",
        titulo: " Integración con maquinaria",
        descripcion: "Compatibilidad con prensas, extrusoras, hornos de vulcanizado y otros equipos.",
      },

      {
        id: 4,
        icono: "/images/Industria/llantera/condicion/icono4.svg",
        titulo: " Precisión en el manejo",
        descripcion: "Soluciones que aseguran un control preciso del producto durante el transporte, clave para la calidad y eficiencia del proceso.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/llantera/solucion/imagen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      

    ],
    
    },





     { 
    id: 8,
    tipo: "chocolatera",
    descripcion : "La industria chocolatera involucra procesos sensibles donde el control del producto es fundamental en cada etapa. El transporte interno debe adaptarse a piezas delicadas y mantener estabilidad durante operaciones como enfriado, recubrimiento, decoración y empaque, asegurando continuidad del proceso sin afectar la forma ni el acabado del producto.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/chocolatera/proceso/imagen1.jpg", titulo: "Transporte de producto moldeado o recubierto" },
      { id: 2, img: "/images/Industria/chocolatera/proceso/imagen2.jpg", titulo: "Transferencia entre enfriado, decoración y empaque " },
      { id: 3, img: "/images/Industria/chocolatera/proceso/imagen3.jpg", titulo: "Manejo de piezas delicadas" },
    
    ],


    subtituloCondicion: "En la industria chocolatera, las condiciones de operación exigen procesos continuos con un alto nivel de control y estabilidad, capaces de adaptarse a volúmenes variables de producto. Un sistema de transporte adecuado contribuye a mantener la consistencia del proceso y el cuidado del producto a lo largo de cada etapa.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/chocolatera/condicion/icono1.svg",
        titulo: "Procesos continuos",
        descripcion: "Sistemas diseñados para operar de forma continua, manteniendo la estabilidad del proceso.",
      },
      {
        id: 2,
        icono: "/images/Industria/chocolatera/condicion/icono2.svg",
        titulo: " Volúmenes variables",
        descripcion: "Soluciones capaces de adaptarse a cambios en el volumen de producto, manteniendo un flujo constante y eficiente.",
      },

      {
        id: 3,
        icono: "/images/Industria/chocolatera/condicion/icono3.svg",
        titulo: " Estabilidad y control del proceso",
        descripcion: "Sistemas que permiten un manejo controlado del producto, contribuyendo a la uniformidad y calidad del resultado.",
      },

      {
        id: 4,
        icono: "/images/Industria/chocolatera/condicion/icono4.svg",
        titulo: " Precisión del transporte",
        descripcion: "Equipos que aseguran un transporte preciso del producto, reduciendo variaciones y garantizando consistencia en cada etapa.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/chocolatera/solucion/imagen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      

    ],
    
    },





     { 
    id: 9,
    tipo: "panificadora",
    descripcion : "En la industria panificadora, los procesos de producción suelen ser continuos y requieren un transporte eficiente entre etapas como horneado, enfriado y empaque. El sistema de transporte debe acompañar el ritmo de producción, mantener la estabilidad del producto y adaptarse a distintas configuraciones de línea.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/panificadora/proceso/imagen1.jpg", titulo: "Transporte entre horneado, enfriado y empaque" },
      { id: 2, img: "/images/Industria/panificadora/proceso/imagen2.jpg", titulo: "Manejo de producto en línea " },
      { id: 3, img: "/images/Industria/panificadora/proceso/imagen3.jpg", titulo: "Transferencias sincronizadas " },
    ],


    subtituloCondicion: "En la industria panificadora, las condiciones de operación demandan sistemas de transporte capaces de trabajar de forma continua, adaptarse a diferentes ritmos de producción y mantener un manejo estable del producto durante cada etapa del proceso.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/panificadora/condicion/icono1.svg",
        titulo: "Procesos continuos",
        descripcion: "Sistemas diseñados para operar de manera continua, acompañando los flujos constantes propios de las líneas de panificación.",
      },
      {
        id: 2,
        icono: "/images/Industria/panificadora/condicion/icono2.svg",
        titulo: " Integración con maquinaria",
        descripcion: "Soluciones compatibles con hornos, enfriadores y otros equipos del proceso, facilitando la continuidad de la línea de producción.",
      },

      {
        id: 3,
        icono: "/images/Industria/panificadora/condicion/icono3.svg",
        titulo: " Manejo estable del producto",
        descripcion: "Equipos que permiten transportar el producto de forma estable, conservando su forma e integridad durante el proceso.",
      },

      {
        id: 4,
        icono: "/images/Industria/panificadora/condicion/icono4.svg",
        titulo: "Ritmos de producción constantes",
        descripcion: "Sistemas capaces de mantener ritmos de producción uniformes, contribuyendo a la eficiencia y regularidad del proceso.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      {
        id: 2,
        img: "/images/Industria/soluciones/margen2.jpg",
        titulo: "Bandas termosoldables",
       
      },
      {
        id: 3,
        img: "/images/Industria/soluciones/margen3.jpg",
        titulo: "Bandas modulares",
       
      },
      {
        id: 4,
        img: "/images/Industria/soluciones/margen4.jpg",
        titulo: "Accesorios técnicos ",
       
      },

    ],
    
    },





     { 
    id: 10,
    tipo: "tequilera",
    descripcion : "La industria tequilera integra procesos de producción, envasado y empaque que requieren sistemas de transporte confiables y bien coordinados. El manejo de botellas, cajas y productos terminados debe realizarse de forma continua y estable, adaptándose a las condiciones propias del entorno industrial.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/tequilera/proceso/imagen1.jpg", titulo: "Recepción y manejo de materia prima " },
      { id: 2, img: "/images/Industria/tequilera/proceso/imagen2.jpg", titulo: "Control de calidad" },
      { id: 3, img: "/images/Industria/tequilera/proceso/imagen3.jpg", titulo: "Transporte de botellas " },   
    ],


    subtituloCondicion: "En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos de alta exigencia.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/operacion/banda.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/operacion/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.",
      },

      {
        id: 3,
        icono: "/images/Industria/operacion/transporte.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Sistemas de transporte interno que permiten el desplazamiento eficiente de productos a granel o unitarios.",
      },

      {
        id: 4,
        icono: "/images/Industria/operacion/engrane.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Equipos compatibles con sistemas automatizados y semiautomatizados.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/tequilera/solucion/imagen1.jpg",
        titulo: "Bandas transportadoras",      
      },

    ],
    
    },






      { 
    id: 11,
    tipo: "farmaceutica",
    descripcion : "La industria agroalimentaria abarca una amplia variedad de procesos relacionados con el manejo, transformación y empaque de productos de origen agrícola. En este sector, el transporte interno debe garantizar un flujo continuo del producto sin comprometer su calidad, frescura o integridad, incluso en entornos donde la humedad, el polvo y los residuos orgánicos están presentes de forma constante.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/proceso/imagen1.jpg", titulo: "Transporte de producto a granel" },
      { id: 2, img: "/images/Industria/proceso/imagen2.jpg", titulo: "Transferencia entre etapas de proceso  " },
      { id: 3, img: "/images/Industria/proceso/imagen3.jpg", titulo: "Alimentación de líneas de producción  " },
      { id: 4, img: "/images/Industria/proceso/imagen4.jpg", titulo: "Manejo previo y posterior al empaque" },
    ],


    subtituloCondicion: "En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos de alta exigencia.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/operacion/banda.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/operacion/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.",
      },

      {
        id: 3,
        icono: "/images/Industria/operacion/transporte.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Sistemas de transporte interno que permiten el desplazamiento eficiente de productos a granel o unitarios.",
      },

      {
        id: 4,
        icono: "/images/Industria/operacion/engrane.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Equipos compatibles con sistemas automatizados y semiautomatizados.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      {
        id: 2,
        img: "/images/Industria/soluciones/margen2.jpg",
        titulo: "Bandas termosoldables",
       
      },
      {
        id: 3,
        img: "/images/Industria/soluciones/margen3.jpg",
        titulo: "Bandas modulares",
       
      },
      {
        id: 4,
        img: "/images/Industria/soluciones/margen4.jpg",
        titulo: "Accesorios técnicos ",
       
      },

    ],
    
    },



    { 
    id: 12,
    tipo: "cartonera",
    descripcion : "La industria agroalimentaria abarca una amplia variedad de procesos relacionados con el manejo, transformación y empaque de productos de origen agrícola. En este sector, el transporte interno debe garantizar un flujo continuo del producto sin comprometer su calidad, frescura o integridad, incluso en entornos donde la humedad, el polvo y los residuos orgánicos están presentes de forma constante.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/proceso/imagen1.jpg", titulo: "Transporte de producto a granel" },
      { id: 2, img: "/images/Industria/proceso/imagen2.jpg", titulo: "Transferencia entre etapas de proceso  " },
      { id: 3, img: "/images/Industria/proceso/imagen3.jpg", titulo: "Alimentación de líneas de producción  " },
      { id: 4, img: "/images/Industria/proceso/imagen4.jpg", titulo: "Manejo previo y posterior al empaque" },
    ],


    subtituloCondicion: "En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos de alta exigencia.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/operacion/banda.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/operacion/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.",
      },

      {
        id: 3,
        icono: "/images/Industria/operacion/transporte.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Sistemas de transporte interno que permiten el desplazamiento eficiente de productos a granel o unitarios.",
      },

      {
        id: 4,
        icono: "/images/Industria/operacion/engrane.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Equipos compatibles con sistemas automatizados y semiautomatizados.",
      },
    ],



    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      {
        id: 2,
        img: "/images/Industria/soluciones/margen2.jpg",
        titulo: "Bandas termosoldables",
       
      },
      {
        id: 3,
        img: "/images/Industria/soluciones/margen3.jpg",
        titulo: "Bandas modulares",
       
      },
      {
        id: 4,
        img: "/images/Industria/soluciones/margen4.jpg",
        titulo: "Accesorios técnicos ",
       
      },

    ],
    
    },



    { 
    id: 13,
    tipo: "piedrera",
    descripcion : "La industria agroalimentaria abarca una amplia variedad de procesos relacionados con el manejo, transformación y empaque de productos de origen agrícola. En este sector, el transporte interno debe garantizar un flujo continuo del producto sin comprometer su calidad, frescura o integridad, incluso en entornos donde la humedad, el polvo y los residuos orgánicos están presentes de forma constante.",
    titulo: "Industria chocolatera", 

    procesos: [
      { id: 1, img: "/images/Industria/proceso/imagen1.jpg", titulo: "Transporte de producto a granel" },
      { id: 2, img: "/images/Industria/proceso/imagen2.jpg", titulo: "Transferencia entre etapas de proceso  " },
      { id: 3, img: "/images/Industria/proceso/imagen3.jpg", titulo: "Alimentación de líneas de producción  " },
      { id: 4, img: "/images/Industria/proceso/imagen4.jpg", titulo: "Manejo previo y posterior al empaque" },
    ],


    subtituloCondicion: "En la industria agroalimentaria, las condiciones de operación requieren sistemas de transporte capaces de mantener un flujo constante y un manejo controlado del producto, incluso en entornos de alta exigencia.",
    condiciones: [
      {
        id: 1,
        icono: "/images/Industria/operacion/banda.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
      },
      {
        id: 2,
        icono: "/images/Industria/operacion/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo, ordenamiento y clasificación del producto.",
      },

      {
        id: 3,
        icono: "/images/Industria/operacion/transporte.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Sistemas de transporte interno que permiten el desplazamiento eficiente de productos a granel o unitarios.",
      },

      {
        id: 4,
        icono: "/images/Industria/operacion/engrane.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Equipos compatibles con sistemas automatizados y semiautomatizados.",
      },
    ],


    subtituloSolucion: "Configuraciones y productos comúnmente en procesos de esta industria.",  
    soluciones: [
      {
        id: 1,
        img: "/images/Industria/soluciones/margen1.jpg",
        titulo: "Bandas transportadoras",
        
      },
      {
        id: 2,
        img: "/images/Industria/soluciones/margen2.jpg",
        titulo: "Bandas termosoldables",
       
      },
      {
        id: 3,
        img: "/images/Industria/soluciones/margen3.jpg",
        titulo: "Bandas modulares",
       
      },
      {
        id: 4,
        img: "/images/Industria/soluciones/margen4.jpg",
        titulo: "Accesorios técnicos ",
       
      },

    ],
    
    },


]