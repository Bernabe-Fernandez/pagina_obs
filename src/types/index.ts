import type z from "zod";
import type { industriaBase } from "../schemas/industrias-schema";
import type { ProductoBaseSchema, productoCardBase, ventajasBase } from "../schemas/productos-schema";
import type { caracteristicaBase } from "../schemas/caracteristicas-schema";
import type { vacanteBase } from "../schemas/vacantes-schema";


export type industriasBase = z.infer<typeof industriaBase>


export type productoCardBase = z.infer<typeof productoCardBase>


export type caracteristicaType = z.infer<typeof caracteristicaBase>


export type vacanteCardBase = z.infer<typeof vacanteBase>

export type productoPage = z.infer<typeof ProductoBaseSchema>
export type ventajasTipo = z.infer<typeof ventajasBase>

