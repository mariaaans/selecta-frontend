import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BibliotecaJuegos from "./components/BibliotecaJuegos";
import ParticlesCanvas from "./components/ParticlesCanvas";
import CursorGlow from "./components/CursorGlow";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesCanvas />
      <CursorGlow />

      <Router>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Rutas de autenticación */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



