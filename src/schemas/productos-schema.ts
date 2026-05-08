import z from "zod";




export const productoCardBase = z.object({
    title: z.string(),
    descripcion:z.string(),
    image:z.string(),
    alt:z.string(),
    url:z.string()
});

//schema para la distribución de productos.

// esquema de las ventajas
export const ventajasBase = z.object({
    id: z.number(),
    titulo:z.string(),
    img:z.string(),
    descripcion: z.string().optional(),
    listaVentajas: z.array(z.string()).optional()
});

// export const ventajasDiferentes = z.object({
//     id:z.number(),
//     titulo:z.string(),
//     img
// })

// esquema para las aplicaciones del producto
export const aplicacionesBase = z.object({
    id:z.number(),
    img:z.string(),
    aplicaciones:z.array(
        z.string()
    )
});

// esquema para los tipos del producto
export const tiposBase = z.object({
    id:z.number(),
    titulo:z.string(),
    img:z.string(),
});

// esquema de las industrias del producto
export const industriasBase = z.object({
    id:z.number(),
    subtitulo:z.string(),
    opciones:z.array(
        z.string()
    )
});

// esquema completo para el tipo producto
export const ProductoBaseSchema = z.object({
    id:z.number(),
    tipo:z.string(),
    subtitulo:z.string(),
    ventajas: z.array(ventajasBase),
    aplicaciones: aplicacionesBase,
    tituloTipo:z.string().optional(),
    subtituloTipo:z.string().optional(),
    tipos:z.array(tiposBase),
    industrias:industriasBase,

});