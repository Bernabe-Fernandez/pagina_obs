
// aca formaremos la data a usar para poder mostrar las variantes

import type { productoPage } from "../types";

export const productosList :  productoPage[] = [
    {
        id:1,
        tipo:"bandas",
        subtitulo:"Las bandas transportadoras son sistemas diseñados para el traslado continuo de productos a lo largo de un proceso productivo. En Omnibandas ofrecemos soluciones adaptadas a distintos entornos industriales, considerando el tipo de producto, la velocidad de operación y las condiciones de trabajos.",
        ventajas:[
            {
                id:1,
                img:"/images/bandas/cuadros/cereales.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:2,
                img:"/images/bandas/cuadros/cajas.jpg",
                titulo:"prueba de objecto ventaja"
            }
        ],
        aplicaciones:{
            id:1,
            img:"img.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]
        },
        tipos:[
            {
                id:1,
                titulo:"Bandas planas (PU / PVC / Plásticas)",
                img:"tipo_1.jpg"
            },
            {
                id:2,
                titulo:"Bandas con perfiles (Empujadores)",
                img:"tipo_2.jpg"
            }
        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Alimentaria y bebidas",
                "Empaque y transformación"
            ]
        },

    },
    {
        id:10,
        tipo:"transmision",
        subtitulo:"Las bandas de transmision de potencia son componentes.",
        ventajas:[
            {
                id:1,
                img:"ventaja_1.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:2,
                img:"ventaja_1.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"ventaja_1.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:4,
                img:"ventaja_1.jpg",
                titulo:"Transporte continuo y establ"
            },
        ],
        aplicaciones:{
            id:1,
            img:"img.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]
        },
        tipos:[
            {
                id:1,
                titulo:"Bandas planas (PU / PVC / Plásticas)",
                img:"tipo_1.jpg"
            },
            {
                id:2,
                titulo:"Bandas con perfiles (Empujadores)",
                img:"tipo_2.jpg"
            }
        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Alimentaria y bebidas",
                "Empaque y transformación"
            ]
        },

    }
];