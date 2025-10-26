import React from "react";
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

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesCanvas />
      <CursorGlow />

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/biblioteca" element={<BibliotecaJuegos />} />
          <Route path="/formulario-juego" element={<FormularioJuego />} />
          <Route path="/reseñas" element={<ListaReseñas />} />
          <Route path="/estadisticas" element={<EstadisticasPersonales />} />
          <Route
            path="*"
            element={
              <div className="text-center mt-20 text-[#FFD166] pixel-text">
                <h2>🌀 Página no encontrada</h2>
                <p>
                  Regresa al{" "}
                  <a href="/" className="underline text-[#06AED5]">
                    inicio
                  </a>
                  .
                </p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
