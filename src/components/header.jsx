import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/biblioteca", label: "Biblioteca" },
    { to: "/formulario-juego", label: "Añadir" },
    { to: "/reseñas", label: "Reseñas" },
    { to: "/estadisticas", label: "Estadísticas" },
  ];

  return (
    <header
      className={`header crt container-app fixed top-0 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[rgba(6,8,20,0.8)] shadow-lg" : ""
      }`}
    >
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
        {navLinks.map((link) => (
          <motion.div
            key={link.to}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to={link.to}
              className={`nav-btn ${
                location.pathname === link.to
                  ? "border border-[#FFD166] shadow-[0_0_10px_#FFD166]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
}

