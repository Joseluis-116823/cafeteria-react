// Menu.js
// Componente que muestra el menú dividido en categorías y permite agregar/eliminar productos del pedido

import React, { useState } from 'react';

// Lista de productos organizada por categorías
const productos = {
  bebidas: [
    { nombre: "Café Americano", descripcion: "Café negro tradicional, servido caliente.", precio: 25, imagen: "images/cafe-americano.jpg" },
    { nombre: "Capuchino", descripcion: "Café con leche espumosa y un toque de canela.", precio: 30, imagen: "images/capuchino.jpg" },
    { nombre: "Chocolate caliente", descripcion: "Bebida caliente con chocolate y leche.", precio: 28, imagen: "images/chocolate.jpg" },
    { nombre: "Té chai", descripcion: "Infusión especiada con leche.", precio: 26, imagen: "images/te-chai.jpg" },
    { nombre: "Jugo de naranja", descripcion: "Jugo natural recién exprimido.", precio: 22, imagen: "images/jugo-naranja.jpg" }
  ],
  desayunos: [
    { nombre: "Molletes", descripcion: "Pan con frijoles, queso y pico de gallo.", precio: 35, imagen: "images/molletes.jpg" },
    { nombre: "Hot cakes", descripcion: "Con miel y mantequilla.", precio: 40, imagen: "images/hotcakes.jpg" },
    { nombre: "Omelette de jamón", descripcion: "Huevos con jamón y queso.", precio: 38, imagen: "images/omelette.jpg" },
    { nombre: "Chilaquiles verdes", descripcion: "Con crema, queso y pollo.", precio: 42, imagen: "images/chilaquiles.jpg" },
    { nombre: "Tostadas con aguacate", descripcion: "Pan tostado con aguacate y tomate.", precio: 30, imagen: "images/tostadas.jpg" }
  ],
  comidas: [
    { nombre: "Hamburguesa artesanal", descripcion: "Carne de res, queso, vegetales y papas.", precio: 55, imagen: "images/hamburguesa.jpg" },
    { nombre: "Ensalada César con pollo", descripcion: "Lechuga, pollo, aderezo y crutones.", precio: 48, imagen: "images/ensalada.jpg" },
    { nombre: "Arrachera con papas", descripcion: "Carne asada con guarnición.", precio: 65, imagen: "images/arrachera.jpg" },
    { nombre: "Milanesa de pollo", descripcion: "Empanizada con arroz y ensalada.", precio: 50, imagen: "images/milanesa.jpg" },
    { nombre: "Enchiladas suizas", descripcion: "Tortillas rellenas con salsa verde y queso.", precio: 52, imagen: "images/enchiladas.jpg" }
  ]
};

const Menu = () => {
  const [pedido, setPedido] = useState([]);

  const agregarProducto = (producto) => {
    setPedido([...pedido, producto]);
  };

  const eliminarProducto = (index) => {
    const nuevoPedido = [...pedido];
    nuevoPedido.splice(index, 1);
    setPedido(nuevoPedido);
  };

  const calcularTotal = () => {
    return pedido.reduce((total, item) => total + item.precio, 0);
  };

  return (
    <section>
      <h2>Menú de la Cafetería</h2>

      {/* Renderizamos cada categoría */}
      {Object.entries(productos).map(([categoria, items]) => (
        <div key={categoria}>
          <h3>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h3>
          <div className="menu-list">
            {items.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <h4>{item.nombre}</h4>
                <p>{item.descripcion}</p>
                <p><strong>${item.precio}</strong></p>
                <button onClick={() => agregarProducto(item)}>Agregar al pedido</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Sección del pedido */}
      <div className="pedido-total">
        <h3>Tu Pedido</h3>
        <ul>
          {pedido.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h4>Total: ${calcularTotal()}</h4>
      </div>
    </section>
  );
};

export default Menu;