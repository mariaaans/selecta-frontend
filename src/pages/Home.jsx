import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesCanvas from "../components/ParticlesCanvas";
import CursorGlow from "../components/CursorGlow";
import ciudadRetro from "../assets/Ciudad-retro.png";

export default function Home() {
  return (
    <div className="home-container">
      <ParticlesCanvas />
      <CursorGlow />

      <motion.header
        className="home-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home-title">🎮 SELECTA – El Portal Gamer Definitivo</h1>
        <p className="home-subtitle">
          Conecta con tus juegos favoritos, guarda tus aventuras y personaliza tu mundo gamer con estilo retro místico.
        </p>
      </motion.header>

      <motion.nav
        className="home-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Link to="/login" className="home-btn">🔑 Iniciar Sesión</Link>
        <Link to="/register" className="home-btn">✨ Crear Cuenta</Link>
      </motion.nav>

      <motion.section
        className="home-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="home-hero">
          <motion.img
            src={ciudadRetro}
            alt="Ciudad Gamer Retro"
            className="home-image"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />
          <div className="home-text">
            <h2>⚡ Explora. Colecciona. Evoluciona.</h2>
            <p>
              Crea tu biblioteca personalizada, añade reseñas y sigue tus estadísticas en un universo visual que mezcla
              lo pixelado con lo moderno. Todo en un solo lugar.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.footer
        className="home-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>✨ SELECTA – Diseñado con pasión y energía retro • 2025</p>
      </motion.footer>
    </div>
  );
}

