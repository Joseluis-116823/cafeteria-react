// FormularioPago.jsx
// Componente para seleccionar método de pago y, si es en línea, mostrar formulario de tarjeta

import React, { useState } from "react";

const FormularioPago = ({ onConfirmar }) => {
  const [metodoPago, setMetodoPago] = useState("");
  const [tarjeta, setTarjeta] = useState({ numero: "", expiracion: "", cvv: "" });

  const handleConfirmar = () => {
    if (!metodoPago) {
      alert("Por favor selecciona un método de pago.");
      return;
    }

    // Validación adicional si el método es en línea
    if (metodoPago === "En línea") {
      if (!tarjeta.numero || !tarjeta.expiracion || !tarjeta.cvv) {
        alert("Por favor completa los datos de la tarjeta.");
        return;
      }
    }

    // Simulación de envío al establecimiento
    console.log("Pedido confirmado con método de pago:", metodoPago);
    onConfirmar(metodoPago);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Selecciona el método de pago</h2>
      <div style={styles.options}>
        <label>
          <input
            type="radio"
            name="pago"
            value="En línea"
            onChange={(e) => setMetodoPago(e.target.value)}
          />
          En línea
        </label>
        <label>
          <input
            type="radio"
            name="pago"
            value="Efectivo"
            onChange={(e) => setMetodoPago(e.target.value)}
          />
          Efectivo
        </label>
      </div>

      {/* Mostrar formulario si el método es en línea */}
      {metodoPago === "En línea" && (
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Número de tarjeta"
            value={tarjeta.numero}
            onChange={(e) => setTarjeta({ ...tarjeta, numero: e.target.value })}
          />
          <input
            type="text"
            placeholder="Fecha de expiración (MM/AA)"
            value={tarjeta.expiracion}
            onChange={(e) => setTarjeta({ ...tarjeta, expiracion: e.target.value })}
          />
          <input
            type="text"
            placeholder="CVV"
            value={tarjeta.cvv}
            onChange={(e) => setTarjeta({ ...tarjeta, cvv: e.target.value })}
          />
        </div>
      )}

      <button style={styles.button} onClick={handleConfirmar}>
        Confirmar Pedido
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    margin: "20px auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#6b4f3b", marginBottom: "15px" },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#6b4f3b",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default FormularioPago;