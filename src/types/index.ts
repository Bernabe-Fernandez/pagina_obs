import type z from "zod";
import type { condicionItemBase, industriaBase, procesosBase, solucionBase } from "../schemas/industrias-schema";
import type { IndustriaBaseShema } from "../schemas/industrias-schema";
import type { aplicacionesBase, aplicacionesViewTwoBase, condicionBase, industriasBase, ProductoBaseSchema, productoCardBase, tiposBase, ventajasBase } from "../schemas/productos-schema";
import type { caracteristicaBase } from "../schemas/caracteristicas-schema";
import type { vacanteBase } from "../schemas/vacantes-schema";


export type industriasBase = z.infer<typeof industriaBase>


export type productoCardBase = z.infer<typeof productoCardBase>


export type caracteristicaType = z.infer<typeof caracteristicaBase>


export type vacanteCardBase = z.infer<typeof vacanteBase>

export type productoPage = z.infer<typeof ProductoBaseSchema>
export type ventajasTipo = z.infer<typeof ventajasBase>
export type aplicacionesTipo = z.infer<typeof aplicacionesBase>
export type tiposTipo = z.infer<typeof tiposBase>;
export type industriasTipo = z.infer<typeof industriasBase>
export type aplicacionesViewTwoTipo = z.infer<typeof aplicacionesViewTwoBase>;
export type condicionTipo = z.infer<typeof condicionBase>;



//Tipos de industria
export type procesoTipo = z.infer<typeof procesosBase>;
export type condicionItemTipo = z.infer<typeof condicionItemBase>;
export type solucionTipo = z.infer<typeof solucionBase>;
export type industriaTipo = z.infer<typeof IndustriaBaseShema>;
