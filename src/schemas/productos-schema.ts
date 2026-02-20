import z from "zod";


export const productoCardBase = z.object({
    title: z.string(),
    descripcion:z.string(),
    image:z.string(),
    alt:z.string(),
    url:z.string()
});

