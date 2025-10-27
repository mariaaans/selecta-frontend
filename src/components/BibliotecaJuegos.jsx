import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TarjetaJuego from "./TarjetaJuego";
import { api } from "../api";

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarJuegos = async () => {
      try {
        const data = await api.get("/juegos"); // 🔗 se conecta con tu backend
        setJuegos(data);
      } catch (err) {
        console.error("Error cargando juegos:", err);
      } finally {
        setLoading(false);
      }
    };
    cargarJuegos();
  }, []);

  return (
    <section className="container-app text-center mt-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pixel-text text-xl mb-6"
      >
        🎮 Tu Biblioteca de Juegos
      </motion.h2>

      {loading ? (
        <p className="text-[#FFD166] text-lg animate-pulse">Cargando juegos...</p>
      ) : juegos.length === 0 ? (
        <div className="text-[#06AED5] mt-8">
          <p className="text-lg mb-2">🕹️ No tienes juegos añadidos aún.</p>
          <p>
            Usa la opción <span className="text-[#FFD166] font-bold">“Añadir”</span> para registrar tus favoritos.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid-games"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {juegos.map((juego) => (
            <TarjetaJuego key={juego._id} juego={juego} />
          ))}
        </motion.div>
      )}
    </section>
  );
}

