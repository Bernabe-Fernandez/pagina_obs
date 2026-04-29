
// aca formaremos la data a usar para poder mostrar las variantes

import type { productoPage } from "../types";

export const productosList :  productoPage[] = [
    {
        id:1,
        tipo:"bandas",
        subtitulo:"Las bandas transportadoras son sistemas diseñados para el traslado continuo de productos a lo largo de un proceso productivo. En Omnibandas ofrecemos soluciones adaptadas a distintos entornos industriales, considerando el tipo de producto, la velocidad de operación y las condiciones de trabajo.",
        ventajas:[
            {
                id:1,
                img:"/images/bandas/cuadros/cereales.jpg",
                titulo:"Transporte continuo y estable"
            },

            {
                id:2,
                img:"/images/bandas/cuadros/carnes.jpg",
                titulo:"Versatilidad de configuración "
            },

             {
                id:3,
                img:"/images/bandas/cuadros/ban.jpg",
                titulo:"Reducción de paros de producción "
            },

            {
                id:4,
                img:"/images/bandas/cuadros/cajas.jpg",
                titulo:"Mejora la eficiencia del proceso"
            },

        ],
        aplicaciones:{
            id:2,
            img:"/images/bandas/aplicacion/cajas.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios",
                "Sistemas automatizados y semiautomatizados",
            ]
        },
        tipos:[
            {
                id:1,
                titulo:"Bandas planas (PU / PVC / plásticas  )",
                img:"/images/bandas/Tipos/banda1.jpg"
            },

            {
                id:2,
                titulo:"Bandas con perfiles (Empujadores)",
                img:"/images/bandas/Tipos/banda2.jpg"
            },

             {
                id:3,
                titulo:"Bandas con guías de alineación",
                img:"/images/bandas/Tipos/banda3.jpg"
            },
            
            {
                id:4,
                titulo:"Bandas especiales por aplicación ",
                img:"/images/bandas/Tipos/banda4.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Alimentaria y bebidas",
                "Empaque y transformación",
                "Materiales y procesos pesados",
                "Automotriz y manufactura",
            ]
        },

    },

    
    {
        id:2,
        tipo:"transmision",
        subtitulo:"Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa.",
        ventajas:[
            {
                id:1,
                img:"/images/productos/transmision/Ventajas/imagen1.jpg",
                titulo:"Transmisión precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/transmision/Ventajas/imagen2.jpg",
                titulo:"Alta eficiencia en el movimiento "
            },
            {
                id:3,
                img:"/images/productos/transmision/Ventajas/imagen3.jpg",
                titulo:"Reducción de desplazamientos"
            },
            {
                id:4,
                img:"/images/productos/transmision/Ventajas/imagen4.jpg",
                titulo:"Versatilidad de configuración  "
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Sistemas automatizados y maquinaria industrial ",
                "Líneas de manufactura y ensamblaje",
                "Equipos con requerimientos de sincronización ",
                "Procesos de alta precisión y repetividad",
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincrónicas ",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    },
    


{
        id:3,
        tipo:"guias",
        subtitulo:"Las guías son componentes fundamentales en los sistemas de transporte industrial, ya que permiten dirigir el recorrido de la banda, mantener su alineación y mejorar la estabilidad del proceso. Una selección adecuada de guías contribuye a reducir el desgaste, evitar desviaciones y prolongar la vida útil del sistema.",
        ventajas:[
            {
                id:1,
                img:"/images/productos/orientacion/ventajas/imagen1.jpg",
                titulo:"Mejor alineación de la banda "
            },
            {
                id:2,
                img:"/images/productos/orientacion/ventajas/imagen2.jpg",
                titulo:"Mayor estabilidad del producto"
            },
            {
                id:3,
                img:"/images/productos/orientacion/ventajas/imagen3.jpg",
                titulo:"Menor mantenimiento correctivo"
            },
            {
                id:4,
                img:"/images/productos/orientacion/ventajas/imagen4.jpg",
                titulo:"Optimalización del desempeño del sistema"
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/orientacion/aplicacion/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte productor o granel unitarios",
                "Sistemas automatizados y semiautomatizados",
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Guías de PVC",
                img:"/images/productos/orientacion/tipos/imagen1.jpg"
            },


            {
                id:2,
                titulo:"Guías de Uretano",
                img:"/images/productos/orientacion/tipos/imagen2.jpg"
            },


       
        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Alimentaria y bebidas",
                "Empaque y transformación",
                "Materiales y procesos pesados",
                "Automotriz y manufactura",
              ]
        }
    },
 
  
 
   



   {
        id:4,
        tipo:"grapas",
        subtitulo:"Las grapas son sistemas mecánicos de unión utilizados para conectar, los extremos de una banda industrial, permitiendo su instalación, reparación o reemplazo de forma eficiente. Son una solución práctica para aplicaciones donde se requiere reducir tiempos de paro y facilitar el mantenimiento en planta.",
        ventajas:[
            {
                id:1,
                img:"/images/productos/grapas/ventajas/grapa1.jpg",
                titulo:"Instalación rápida y sencilla "
            },
            {
                id:2,
                img:"/images/productos/grapas/ventajas/grapa2.jpg",
                titulo:"Reducción de tiempos muertos "
            },
            {
                id:3,
                img:"/images/productos/grapas/ventajas/grapa3.jpg",
                titulo:"Facilitan el mantenimiento correctivo"
            },
            {
                id:4,
                img:"/images/productos/grapas/ventajas/grapa4.jpg",
                titulo:"Adaptables a distintos tipos de banda "
           
            },
          
        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/grapas/aplicacion/imagen1.jpg",
            aplicaciones:[
                 
               "Empalmes de bandas transportadoras",
               "Reparaciones rápidas en sitio",
               "Sistemas donde no es posible realizar termosoldado",
               "Aplicaciones con necesidad de desmontaje frecuente",

            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Grapas de alambre ",
                img:"/images/productos/grapas/tipos/grapa1.jpg"
            },


            {
                id:2,
                titulo:"Grapas tipo bisagra ",
                img:"/images/productos/grapas/tipos/grapa2.jpg"
            },




        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
               "Alimentaria y bebidas",
                "Empaque y transformación",
                "Materiales y procesos pesados",
                "Automotriz y manufactura",
              ]
        }
    },
 




     {
        id:5,
        tipo:"transportadores",
        subtitulo:"Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa. .",
        ventajas:[
            {
                id:1,
                img:"/images/productos/orientacion/ventajas/imagen1.jpg",
                titulo:"Transmicion precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/orientacion/ventajas/imagen2.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"/images/productos/orientacion/ventajas/imagen3.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:4,
                img:"/images/productos/orientacion/ventajas/imagen4.jpg",
                titulo:"Transporte continuo y establ"
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincronicas",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    },
 

  
  {
        id:6,
        tipo:"termosoldables",
        subtitulo:"Las bandas termosoldables son bandas industriales fabricadas a partir de materiales termoplásticos que permiten su unión mediante procesos de termosoldado, este tipo de banda ofrece gran flexibilidad en el diseño del sistema de transporte, facilitando su adaptación a distintas longitudes, anchos y configuraciones.",
        ventajas:[
            {
                id:1,
                img:"/images/productos/termosoldables/ventajas/imagen1.jpg",
                titulo:"Transmicion precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/termosoldables/ventajas/imagen2.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"/images/productos/termosoldables/ventajas/imagen3.jpg",
                titulo:"Transporte continuo y establ"
            },
          
        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincronicas",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    },
 
  



   {
        id:7,
        tipo:"modulares",
        subtitulo:"Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa. .",
        ventajas:[
            {
                id:1,
                img:"/images/productos/orientacion/ventajas/imagen1.jpg",
                titulo:"Transmicion precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/orientacion/ventajas/imagen2.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"/images/productos/orientacion/ventajas/imagen3.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:4,
                img:"/images/productos/orientacion/ventajas/imagen4.jpg",
                titulo:"Transporte continuo y establ"
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincronicas",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    },





  {
        id:8,
        tipo:"olanes",
        subtitulo:"Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa. .",
        ventajas:[
            {
                id:1,
                img:"/images/productos/orientacion/ventajas/imagen1.jpg",
                titulo:"Transmicion precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/orientacion/ventajas/imagen2.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"/images/productos/orientacion/ventajas/imagen3.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:4,
                img:"/images/productos/orientacion/ventajas/imagen4.jpg",
                titulo:"Transporte continuo y establ"
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincronicas",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    },






  {
        id:9,
        tipo:"empujadores",
        subtitulo:"Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa. .",
        ventajas:[
            {
                id:1,
                img:"/images/productos/orientacion/ventajas/imagen1.jpg",
                titulo:"Transmicion precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/orientacion/ventajas/imagen2.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"/images/productos/orientacion/ventajas/imagen3.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:4,
                img:"/images/productos/orientacion/ventajas/imagen4.jpg",
                titulo:"Transporte continuo y establ"
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincronicas",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    },






 {
        id:10,
        tipo:"proyectos",
        subtitulo:"Las bandas de transmisión de potencia son componentes que transmiten movimiento y fuerza entre ejes en equipos y sistemas industriales, ofreciendo soluciones adaptadas a aplicaciones que requieren control, precisión y eficiencia operativa. .",
        ventajas:[
            {
                id:1,
                img:"/images/productos/orientacion/ventajas/imagen1.jpg",
                titulo:"Transmicion precisa y sincronizada"
            },
            {
                id:2,
                img:"/images/productos/orientacion/ventajas/imagen2.jpg",
                titulo:"Prueba"
            },
            {
                id:3,
                img:"/images/productos/orientacion/ventajas/imagen3.jpg",
                titulo:"Transporte continuo y establ"
            },
            {
                id:4,
                img:"/images/productos/orientacion/ventajas/imagen4.jpg",
                titulo:"Transporte continuo y establ"
           
            },

        ],
        aplicaciones:{
            id:3,
            img:"/images/productos/transmision/Aplicaciones/imagen1.jpg",
            aplicaciones:[
                "Líneas de producción y ensamblaje",
                "Procesos de empaque y clasificación",
                "Transporte de productos a granel o unitarios"
            ]

        },
        tipos:[
            {
                id:1,
                titulo:"Bandas dentadas",
                img:"/images/productos/transmision/Tipos/banda1.jpg"
            },


            {
                id:2,
                titulo:"Bandas sincronicas",
                img:"/images/productos/transmision/Tipos/banda2.jpg"
            },


           {
                id:3,
                titulo:"Bandas doble dentadas",
                img:"/images/productos/transmision/Tipos/banda3.jpg"
            },


        ],
        industrias:{
            id:1,
            subtitulo:"Las bandas transportadoras se utilizan ampliamente en industrias como:",
            opciones:[
                "Automotriz y manufactura",
                "Empaque y transformación",
                "Alimentaria (en equipos específicos)"
              ]
        }
    }



];