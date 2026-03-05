import z from "zod";



export const vacanteBase = z.object({
    image: z.string(),
    alt: z.string(),
    titulo:z.string()
});