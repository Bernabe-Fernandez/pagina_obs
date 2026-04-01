export default function Industria() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">

      {/* IMÁGENES DE FONDO */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 ">
        <img
          src="/images/bandas/Industrias/alimento.jpg"
          className="w-full h-full object-cover"
          alt="Industria alimentaria"
        />
        <img
          src="/images/bandas/Industrias/empaque.jpg"
          className="w-full h-full object-cover"
          alt="Industria de empaque"
        />
        <img
          src="/images/bandas/Industrias/pesado.jpg"
          className="w-full h-full object-cover"
          alt="Materiales pesados"
        />
        <img
          src="/images/bandas/Industrias/auto.jpg"
          className="w-full h-full object-cover"
          alt="Industria automotriz"
        />
      </div>

      {/* CAPA AZUL TRANSLÚCIDA (TU COLOR EXACTO) */}
      <div className="absolute inset-0">
        {/* Azul claro translúcido */}
        <div className="absolute inset-0 bg-[#4da3ff]/70"></div>

        {/* Degradado azul medio a azul profundo */}
        <div
          className="absolute inset-0 bg-gradient-to-b 
            from-transparent 
            via-[#2a4f7a]/55
            to-[#1e3a5f]/85"
        ></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative w-3/4 mx-auto pt-20">

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-white mb-10 mt-32">
          INDUSTRIAS DONDE SE APLICAN
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-white text-lg leading-relaxed max-w-[700px]">
          Las bandas transportadoras se utilizan ampliamente en industrias como:
          <br />· Alimentaria y bebidas
          <br />· Empaque y transformación
          <br />· Materiales y procesos pesados
          <br />· Automotriz y manufactura
        </p>

      </div>
    </section>
  );
}