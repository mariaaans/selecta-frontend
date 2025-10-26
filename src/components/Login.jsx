import React, { useState } from "react";
import { API_URL } from "../config";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Inicio de sesión exitoso 🎮");
        window.location.href = "/home";
      } else {
        setError(data.message || "Credenciales inválidas");
      }
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="retro-form">
      <h2 className="text-2xl mb-4 neon-title">Inicia Sesión</h2>

      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={handleChange}
        required
      />

      {error && <p className="error">{error}</p>}

      <button type="submit" className="btn-neon">
        Entrar
      </button>
    </form>
  );
}
