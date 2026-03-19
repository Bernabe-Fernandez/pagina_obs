
export default function FormularioContacto() {
  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-blue-900/20 shadow-[0_0_20px_rgba(30,58,138,0.25)] flex flex-col justify-start">
      <form className="space-y-3">

        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-3 border border-blue-900 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-3 border border-blue-900 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full p-3 border border-blue-900 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />

          <input
            type="text"
            placeholder="Empresa"
            className="w-full p-3 border border-blue-900 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <textarea
          placeholder="Mensaje"
          rows={8}
          className="w-full p-3 border border-blue-900 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
        ></textarea>

        <div className="flex justify-end">
         <button className="w-32 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition text-sm">
           ENVIAR
        </button>
        </div>



      </form>
    </div>
  );
}

