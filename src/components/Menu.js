// Menu.js
// Este componente muestra el menú de productos con imagen, descripción y precio

import React from 'react';

// Lista de productos (puedes modificarla o cargarla desde una base de datos)
const productos = [
  {
    nombre: "Café Americano",
    descripcion: "Café negro tradicional, servido caliente.",
    precio: "$25",
    imagen: "images/cafe-americano.jpg"
  },
  {
    nombre: "Capuchino",
    descripcion: "Café con leche espumosa y un toque de canela.",
    precio: "$30",
    imagen: "images/capuchino.jpg"
  }
];

const Menu = () => {
  return (
    <section>
    <h2>Menú de la Cafetería</h2>
      <div className="menu-list">
        {productos.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p><strong>{item.precio}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;