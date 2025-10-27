import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesCanvas from "./components/ParticlesCanvas";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import BibliotecaJuegos from "./components/BibliotecaJuegos";
import FormularioJuego from "./components/FormularioJuego";
import ListaReseñas from "./components/ListaReseñas";
import EstadisticasPersonales from "./components/EstadisticasPersonales";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader"; // 👈 Nuevo import

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app-wrapper">
      <ParticlesCanvas />
      <CursorGlow />

      <Router>
        <Header />
        <main className="relative z-10 px-4 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route
              path="/biblioteca"
              element={
                <PrivateRoute>
                  <BibliotecaJuegos />
                </PrivateRoute>
              }
            />
            <Route
              path="/formulario-juego"
              element={
                <PrivateRoute>
                  <FormularioJuego />
                </PrivateRoute>
              }
            />
            <Route
              path="/reseñas"
              element={
                <PrivateRoute>
                  <ListaReseñas />
                </PrivateRoute>
              }
            />
            <Route
              path="/estadisticas"
              element={
                <PrivateRoute>
                  <EstadisticasPersonales />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <div className="text-center mt-20 text-[#FFD166] pixel-text">
                  <h2>🌀 Página no encontrada</h2>
                  <p>
                    Regresa al{" "}
                    <a
                      href="/"
                      className="underline text-[#06AED5] hover:text-[#FF6B6B] transition-colors"
                    >
                      inicio
                    </a>
                    .
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

