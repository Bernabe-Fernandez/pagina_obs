import z from "zod";


export const caracteristicaBase = z.object({
    titulo:z.string(),
    contenido:z.string()
})

export const carroBase = z.object({
    marca:z.string(),
    modelo:z.number(),
    color:z.string()
})