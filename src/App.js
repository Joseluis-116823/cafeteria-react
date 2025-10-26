// App.js
// Componente principal que integra Header, Menu, Footer, Pedido, FormularioPago y Confirmacion
// Se agregó contador de artículos en el botón "Ver Pedido"

import React, { useState } from 'react';
import './styles/main.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Pedido from './components/Pedido'; // Nuevo componente
import FormularioPago from './components/FormularioPago'; // Nuevo componente
import Confirmacion from './components/Confirmacion'; // Nuevo componente

function App() {
  // Estado para controlar la vista actual: menu | pedido | pago | confirmacion
  const [vista, setVista] = useState("menu");
  const [metodoPago, setMetodoPago] = useState("");
  const [productosSeleccionados, setProductosSeleccionados] = useState([]); // Estado global del pedido

  // Función para reiniciar el pedido al volver al menú
  const volverAlMenu = () => {
    setVista("menu");
    setProductosSeleccionados([]); // Reinicia productos
    setMetodoPago(""); // Reinicia método de pago
  };

  return (
    <div className="App">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main>
        {vista === "menu" && (
          <>
            {/* Menú de productos */}
            <Menu onAgregarProducto={(producto) => {
              setProductosSeleccionados([...productosSeleccionados, producto]);
            }} />

            {/* Botón para mostrar el pedido con contador */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                style={{
                  backgroundColor: '#6b4f3b',
                  color: '#fff',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
                onClick={() => setVista("pedido")}
              >
                Ver Pedido ({productosSeleccionados.length})
              </button>
            </div>
          </>
        )}

        {vista === "pedido" && (
          <Pedido
            productos={productosSeleccionados}
            onProceder={() => setVista("pago")}
            onEliminarProducto={(index) => {
              const nuevosProductos = productosSeleccionados.filter((_, i) => i !== index);
              setProductosSeleccionados(nuevosProductos);
            }}
          />
        )}

        {vista === "pago" && (
          <FormularioPago
            onConfirmar={(metodo) => {
              setMetodoPago(metodo);
              setVista("confirmacion");
            }}
          />
        )}

        {vista === "confirmacion" && (
          <Confirmacion
            productos={productosSeleccionados}
            metodoPago={metodoPago}
            onVolver={volverAlMenu}
          />
        )}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;