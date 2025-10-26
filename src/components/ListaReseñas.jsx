import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function ListaReseñas() {
  const [resenas, setResenas] = useState([]);

  useEffect(() => {
    api.get("/resenas").then(setResenas);
  }, []);

  return (
    <section className="lista-resenas">
      <h2>🗒️ Reseñas de Jugadores</h2>
      {resenas.map((r) => (
        <article key={r.id} className="tarjeta-resena">
          <h3>{r.juego}</h3>
          <p>{r.comentario}</p>
          <p>⭐ {r.estrellas}/5</p>
        </article>
      ))}
    </section>
  );
}
