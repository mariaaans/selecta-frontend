import React from "react";
import { Link } from "react-router-dom";
import ParticlesCanvas from "../components/ParticlesCanvas";
import CursorGlow from "../components/CursorGlow";
import ciudadRetro from "../assets/Ciudad-retro.png";
export default function Home() {
  return (
    <div className="home-container">
      <ParticlesCanvas />
      <CursorGlow />
      <header className="home-header">
        <h1 className="home-title">🎮 SELECTA – Tu Portal al Mundo Gamer</h1>
        <p className="home-subtitle">
          Administra tus juegos, descubre nuevos títulos y deja tu huella en cada reseña.
          Un espacio hecho para jugadores que aman cada píxel de su universo digital.
        </p>
      </header>
      <nav className="home-nav">
        <Link to="/biblioteca" className="home-btn">
          📚 Ver Biblioteca
        </Link>
        <Link to="/login" className="home-btn">
          🔑 Iniciar Sesión
        </Link>
        <Link to="/register" className="home-btn">
          ✨ Crear Cuenta
        </Link>
      </nav>
      <section className="home-section">
        <div className="home-hero">
          <img
            src={ciudadRetro}
            alt="Ciudad Gamer Retro"
            className="home-image"
          />
          <div className="home-text">
            <h2>⚡ Explora, colecciona y evoluciona</h2>
            <p>
              Organiza tu colección, agrega reseñas, marca tus logros y sigue tus estadísticas
              mientras recorres un entorno visual retro lleno de energía y estilo.
            </p>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <p>✨ Desarrollado con pasión por el equipo Selecta – Colombia 2025</p>
      </footer>
    </div>
  );
}
