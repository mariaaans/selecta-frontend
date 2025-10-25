import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", form);
    // Aquí luego se conecta al backend: fetch(`${API_URL}/register`, { method: "POST", body: JSON.stringify(form) })
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-bold text-center pixel-text mb-6">Registro</h2>

      <div>
        <label className="block text-sm mb-1">Nombre</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-[#06AED5]"
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Correo electrónico</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-[#06AED5]"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Contraseña</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-[#06AED5]"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-gradient-to-r from-[#FFD166] to-[#06AED5] text-black font-bold rounded-md hover:scale-105 transition-transform"
      >
        Crear cuenta
      </button>

      <p className="text-center text-sm mt-4">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-[#FFD166] hover:underline">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}
