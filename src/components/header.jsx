import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header crt container-app">
      <div className="brand">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="brand-badge"
        >
          <div className="logo-letters">SL</div>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pixel-text"
          >
            SELECTA
          </motion.h1>
          <p className="kicker">Retro • Místico • Arcade</p>
        </div>
      </div>

      <nav className="nav">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="nav-btn">Inicio</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/biblioteca" className="nav-btn">Biblioteca</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/formulario-juego" className="nav-btn">Añadir</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/reseñas" className="nav-btn">Reseñas</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/estadisticas" className="nav-btn">Estadísticas</Link>
        </motion.div>
      </nav>
    </header>
  );
}
