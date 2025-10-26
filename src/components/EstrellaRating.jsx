import React, { useState } from "react";

export default function EstrellaRating({ onRate }) {
  const [valor, setValor] = useState(0);

  return (
    <div className="estrella-rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onClick={() => {
            setValor(n);
            onRate(n);
          }}
          className={n <= valor ? "estrella activa" : "estrella"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
