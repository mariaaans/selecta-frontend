import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-layout flex items-center justify-center min-h-screen text-white">
      <div className="glass-card w-[400px] p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
}
