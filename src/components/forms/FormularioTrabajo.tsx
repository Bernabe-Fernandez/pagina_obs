import axios from "axios";
import { useRef, useState } from "react";

export default function FormularioTrabajo() {
    const [form, setForm] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
        cv: null as File | null
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({ ...form, cv: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!form.nombre.trim()) throw new Error("Ingrese su nombre");
            if (!form.correo.trim()) throw new Error("Ingrese su correo");
            if (!form.telefono.trim()) throw new Error("Ingrese su teléfono");
            if (!form.mensaje.trim()) throw new Error("Ingrese un mensaje");
            if (!form.cv) throw new Error("Adjunte su currículum");

            if (form.cv.type !== "application/pdf") {
                throw new Error("El currículum debe ser PDF");
            }

            const maxSize = 5 * 1024 * 1024;
            if (form.cv.size > maxSize) {
                throw new Error("El archivo excede los 5 MB permitidos");
            }

            const formData = new FormData();
            formData.append("nombre", form.nombre);
            formData.append("correo", form.correo);
            formData.append("telefono", form.telefono);
            formData.append("mensaje", form.mensaje);
            formData.append("curriculum", form.cv);

            const response = await axios.post(
                "https://api.omnibandas.com/vacantes.php",
                formData
            );

            alert(response.data.mensaje);

            setForm({
                nombre: "",
                correo: "",
                telefono: "",
                mensaje: "",
                cv: null
            });

            if (fileInputRef.current) fileInputRef.current.value = "";

        } catch (error: any) {
            const mensaje = error?.response?.data?.mensaje || error.message;
            alert(mensaje);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* Nombre */}
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                className="
                    w-full border border-blue-200 rounded-lg px-4 py-3 outline-none
                    transition-all duration-300
                    hover:border-2 hover:border-blue-500
                    focus:ring-2 focus:ring-blue-400
                "
            />

            {/* Correo */}
            <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={form.correo}
                onChange={handleChange}
                className="
                    w-full border border-blue-200 rounded-lg px-4 py-3 outline-none
                    transition-all duration-300
                    hover:border-2 hover:border-blue-500
                    focus:ring-2 focus:ring-blue-400
                "
            />

            {/* Teléfono + CV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="
                        w-full border border-blue-200 rounded-lg px-4 py-3 outline-none
                        transition-all duration-300
                        hover:border-2 hover:border-blue-500
                        focus:ring-2 focus:ring-blue-400
                    "
                />

                <input
                    type="file"
                    name="cv"
                    ref={fileInputRef}
                    onChange={handleFile}
                    className="
                        w-full border border-blue-200 rounded-lg px-4 py-3 outline-none bg-white
                        transition-all duration-300
                        hover:border-2 hover:border-blue-500
                        focus:ring-2 focus:ring-blue-400
                        file:border-0 file:bg-transparent file:text-blue-700
                    "
                />

            </div>

            {/* Mensaje */}
            <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={6}
                value={form.mensaje}
                onChange={handleChange}
                className="
                    w-full border border-blue-200 rounded-lg px-4 py-3 resize-none outline-none
                    transition-all duration-300
                    hover:border-2 hover:border-blue-500
                    focus:ring-2 focus:ring-blue-400
                "
            />

            {/* Botón */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="
                        bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium
                        transition-all duration-300
                    "
                >
                    ENVIAR
                </button>
            </div>

        </form>
    );
}

