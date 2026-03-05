import z from "zod";


export const caracteristicaBase = z.object({
    titulo:z.string(),
    contenido:z.string()
})