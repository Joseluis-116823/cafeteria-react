// Componente: Sugerencias.jsx
// Muestra sugerencias dinámicas basadas en el último producto agregado

import React from "react";

function Sugerencias({ ultimoProducto }) {
  if (!ultimoProducto) return null;

  // Map de sugerencias simples
  const sugerencias = {
    "Café Americano": "Brownie",
    "Capuchino": "Galleta de Chocolate",
    "Latte": "Cheesecake",
  };

  const sugerido = sugerencias[ultimoProducto];

  if (!sugerido) return null;

  return (
    <div className="sugerencia-box">
      <p>
        Ya que agregaste <strong>{ultimoProducto}</strong>, quizá te guste también:  
        <strong> {sugerido}</strong> 🍰
      </p>
    </div>
  );
}

export default Sugerencias;
