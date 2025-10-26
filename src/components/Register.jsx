import React, { useState } from "react";
import { API_URL } from "../config";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registro exitoso 🎉");
        window.location.href = "/login";
      } else {
        setMessage(data.message || "Error al registrar usuario");
      }
    } catch (err) {
      setMessage("Error de conexión con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="retro-form">
      <h2 className="text-2xl mb-4 neon-title">Crear cuenta</h2>

      <input
        name="nombre"
        type="text"
        placeholder="Nombre completo"
        onChange={handleChange}
        required
      />
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

      {message && <p className="message">{message}</p>}

      <button type="submit" className="btn-neon">
        Registrarse
      </button>
    </form>
  );
}
