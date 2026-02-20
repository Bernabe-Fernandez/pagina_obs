import type z from "zod";
import type { industriaBase } from "../schemas/industrias-schema";
import type { productoCardBase } from "../schemas/productos-schema";


export type industriasBase = z.infer<typeof industriaBase>


export type productoCardBase = z.infer<typeof productoCardBase>