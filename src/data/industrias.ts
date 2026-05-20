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
    id: 4,
    tipo: "granos",
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
    id: 5,
    tipo: "latas",
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
    id: 8,
    tipo: "chocolatera",
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
    id: 9,
    tipo: "panificadora",
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
    id: 10,
    tipo: "tequilera",
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