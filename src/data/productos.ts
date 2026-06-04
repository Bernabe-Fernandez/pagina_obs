// aca formaremos la data a usar para poder mostrar las variantes

import type { productoPage } from "../types";

export const productosList: productoPage[] = [
  {
    id: 1,
    tipo: "bandas",
    subtitulo:
      "Las bandas transportadoras son sistemas diseñados para el traslado continuo de productos a lo largo de un proceso productivo. En Omnibandas ofrecemos soluciones adaptadas a distintos entornos industriales, considerando el tipo de producto, la velocidad de operación y las condiciones de trabajo.",
    ventajas: [
      {
        id: 1,
        img: "/images/bandas/cuadros/cereales.jpg",
        titulo: "Transporte continuo y estable",
      },

      {
        id: 2,
        img: "/images/bandas/cuadros/carnes.jpg",
        titulo: "Versatilidad de configuración ",
      },

      {
        id: 3,
        img: "/images/bandas/cuadros/ban.jpg",
        titulo: "Reducción de paros de producción ",
      },

      {
        id: 4,
        img: "/images/bandas/cuadros/cajas.jpg",
        titulo: "Mejora la eficiencia del proceso",
      },
    ],
    aplicaciones: {
      id: 2,
      img: "/images/bandas/aplicacion/cajas.jpg",
      aplicaciones: [
        "Líneas de producción y ensamblaje",
        "Procesos de empaque y clasificación",
        "Transporte de productos a granel o unitarios",
        "Sistemas automatizados y semiautomatizados",
      ],
    },

    tituloTipo: "TIPOS DE BANDAS TRANSPORTADORAS",
    tipos: [
      {
        id: 1,
        titulo: "Bandas planas (PU / PVC / plásticas)",
        subtituloTipo: "Bandas planas",
        img: "/images/bandas/Tipos/banda1.jpg",
      },
      {
        id: 2,
        titulo: "Bandas con perfiles (Empujadores)",
        subtituloTipo: "Bandas con perfiles",
        img: "/images/bandas/Tipos/banda2.jpg",
      },
      {
        id: 3,
        titulo: "Bandas con guías de alineación",
        subtituloTipo: "Bandas con guías",
        img: "/images/bandas/Tipos/banda3.jpg",
      },
      {
        id: 4,
        titulo: "Bandas especiales por aplicación",
        subtituloTipo: "Bandas especiales",
        img: "/images/bandas/Tipos/banda4.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
    url: "/images/catalagos/productos/bandas t/bandas.pdf", 
  },

  {
    id: 2,
    tipo: "transmision",
    subtitulo:
      "Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/transmision/Ventajas/imagen1.jpg",
        titulo: "Transmisión precisa y sincronizada",
      },
      {
        id: 2,
        img: "/images/productos/transmision/Ventajas/imagen2.jpg",
        titulo: "Alta eficiencia en el movimiento ",
      },
      {
        id: 3,
        img: "/images/productos/transmision/Ventajas/imagen3.jpg",
        titulo: "Reducción de desplazamientos",
      },
      {
        id: 4,
        img: "/images/productos/transmision/Ventajas/imagen4.jpg",
        titulo: "Versatilidad de configuración  ",
      },
    ],
    aplicaciones: {
      id: 3,
      img: "/images/productos/transmision/Aplicaciones/imagen1.jpg",
      aplicaciones: [
        "Sistemas automatizados y maquinaria industrial ",
        "Líneas de manufactura y ensamblaje",
        "Equipos con requerimientos de sincronización ",
        "Procesos de alta precisión y repetividad",
      ],
    },

    tituloTipo: "TIPOS DE BANDAS DE TRANSMISIÓN DE POTENCIA",
    tipos: [
      {
        id: 1,
        titulo: "Bandas dentadas",
        subtituloTipo: "Bandas dentadas",
        img: "/images/productos/transmision/Tipos/banda1.jpg",
      },
      {
        id: 2,
        titulo: "Bandas sincrónicas",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/transmision/Tipos/banda2.jpg",
      },
      {
        id: 3,
        titulo: "Banda doble dentadas ",
        subtituloTipo: "Banda doble dentadas ",
        img: "/images/productos/transmision/Tipos/banda3.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Automotriz y manufactura",
        "Empaque y transformación",
        "Alimentaria (en equipos específicos)",
      ],
    },
     url: "/images/catalagos/productos/transmision/potencia.pdf", 
  },

  {
    id: 3,
    tipo: "guias",
    subtitulo:
      "Las guías son componentes fundamentales en los sistemas de transporte industrial, ya que permiten dirigir el recorrido de la banda, mantener su alineación y mejorar la estabilidad del proceso. Una selección adecuada de guías contribuye a reducir el desgaste, evitar desviaciones y prolongar la vida útil del sistema.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/orientacion/ventajas/imagen1.jpg",
        titulo: "Mejor alineación de la banda ",
      },
      {
        id: 2,
        img: "/images/productos/orientacion/ventajas/imagen2.jpg",
        titulo: "Mayor estabilidad del producto",
      },
      {
        id: 3,
        img: "/images/productos/orientacion/ventajas/imagen3.jpg",
        titulo: "Menor mantenimiento correctivo",
      },
      {
        id: 4,
        img: "/images/productos/orientacion/ventajas/imagen4.jpg",
        titulo: "Optimalización del desempeño del sistema",
      },
    ],
    aplicaciones: {
      id: 3,
      img: "/images/productos/orientacion/aplicacion/imagen1.jpg",
      aplicaciones: [
        "Líneas de producción y ensamblaje",
        "Procesos de empaque y clasificación",
        "Transporte productor o granel unitarios",
        "Sistemas automatizados y semiautomatizados",
      ],
    },

    tituloTipo: "TIPOS DE GUÍAS",
    tipos: [
      {
        id: 1,
        titulo: "Guías de PVC",
        subtituloTipo: "Banda doble dentadas ",
        img: "/images/productos/orientacion/tipos/imagen1.jpg",
      },

      {
        id: 2,
        titulo: "Guías de Uretano",
        subtituloTipo: "Banda doble dentadas ",
        img: "/images/productos/orientacion/tipos/imagen2.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
       url: "/images/catalagos/productos/guias/orientacion.pdf", 
  },



  {
    id: 4,
    tipo: "grapas",
    subtitulo:
      "Las grapas son sistemas mecánicos de unión utilizados para conectar, los extremos de una banda industrial, permitiendo su instalación, reparación o reemplazo de forma eficiente. Son una solución práctica para aplicaciones donde se requiere reducir tiempos de paro y facilitar el mantenimiento en planta.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/grapas/ventajas/grapa1.jpg",
        titulo: "Instalación rápida y sencilla ",
      },
      {
        id: 2,
        img: "/images/productos/grapas/ventajas/grapa2.jpg",
        titulo: "Reducción de tiempos muertos ",
      },
      {
        id: 3,
        img: "/images/productos/grapas/ventajas/grapa3.jpg",
        titulo: "Facilitan el mantenimiento correctivo",
      },
      {
        id: 4,
        img: "/images/productos/grapas/ventajas/grapa4.jpg",
        titulo: "Adaptables a distintos tipos de banda ",
      },

      {
        id: 5,
        img: "/images/productos/grapas/ventajas/grapa5.jpg",
        titulo: "Solución práctica para continuidad operativa",
      },
    ],

    aplicaciones: {
      id: 3,
      img: "/images/productos/grapas/aplicacion/imagen1.jpg",
      aplicaciones: [
        "Empalmes de bandas transportadoras",
        "Reparaciones rápidas en sitio",
        "Sistemas donde no es posible realizar termosoldado",
        "Aplicaciones con necesidad de desmontaje frecuente",
      ],
    },

    tituloTipo: "TIPOS DE GRAPAS",
    tipos: [
      {
        id: 1,
        titulo: "Grapas de alambre ",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/grapas/tipos/grapa1.jpg",
      },

      {
        id: 2,
        titulo: "Grapas tipo bisagra ",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/grapas/tipos/grapa2.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
    url: "/images/catalagos/productos/grapas/grapas.pdf", 
  },



  {
    id: 5,
    tipo: "transportadores",
    subtitulo:
      "La fabricación de transportadores consiste en el diseño y construcción de sistemas completos de transporte industrial, desarrollados a la medida según el tipo de proceso, producto y condiciones de operación. En Omnibandas ofrecemos soluciones integrales que consideran desde la ingeniería hasta la implementación en planta.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/F transportadores/ventajas/imagen1.jpg",
        titulo: "APLICACIONES COMUNES",
        descripcion:
          "La fabricación de transportadores es ideal para procesos como:",
        listaVentajas: [
          "Líneas de producción y ensamble.",
          "Procesos de empaque y clasificación.",
          "Transporte continuo de producto.",
          "Sistemas automatizados y personalizados.",
        ],
      },

      {
        id: 2,
        img: "/images/productos/F transportadores/ventajas/imagen2.jpg",
        titulo: "BENEFICIOS PRINCIPALES",
        listaVentajas: [
          "Soluciones adaptadas al proceso específico.",
          "Optimización del flujo de producción.",
          "Integración con bandas y componentes adecuados.",
          "Mayor eficiencia y confiabilidad operativa.",
          "Reducción de paros y ajustes posteriores.",
        ],
      },
    ],

    aplicacionesViewTwo: [
      {
        id: 1,
        titulo: "Sistemas de transporte especiales",
        descripcion: "",
        img: "/images/productos/F transportadores/aplicacion/imagen1.jpg",
      },
      {
        id: 2,
        titulo: "Modificaciones a equipos existentes",
        descripcion: "",
        img: "/images/productos/F transportadores/aplicacion/imagen2.jpg",
      },
      {
        id: 3,
        titulo: "Soluciones para procesos complejos",
        descripcion: "",
        img: "/images/productos/F transportadores/aplicacion/imagen3.jpg",
      },
      {
        id: 4,
        titulo: "Integraciones técnicas especificas ",
        descripcion: "",
        img: "/images/productos/F transportadores/aplicacion/imagen4.jpg",
      },
    ],

    tituloTipo: "",
    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Automotriz y manufactura",
        "Empaque y transformación",
        "Alimentaria (en equipos específicos)",
      ],
    },



    condiciones: [
  {
    id: 1,
    icono: "/images/productos/F transportadores/tipos/alimentaria.svg",
    titulo: "Industria alimentaria y de bebidas",
    descripcion:
      "Sistemas diseñados para cumplir con requerimientos de higiene, limpieza y operación continua en procesos como preparación, procesamiento, empaque y distribución.",
  },
  {
    id: 2,
    icono: "/images/productos/F transportadores/tipos/manufactura.svg",
    titulo: "Manufactura y procesos industriales",
    descripcion:
      "Sistemas robustos para el traslado de piezas, componentes o productos terminados, adaptados a diferentes ritmos de producción y cargas de trabajo.",
  },
  {
    id: 3,
    icono: "/images/productos/F transportadores/tipos/empaque.svg",
    titulo: "Empaque y transformación",
    descripcion:
      "Soluciones enfocadas en el manejo eficiente del producto, integración con maquinaria existente y optimización de líneas de empaque y embalaje.",
  },
  {
    id: 4,
    icono: "/images/productos/F transportadores/tipos/quimica.svg",
    titulo: "Industria farmacéutica y química",
    descripcion:
      "Transportadores que priorizan la precisión, el control del producto y la compatibilidad con ambientes regulados y procesos sensibles.",
   },
  ],
    url: "/images/catalagos/productos/transportadores/completo.pdf", 
},




  {
    id: 6,
    tipo: "termosoldables",
    subtitulo:
      "Las bandas termosoldables son bandas industriales fabricadas a partir de materiales termoplásticos que permiten su unión mediante procesos de termosoldado, este tipo de banda ofrece gran flexibilidad en el diseño del sistema de transporte, facilitando su adaptación a distintas longitudes, anchos y configuraciones.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/termosoldables/ventajas/imagen1.jpg",
        titulo: "Versatilidad de configuración ",
      },
      {
        id: 2,
        img: "/images/productos/termosoldables/ventajas/imagen2.jpg",
        titulo: "Fácil instalación y ajuste de sitio ",
      },
      {
        id: 3,
        img: "/images/productos/termosoldables/ventajas/imagen3.jpg",
        titulo: "Buena resistencia a la abrasión y desgaste  ",
      },
    ],
    aplicaciones: {
      id: 3,
      img: "/images/productos/termosoldables/aplicacion/imagen1.jpg",
      aplicaciones: [
        "Líneas de producción y empaque",
        "Transporte de productos a granel unitarios",
        "Procesos continuos en la industria alimentaria y farmacéutica",
        "Sistemas con cambios frecuentes de configuración",
      ],
    },

    tituloTipo: "TIPOS DE BANDAS TERMOSOLDABLES",
    tipos: [
      {
        id: 1,
        titulo: "Bandas planas (PU / PVC / plásticas  )",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/bandas/Tipos/banda1.jpg",
      },

      {
        id: 2,
        titulo: "Bandas con perfiles (Empujadores)",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/bandas/Tipos/banda2.jpg",
      },

      {
        id: 3,
        titulo: "Bandas con guías de alineación",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/bandas/Tipos/banda3.jpg",
      },

      {
        id: 4,
        titulo: "Bandas especiales por aplicación ",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/bandas/Tipos/banda4.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas ",
        "Farmacéutica",
        "Empaque y transformación",
        "Manufactura",
      ],
    },
      url: "/images/catalagos/productos/termosoldable/termosoldables.pdf",
  },





  {
    id: 7,
    tipo: "modulares",
    subtitulo:
      "Las bandas modulares esta compuestas por módulos plásticos ensamblados entre sí, lo que permite crear sistemas de transporte flexibles y adaptables a distintas configuraciones. Este tipo de banda facilita mantenimiento, la limpieza y la adaptación del sistema a los requerimientos del proceso.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/modulares/ventajas/imagen1.jpg",
        titulo: "Diseño modular flexible",
        listaVentajas: [],
      },
      {
        id: 2,
        img: "/images/productos/modulares/ventajas/imagen2.jpg",
        titulo: "Fácil mantenimiento y reemplazo de módulos",
        listaVentajas: [],
      },
      {
        id: 3,
        img: "/images/productos/modulares/ventajas/imagen3.jpg",
        titulo: "Alta resistencia al desgaste",
        listaVentajas: [],
      },

      {
        id: 4,
        img: "/images/productos/modulares/ventajas/imagen4.jpg",
        titulo: "Adecuadas para procesos higiénicos  ",
        listaVentajas: [],
      },
      {
        id: 5,
        img: "/images/productos/modulares/ventajas/imagen5.jpg",
        titulo: "Versatilidad de configuración ",
        listaVentajas: [],
      },
    ],
    aplicaciones: {
      id: 3,
      img: "/images/productos/modulares/aplicacion/imagen1.jpg",
      aplicaciones: [
        "Transporte de productos en la industria alimentaria y de bebidas",
        "Líneas de procesamiento y empaque",
        "Sistemas que requieren cambios frecuentes de diseño",
        "Procesos con altos requerimientos de higiene",
      ],
    },

    tituloTipo: "TIPOS DE BANDAS TRANSPORTADORAS",
    tipos: [
      {
        id: 1,
        titulo: "Bandas modulares planas",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/modulares/tipos/imagen1.jpg",
      },

      {
        id: 2,
        titulo: "Bandas modulares con arrastre ",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/modulares/tipos/imagen2.jpg",
      },

      {
        id: 3,
        titulo: "Bandas modulares especiales (según aplicación)",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/modulares/tipos/imagen3.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Farmacéutica",
        "Empaque y transformación",
      ],
    },
     
  },

  {
    id: 8,
    tipo: "olanes",
    subtitulo:
      "Los olanes son perfiles o elementos adicionales que se integran a las bandas industriales para mejorar el arrastre y el control del producto durante el transporte. Son especialmente utilizados en aplicación con inclinación, declive o cuando se requiere mantener el producto en una posición especifica.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/olanes/ventajas/imagen1.jpg",
        titulo: "Mejor control del producto transportado",
      },
      {
        id: 2,
        img: "/images/productos/olanes/ventajas/imagen2.jpg",
        titulo: "Optimización en sistemas inclinados",
      },
      {
        id: 3,
        img: "/images/productos/olanes/ventajas/imagen3.jpg",
        titulo: "Reducción de pérdidas y deslizamientos ",
      },
      {
        id: 4,
        img: "/images/productos/olanes/ventajas/imagen4.jpg",
        titulo: "Adaptación a diferentes tipos de banda ",
      },
    ],
    aplicaciones: {
      id: 3,
      img: "/images/productos/olanes/aplicacion/imagen1.jpg",
      aplicaciones: [
        "Transporte inclinado o vertical",
        "Arrastre de productos a granel",
        "Posicionamiento de productos unitarios",
        "Procesos donde se requiere evitar deslizamientos",
      ],
    },

    tituloTipo: "TIPOS DE OLANES",
    tipos: [
      {
        id: 1,
        titulo: "Bandas dentadas",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/olanes/tipos/imagen1.jpg",
      },

      {
        id: 2,
        titulo: "Bandas sincronicas",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/olanes/tipos/imagen2.jpg",
      },

      {
        id: 3,
        titulo: "Bandas doble dentadas",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/olanes/tipos/imagen3.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
    url: "/images/catalagos/productos/olanes/olanes.pdf",
  },

  {
    id: 9,
    tipo: "empujadores",
    subtitulo:
      "Los empujadores son elementos que se integran en las bandas industriales para mover, separar o redirigir productos a lo largo del sistema de transporte. Se utilizan principalmente en procesos donde se requiere control del flujo, clasificación o posicionamiento preciso del producto.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/empujadores/ventajas/imagen1.jpg",
        titulo: "Transporte continuo y estable",
      },
      {
        id: 2,
        img: "/images/productos/empujadores/ventajas/imagen2.jpg",
        titulo: "Versatilidad de configuración",
      },
      {
        id: 3,
        img: "/images/productos/empujadores/ventajas/imagen3.jpg",
        titulo: "Reducción de paros de producción ",
      },
      {
        id: 4,
        img: "/images/productos/empujadores/ventajas/imagen4.jpg",
        titulo: "Mejora en la eficiencia del proceso ",
      },
    ],
    aplicaciones: {
      id: 3,
      img: "/images/productos/empujadores/aplicacion/imagen1.jpg",
      aplicaciones: [
        "Separación y espaciamiento de productos",
        "Clasificación en líneas de producción",
        "Posicionamiento para procesos posteriores",
        "Sistemas de desvió o transferencia",
      ],
    },

    tituloTipo: "TIPOS DE EMPUJADORES",
    tipos: [
      {
        id: 1,
        titulo: "Empujadores rectos ",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/empujadores/tipos/imagen1.jpg",
      },

      {
        id: 2,
        titulo: "Empujadores especiales según aplicación",
        subtituloTipo: "Bandas sincrónicas ",
        img: "/images/productos/empujadores/tipos/imagen2.jpg",
      },
    ],

    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
     url: "/images/catalagos/productos/empujadores/empujadores.pdf",
  },



  {
    id: 10,
     tipo: "proyectos",
    subtitulo:
      "Los proyectos especiales son soluciones desarrolladas a partir de necesidades específicas que no se resuelven con configuraciones estándar, abordadas mediante ingeniería en aplicación, diseño a la medida y acompañamiento técnico para asegurar que cada solución de adapte al proceso real del cliente.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/proyectos/ventajas/imagen2.jpg",
        titulo: "CUANDO SE REQUIERE UN PROYECTO ESPECIAL",
        descripcion:
          "",
        listaVentajas: [
          "Procesos no estándar o altamente específicos.",
          "Espacios o layouts con restricciones.",
          "Necesidad de integración con equipos existentes.",
         "Problemas recurrentes sin solución convencional.",
          "Requerimientos técnicos particulares del cliente.",
        ],
      },

      {
        id: 2,
        img: "/images/productos/proyectos/ventajas/imagen1.jpg",
        titulo: "QUÉ OFRECEMOS EN PROYECTOS ESPECIALES",
        listaVentajas: [
          "Análisis técnico del proceso.",
          "Diseño de soluciones personalizadas.",
         "Selección de bandas, componentes y sistemas.",
          "Fabricación e integración a la medida.",
          "Acompañamiento durante la implementación.",
        ],
      },
    ],
 
   
    aplicacionesViewTwo: [
      
      {
        id: 1,
        titulo: "Sistemas de transporte especiales",
        descripcion: "",
        img: "/images/productos/proyectos/aplicacion/imagen1.jpg",
      },
      {
        id: 2,
        titulo: "Modificaciones a equipos existentes",
        descripcion: "",
        img: "/images/productos/proyectos/aplicacion/imagen2.jpg",
      },
      {
        id: 3,
        titulo: "Soluciones para procesos complejos",
        descripcion: "",
        img: "/images/productos/proyectos/aplicacion/imagen3.jpg",
      },
      {
        id: 4,
        titulo: "Integraciones técnicas especificas ",
        descripcion: "",
        img: "/images/productos/proyectos/aplicacion/imagen4.jpg",
      },
    ],

    tituloTipo: "",
    

    condiciones: [
  {
    id: 1,
    icono: "/images/productos/proyectos/tipos/analisis.svg",
    titulo: "Análisis del proceso",
    descripcion:
      "Evaluación de las condiciones reales de operación, producto y entorno para definir la solución más adecuada.",
  },
  {
    id: 2,
    icono: "/images/productos/proyectos/tipos/ingenieria.svg",
    titulo: "Ingeniería aplicada",
    descripcion:
      "Desarrollo técnico enfocado en funcionalidad, eficiencia y compatibilidad con el sistema existente.",
  },
  {
    id: 3,
    icono: "/images/productos/proyectos/tipos/adaptabilidad.svg",
    titulo: "Adaptabilidad operativa",
    descripcion:
      "Soluciones pensadas para ajustarse a cambios futuros en el proceso o en el tipo de producto.",
  },
  {
    id: 4,
    icono: "/images/productos/proyectos/tipos/acompañamiento.svg",
    titulo: "Acompañamiento técnico",
    descripcion:
      "Soporte durante las etapas clave del proyecto para asegurar una implementación correcta.",
   },
   ],


 industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
      url: "/images/catalagos/productos/proyectos/completo.pdf", 
  },
  




  
  


{
    id: 11,
    tipo: "herramientas",
    subtitulo: "Las herramientas para bandas industriales son elementos de apoyo utilizados durante la instalación, ajuste y mantenimiento de sistemas de transporte. Su uso adecuado permite realizar trabajos más precisos, seguros y eficientes en planta, reduciendo errores y tiempos de paro.",
    ventajas: [
      {
        id: 1,
        img: "/images/productos/herramientas/ventajas/imagen1.jpg",
        titulo: "APLICACIONES COMÚNES",
        descripcion:
          "Las herramientas se utilizan en distintas etapas del ciclo de vida de una banda, como:",
        listaVentajas: [
           "Instalación de bandas transportadoras y termosoldables.",
           "Ajuste y alineación de sistemas.",
           "Mantenimiento preventivo y correctivo.",
           "Reemplazo de componentes y accesorios.",
        ],
      },

      {
        id: 2,
        img: "/images/productos/herramientas/ventajas/imagen2.jpg",
        titulo: "BENEFICIOS PRINCIPALES",
        listaVentajas: [
           "Mayor precisión en instalación y ajuste.",
           "Reducción de tiempos de mantenimiento.",
           "Mejora en la seguridad durante el trabajo.",
           "Menor desgaste prematuro de bandas.",
           "Optimización de recursos en planta.",
        ],
      },
    ],

    aplicacionesViewTwo: [
      {
        id: 1,
        titulo: "Herramientas manuales para instalación",
        descripcion: "",
        img: "/images/productos/herramientas/tipos/imagen1.jpg",
      },
      {
        id: 2,
        titulo: "Herramientas de ajuste y alineación",
        descripcion: "",
        img: "/images/productos/herramientas/tipos/imagen2.jpg",
      },
      {
        id: 3,
        titulo: "Herramientas para empalme y mantenimiento",
        descripcion: "",
        img: "/images/productos/herramientas/tipos/imagen3.jpg",
      },
      {
        id: 4,
        titulo: "Herramientas especiales según aplicación",
        descripcion: "",
        img: "/images/productos/herramientas/tipos/imagen4.jpg",
      },
    ],

    tituloTipo: "",
    

    condiciones: [
  {
    id: 1,
    icono: "/images/productos/herramientas/aplicacion/icono1.svg",
    titulo: "Instalación segura",
    descripcion:
      "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes, reduciendo riesgos y errores durante la instalación.",
  },
  {
    id: 2,
    icono: "/images/productos/herramientas/aplicacion/icono2.svg",
    titulo: "Ajuste preciso",
    descripcion:
      "Soluciones que permiten alinear y tensar adecuadamente el sistema, asegurando un funcionamiento estable y prolongando la vida útil de la banda.",
  },
  {
    id: 3,
    icono: "/images/productos/herramientas/aplicacion/icono3.svg",
    titulo: "Mantenimiento eficiente",
    descripcion:
      "Equipos pensados para intervenciones rápidas y controladas, optimizando tiempos de paro y facilitando las tareas de mantenimiento preventivo.",
  },
  {
    id: 4,
    icono: "/images/productos/herramientas/aplicacion/icono4.svg",
    titulo: "Operación confiable",
    descripcion:
      "Herramientas que contribuyen a un desempeño constante del sistema, manteniendo la precisión y confiabilidad en la operación diaria.",
   },
  ],
 

    
    industrias: {
      id: 1,
      subtitulo:
        "Las bandas transportadoras se utilizan ampliamente en industrias como:",
      opciones: [
        "Alimentaria y bebidas",
        "Empaque y transformación",
        "Materiales y procesos pesados",
        "Automotriz y manufactura",
      ],
    },
     url: "/images/catalagos/productos/herramientas/industriales.pdf", 
  },
  
];
