import React, { useState } from "react";
import { API_URL } from "../config";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // Guarda el token en localStorage para autenticación
        localStorage.setItem("token", data.token);
        alert("✅ Inicio de sesión exitoso");
        window.location.href = "/biblioteca"; // Redirige a la zona protegida
      } else {
        setError(data.message || "Credenciales inválidas");
      }
    } catch (err) {
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="retro-form">
      <h2 className="text-2xl mb-4 neon-title">Iniciar Sesión</h2>

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

      {error && <p className="error text-[#FF6B6B]">{error}</p>}

      <button
        type="submit"
        className="btn-neon"
        disabled={loading}
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? "Ingresando..." : "Entrar"}
      </button>
    </form>
  );
}

