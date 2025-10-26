import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function EstadisticasPersonales() {
  const [stats, setStats] = useState({ completados: 0, horas: 0, favoritos: 0 });

  useEffect(() => {
    api.get("/usuarios/estadisticas").then(setStats);
  }, []);

  return (
    <section className="estadisticas">
      <h2>📈 Tus estadísticas místicas</h2>
      <div className="stats-grid">
        <div className="stat-card">🎮 Juegos completados: {stats.completados}</div>
        <div className="stat-card">⏰ Horas jugadas: {stats.horas}</div>
        <div className="stat-card">⭐ Favoritos: {stats.favoritos}</div>
      </div>
    </section>
  );
}
