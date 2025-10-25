import React from "react";
import TarjetaJuego from "./TarjetaJuego";

const juegos = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Juego Místico ${i + 1}`,
  hours: Math.floor(Math.random() * 200),
  rating: Math.floor(Math.random() * 5) + 1,
  genre: ["Aventura", "Arcade", "RPG"][i % 3],
}));

export default function BibliotecaJuegos() {
  return (
    <main className="container-app">
      <section className="grid-games">
        {juegos.map((juego) => (
          <TarjetaJuego key={juego.id} juego={juego} />
        ))}
      </section>
    </main>
  );
}
