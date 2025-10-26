import React, { useState } from "react";
import { api } from "../api";

export default function FormularioJuego({ onSave }) {
  const [juego, setJuego] = useState({ titulo: "", descripcion: "", portada: "" });

  const handleChange = (e) => {
    setJuego({ ...juego, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/juegos", juego);
    onSave && onSave();
    setJuego({ titulo: "", descripcion: "", portada: "" });
  };

  return (
    <form className="formulario-juego" onSubmit={handleSubmit}>
      <h2>🎮 Agregar / Editar Juego</h2>
      <input name="titulo" placeholder="Título" value={juego.titulo} onChange={handleChange} required />
      <textarea name="descripcion" placeholder="Descripción" value={juego.descripcion} onChange={handleChange} required />
      <input name="portada" placeholder="URL de portada" value={juego.portada} onChange={handleChange} required />
      <button type="submit" className="btn-mistico">Guardar juego ✨</button>
    </form>
  );
}
