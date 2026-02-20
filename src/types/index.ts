import type z from "zod";
import type { industriaBase } from "../schemas/industrias-schema";


export type industriasBase = z.infer<typeof industriaBase>