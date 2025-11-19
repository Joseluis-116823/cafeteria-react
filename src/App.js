// App.js
// Componente principal que integra Header, Menu, Footer, Pedido, FormularioPago y Confirmacion
// Se agregó contador de artículos en el botón "Ver Pedido"
// NUEVO: Se agrega vista "info" para mostrar ubicación, horario y redes sociales

import React, { useState } from 'react';
import './styles/main.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Pedido from './components/Pedido'; // Componente existente
import FormularioPago from './components/FormularioPago'; // Componente existente
import Confirmacion from './components/Confirmacion'; // Componente existente
import InfoCafeteria from './components/InfoCafeteria'; // NUEVO componente para ubicación y redes
import Promocion from "./components/Promocion"; // <<< Banner agregado

function App() {
  // Estado para controlar la vista actual: menu | pedido | pago | confirmacion | info
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
    <>
      {/* Encabezado */}
      <Header />

      {/* Banner de promociones */}
      <Promocion />

      {/* Contenido principal */}
      <main>
        {/* Vista del menú principal */}
        {vista === "menu" && (
          <>
            {/* Menú de productos */}
            <Menu onAgregarProducto={(producto) => {
              setProductosSeleccionados([...productosSeleccionados, producto]);
            }} />

            {/* Botones para ver pedido y acceder a información del establecimiento */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button onClick={() => setVista("pedido")}>
                Ver Pedido ({productosSeleccionados.length})
              </button>

              {/* NUEVO botón para mostrar la sección informativa */}
              <button onClick={() => setVista("info")} style={{ marginLeft: "10px" }}>
                Información del establecimiento
              </button>
            </div>
          </>
        )}

        {/* Vista del pedido */}
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

        {/* Vista del formulario de pago */}
        {vista === "pago" && (
          <FormularioPago
         onSeleccionarMetodo={(metodo) => {
          setMetodoPago(metodo);
          setVista("confirmacion");   
        }}
      onConfirmar={() => setVista("confirmacion")}
/>
        )}

        {/* Vista de confirmación */}
        {vista === "confirmacion" && (
          <Confirmacion
         productos={productosSeleccionados}
         metodoPago={metodoPago}
         onVolver={volverAlMenu}
  />
        )}

        {/* NUEVA vista: Información del establecimiento */}
        {vista === "info" && (
          <InfoCafeteria volverAlMenu={volverAlMenu} />
        )}
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default App;
