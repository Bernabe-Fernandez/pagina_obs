import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormularioContacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    empresa: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    // Validaciones
    if (!form.nombre.trim()) throw new Error("Ingrese su nombre");
    if (!form.correo.trim()) throw new Error("Ingrese su correo");
    if (!form.telefono.trim()) throw new Error("Ingrese su teléfono");
    if (!form.mensaje.trim()) throw new Error("Ingrese un mensaje");
    if (!form.empresa.trim()) throw new Error("Ingrese su empresa");

    // Enviar datos al backend
    const response = await axios.post(
      "http://localhost/obsforms/contactos.php",
      form,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    // SweetAlert2 - Éxito (mensaje actualizado)
    Swal.fire({
      title: "Datos enviados correctamente",
      text: response.data.mensaje,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#1e3a8a",
      background: "#f8fafc",
      color: "#1e3a8a"
    });

    // Limpiar formulario
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      empresa: "",
      mensaje: ""
    });

  } catch (error: any) {
    const mensaje = error?.response?.data?.mensaje || error.message;

    // SweetAlert2 - Error
    Swal.fire({
      title: "Error",
      text: mensaje,
      icon: "error",
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#b91c1c",
      background: "#fef2f2",
      color: "#7f1d1d"
    });
  }
};

  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-blue-900/20 shadow-[0_0_20px_rgba(30,58,138,0.25)] flex flex-col justify-start">
      <form onSubmit={handleSubmit} className="space-y-3">
        
        {/* Nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-blue-500 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Correo */}
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={form.correo}
          onChange={handleChange}
          className="w-full p-3 border border-blue-500 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Teléfono + Empresa */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            className="w-full p-3 border border-blue-500 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={form.empresa}
            onChange={handleChange}
            className="w-full p-3 border border-blue-500 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mensaje */}
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows={8}
          value={form.mensaje}
          onChange={handleChange}
          className="w-full p-3 border border-blue-500 rounded-lg text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Botón */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-32 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition text-sm"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}

