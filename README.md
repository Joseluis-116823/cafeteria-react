# Proyecto Cafetería - React App

Este proyecto fue creado con Create React App.

## Descripción del Proyecto
Aplicación web para una cafetería que permite:
- Visualizar el menú dividido en categorías (bebidas, desayunos, comidas).
- Agregar productos al pedido.
- Calcular el total en tiempo real.
- Proceder con el pedido y seleccionar método de pago.
- Confirmar el pedido con número aleatorio.

## Tecnologías utilizadas
- **React** (Componentes funcionales y Hooks)
- **CSS** para estilos
- **JavaScript** para lógica de negocio

---

## Available Scripts

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Ejecuta la aplicación en modo desarrollo.\
Abre http://localhost:3000 para verla en tu navegador.

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
- **NUEVAS FUNCIONALIDADES:**
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

## Cómo ejecutar el proyecto
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>