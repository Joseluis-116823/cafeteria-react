// Pedido.js
// Componente que muestra el pedido actual, permite eliminar productos y proceder al pago
// Se agregó validación para mostrar mensaje si no hay productos

import React from "react";

const Pedido = ({ productos, onProceder, onEliminarProducto }) => {
  // Calculamos el total del pedido
  const total = productos.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tu Pedido</h2>

      {/* Lista de productos agregados */}
      {productos.length > 0 ? (
        productos.map((item, index) => (
          <div key={index} style={styles.item}>
            <span>{item.nombre} - ${item.precio}</span>
            <button
              style={styles.button}
              onClick={() => onEliminarProducto(index)}
            >
              Eliminar
            </button>
          </div>
        ))
      ) : (
        <p>No hay productos en tu pedido.</p>
      )}

      {/* Total del pedido */}
      <h3 style={styles.total}>Total: ${total}</h3>

      {/* Botón para proceder con el pedido */}
      <button
        style={styles.procederBtn}
        onClick={onProceder}
        disabled={productos.length === 0} // Deshabilitado si no hay productos
      >
        Proceder con pedido
      </button>
    </div>
  );
};

// Estilos básicos
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
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#6b4f3b",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: { textAlign: "right", marginTop: "10px" },
  procederBtn: {
    marginTop: "15px",
    backgroundColor: "#6b4f3b",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Pedido;