# Proyecto Cafetería - React App

Este proyecto fue creado con Create React App.

## Descripción del Proyecto
Aplicación web para una cafetería que permite:
- Visualizar el menú dividido en categorías (bebidas, desayunos, comidas).
- Agregar productos al pedido.
- Calcular el total en tiempo real.
- Proceder con el pedido y seleccionar método de pago.
- Confirmar el pedido con número aleatorio.
- Consultar la ubicación del establecimiento, horario de atención y redes sociales.

## Tecnologías utilizadas
- **React** (Componentes funcionales y Hooks)
- **CSS** para estilos
- **JavaScript** para lógica de negocio

---

## Available Scripts

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando hagas cambios.\
También verás errores de lint en la consola.

### `npm test`
Lanza el test runner en modo interactivo.\
Consulta la sección sobre running tests.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.\
Optimiza el rendimiento y minifica los archivos.

---

## Sprint 1 - Resumen
- **PROYECTO:** Sitio web para cafetería con menú interactivo  
- **ELABORADO POR:** José Luis Torres Hernández  
- **SPRINT:** 1  
- **OBJETIVO:** Implementar la sección de menú con productos, funciones de selección y cálculo de pedido.

### Tareas completadas:
- Diseñar la sección de menú con estructura de categorías (HTML y CSS).
- Agregar imágenes, descripción y precios de productos.
- Agregar más productos por categoría (bebidas, desayunos, comidas).
- Programar función para agregar productos al pedido (React: estado y botón).
- Programar función para eliminar productos del pedido.
- Calcular total del pedido en tiempo real.
- Estilizar sección 'Tu Pedido'.
- Eliminar barra de navegación por errores en App.js.

---

## Sprint 2 - Resumen
- **OBJETIVO:** Implementar flujo completo de pedido y confirmación.  

### Nuevas funcionalidades:
- Botón **Ver Pedido** con contador de artículos seleccionados.  
- Vista **Pedido** con opción para eliminar productos antes de confirmar.  
- Botón **Proceder con pedido** que lleva al formulario de pago.  
- Formulario de pago con dos opciones:
  - **Efectivo**
  - **En línea** (incluye campos simulados para tarjeta bancaria).  
- Confirmación del pedido con:
  - Resumen de productos.  
  - Total.  
  - Método de pago.  
  - Número de pedido aleatorio.  
- Reinicio del flujo al volver al menú.

---

## Sprint 3 - Resumen
- **OBJETIVO:** Implementar una sección informativa que permita al cliente conocer la ubicación, horario de atención y redes sociales del establecimiento.

### Historia de Usuario #3
> Como cliente de la cafetería quiero poder visualizar la ubicación del establecimiento y el horario de atención.

### Criterios de Aceptación
- El botón **Proceder con pedido** aparece debajo del listado de productos y el total.  
- Al hacer clic, se muestra un formulario con opciones de pago (en línea o efectivo).  
- Se muestra un mensaje de confirmación con el resumen del pedido.  

### Tareas completadas
- Agregar dirección con referencia a Google Maps.  
- Crear sección de horario de atención y redes sociales.  
- Implementar componente `InfoCafeteria.js` con mapa embebido, horarios y enlaces a redes.  
- Integrar botón para regresar al menú principal.  

---

## Sprint 4 - Resumen

- **OBJETIVO:** Implementar un banner de promociones en la parte superior del sitio e integrar sugerencias dinámicas sin afectar el flujo principal.

### Historia de Usuario #4

> Como cliente quiero ver promociones activas para conocer ofertas vigentes al momento de hacer un pedido.

### Criterios de aceptación

- El banner debe mostrarse en la parte superior del sitio.
- La promoción debe ser visible en todas las vistas.
- El banner debe estar estilizado correctamente y no interferir con el flujo de compra.
- Las sugerencias deben integrarse de forma opcional y sin afectar el funcionamiento previo.

### Tareas completadas

- Crear componente Promocion.jsx con contenido de promoción.
- Crear archivo de estilos promocion.css.
- Integrar el banner en App.js arriba del contenido principal.
- Ajustar el flujo de vistas para mantener funcionalidad completa.
- Corregir la navegación entre "pedido", "pago" y "confirmación".
- Integrar la función onConfirmar correctamente para finalizar pedidos.
- Mantener los comentarios existentes en el código para facilitar el aprendizaje.


## Cómo ejecutar el proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Joseluis-116823/cafeteria-react.git

Autor

José Luis Torres Hernández
Desarrollo de Sistemas Web – Universidad de Guadalajara (UdG)