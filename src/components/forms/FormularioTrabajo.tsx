import { useState } from "react";


export default function FormularioTrabajo() {
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
        cv: null as File | null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({
                ...form,
                cv: e.target.files[0]
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };


  return (
    <form
        onSubmit={handleSubmit}
        className="space-y-5"
    >

        {/* Nombre */}
        <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Correo */}
        <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Teléfono + CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={handleChange}
                className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
                type="file"
                name="cv"
                onChange={handleFile}
                className="border border-blue-200 rounded-lg px-4 py-3 file:border-0 file:bg-transparent file:text-blue-700"
            />

        </div>

        {/* Mensaje */}
        <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={6}
            value={form.mensaje}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botón */}
        <div className="flex justify-end">

            <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium transition"
            >
                ENVIAR
            </button>

        </div>

    </form>
  )
}
