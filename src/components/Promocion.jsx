// Componente: Promocion.jsx
// Este componente muestra un banner de promociones en la parte superior
// Se usa una promoción fija (pero luego podemos hacerla dinámica)

import React from "react";
import "../promocion.css"; // Importamos estilos del banner

function Promocion() {
  return (
    <div className="contenedor-promocion">
      {/* Texto de la promoción */}
      <h2 className="titulo-promocion">
        ☕ Promoción de la semana: 2x1 en Café Americano
      </h2>

      {/* Texto secundario */}
      <p className="descripcion-promocion">
        De lunes a viernes, aplica en tienda y en línea.
      </p>
    </div>
  );
}

export default Promocion;
