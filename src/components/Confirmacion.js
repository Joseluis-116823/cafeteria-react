// Confirmacion.jsx
// Componente para mostrar resumen del pedido, método de pago y número de pedido aleatorio

import React from "react";

const Confirmacion = ({ productos, metodoPago, onVolver }) => {
  const total = productos.reduce((acc, item) => acc + item.precio, 0);
  const numeroPedido = Math.floor(Math.random() * 9000) + 1000; // Número aleatorio entre 1000 y 9999

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>¡Pedido confirmado!</h2>
      <p>Gracias por tu compra. Aquí está el resumen:</p>

      <div style={styles.resumen}>
        {productos.map((item, index) => (
          <p key={index}>{item.nombre} - ${item.precio}</p>
        ))}
        <h3>Total: ${total}</h3>
        <p>Método de pago: <strong>{metodoPago}</strong></p>
        <p>Número de pedido: <strong>{numeroPedido}</strong></p>
      </div>

      <button style={styles.button} onClick={onVolver}>
        Volver al Menú
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
  resumen: {
    textAlign: "left",
    marginTop: "15px",
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

export default Confirmacion;