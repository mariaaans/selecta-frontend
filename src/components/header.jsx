import React from "react";
import { motion } from "framer-motion";

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
          <p className="kicker">Retro • Místico • Arcadia</p>
        </div>
      </div>

      <nav className="nav">
        <motion.button whileHover={{ y: -4 }} className="nav-btn">
          Explorar
        </motion.button>
        <motion.button whileHover={{ y: -4 }} className="nav-btn">
          Biblioteca
        </motion.button>
        <motion.button whileHover={{ y: -4 }} className="nav-btn">
          Añadir
        </motion.button>
      </nav>
    </header>
  );
}
