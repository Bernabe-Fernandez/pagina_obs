import z from "zod";

export const industriaBase = z.object({
    id:z.number(),
    titulo:z.string(),
    descripcion:z.string(),
    url:z.string(),
    img:z.string(),
    alt:z.string(),
    altura:z.string().nullable()
});

export const industriasArray = z.array(
    industriaBase
);