import React from "react";
import { motion } from "framer-motion";

export default function TarjetaJuego({ juego }) {
  // Si no tiene portada, no se muestra la tarjeta
  if (!juego.portada || juego.portada === "") return null;

  return (
    <motion.article
      layout
      whileHover={{ scale: 1.04, y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="card-game"
    >
      <div
        className="cover"
        style={{ backgroundImage: `url(${juego.portada})` }}
      >
        <div className="pixel-grid" />
      </div>

      <div className="card-body">
        <div className="meta">
          <div className="title">{juego.title}</div>
          <div className="sub small">{juego.genre} • {juego.hours} hrs</div>
        </div>
        <div className="badge">{juego.rating}★</div>
      </div>
    </motion.article>
  );
}

