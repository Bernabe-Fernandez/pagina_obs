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




//Esquema de industrias plantilla. 

export const industriaInfoBase = z.object({
    titulo: z.string(),
    descripcion: z.string(),
    url: z.string(),
    img: z.string(),
    alt: z.string(),
    
});


//Esquema de Procesos.
export const procesosBase = z.object({
  id: z.number(),
  img: z.string(),
  titulo: z.string(),
});

//Esuema de Condicion.
export const condicionItemBase = z.object({
  id: z.number(),
  icono: z.string(),
  titulo: z.string(),
  descripcion: z.string(),
});


export const solucionBase = z.object({
  id: z.number(),
  img: z.string(),
  titulo: z.string(),
});



// Esquema de Soluciones (nuevo formato)
export const solucionesNewBase = z.object({
  id: z.number(),
  img: z.string(),
  titulo: z.string(),
});


// esquema completo para el tipo industria
export const IndustriaBaseShema = z.object({
  id: z.number(),
  titulo:z.string(),
  procesos: z.array(procesosBase),
  condiciones: z.array(condicionItemBase),
  soluciones: z.array(solucionBase),
  solucionesNew: z.array(solucionesNewBase), 
  tipo: z.string(), 
  descripcion: z.string(), 
  subtituloCondicion: z.string(),
  subtituloSolucion: z.string(),
});


