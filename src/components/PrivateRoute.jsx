import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // busca si hay sesión guardada

  if (!token) {
    return <Navigate to="/login" replace />; // si no hay, te manda al login
  }

  return children; // si sí hay, deja entrar
}