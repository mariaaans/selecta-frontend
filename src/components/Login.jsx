import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de inicio:", form);
    // Aquí luego se conecta con el backend: fetch(`${API_URL}/login`, { method: "POST", body: JSON.stringify(form) })
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-2xl font-bold text-center pixel-text mb-6">Iniciar Sesión</h2>

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
        className="w-full py-2 mt-4 bg-gradient-to-r from-[#06AED5] to-[#FFD166] text-black font-bold rounded-md hover:scale-105 transition-transform"
      >
        Entrar
      </button>

      <p className="text-center text-sm mt-4">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-[#FFD166] hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </form>
  );
}
