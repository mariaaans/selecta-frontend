import React, { useState } from "react";
import { API_URL } from "../config";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "/login";
      } else {
        setMessage(data.message || "Error al registrar usuario");
      }
    } catch (err) {
      setMessage("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="retro-form">
        <h2>Crear cuenta</h2>

        <input
          name="nombre"
          type="text"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        {message && <p className="text-[#FF6B6B] text-sm mt-2">{message}</p>}

        <button
          type="submit"
          className="btn-neon mt-4"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
}

