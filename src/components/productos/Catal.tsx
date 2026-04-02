import Manual from "../Catalogo/Manual";

export default function Catal() {
  return (
    <section className="w-full flex justify-center py-6 px-4">
      <div className="bg-white shadow-2xl rounded-lg p-6 max-w-5xl w-full relative overflow-hidden">

        {/* Truco para que la sombra superior sea visible */}
        <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent"></div>

        {/* Contenedor que controla el tamaño del recuadro */}
        <div className="w-full min-h-[720px] flex flex-col justify-start">

          {/* Manual dentro del recuadro */}
          <div className="w-full manual-wrapper">
            <Manual />
          </div>

        </div>
      </div>

      {/* ESTILOS PARA TEXTO Y BOTONES DE MANUAL */}
      <style>
        {`
          /* PREGUNTA (más grande) */
          .manual-wrapper h2,
          .manual-wrapper h1 {
            font-size: 28px !important;
            font-weight: 700 !important;
            margin-bottom: 6px !important;
            line-height: 1.2 !important;
          }

          /* RESPUESTA (más pequeña) */
          .manual-wrapper p {
            font-size: 18px !important;
            margin-top: 0px !important;
            margin-bottom: 10px !important;
            line-height: 1.3 !important;
          }

          /* Reducir separación entre pregunta y respuesta */
          .manual-wrapper h2 + p,
          .manual-wrapper h1 + p {
            margin-top: 2px !important;
          }

          /* Subir la banda (imagen) */
          .manual-wrapper img {
            margin-top: -10px !important;
          }

           /* Forzar que los botones estén uno debajo del otro */
  .manual-wrapper a,
  .manual-wrapper button {
    display: block !important;
    width: 100% !important;
    margin-bottom: 14px !important;
    padding: 16px !important;
    font-size: 18px !important;
    text-align: center !important;
  }

  /* Forzar que el contenedor de botones sea vertical */
  .manual-wrapper a + a,
  .manual-wrapper button + button,
  .manual-wrapper a + button,
  .manual-wrapper button + a {
    margin-top: 14px !important;
  }
        `}
      </style>
    </section>
  );
}
