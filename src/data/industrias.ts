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
    titulo: "alimentos",
    descripcion: "Industria dedicada a la producción de chocolate y derivados.",
    url: "chocolatera",
    img: "/images/industrias/chocolatera.jpg",
    alt: "Industria chocolatera",

    procesos: [
      { id: 1, img: "/images/procesos/choco1.jpg", titulo: "Transporte de producto moldeado" },
      { id: 2, img: "/images/procesos/choco2.jpg", titulo: "Transferencia entre enfriado y empaque" },
      { id: 3, img: "/images/procesos/choco3.jpg", titulo: "Manejo de piezas delicadas" },
    ],

    condiciones: [
      {
        id: 1,
        icono: "/icons/produccion.svg",
        titulo: "Líneas de producción y ensamblaje",
        descripcion: "Herramientas diseñadas para facilitar el montaje correcto de bandas y componentes.",
      },
      {
        id: 2,
        icono: "/icons/empaque.svg",
        titulo: "Procesos de empaque y clasificación",
        descripcion: "Soluciones que facilitan el manejo y clasificación del producto.",
      },
    ],

    soluciones: [
      {
        id: 1,
        img: "/images/soluciones/bandas-transportadoras.jpg",
        titulo: "Bandas transportadoras",
        descripcion: "Soluciones para el transporte continuo de producto en líneas de producción.",
      },
      {
        id: 2,
        img: "/images/soluciones/bandas-termosoldables.jpg",
        titulo: "Bandas termosoldables",
        descripcion: "Ideales para procesos que requieren higiene y resistencia a la humedad.",
      },
    ],
    },






]