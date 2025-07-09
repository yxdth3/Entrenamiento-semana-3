// Operaciones CRUD con Fetch API
const apiUrl = 'http://localhost:3000/Products';
const nuevoProducto = { "id": 7, "name": "Joyas", "price": 300 };

// Función para manejar respuestas JSON
function manejarRespuesta(res) {
  if (!res.ok) {
    return res.text().then(txt => {
      console.error(`Error ${res.status}: ${txt}`);
      throw new Error(`Error ${res.status}`);
    });
  }
  return res.json();
}

// Lectura de datos (GET)
fetch(apiUrl)
  .then(manejarRespuesta)
  .then(data => console.log("Productos disponibles:", data))
  .catch(error => console.error('Error al obtener los productos:', error));


// Verificar si el producto existe antes de crearlo
fetch(`${apiUrl}/6`)
  .then(res => res.ok ? res.json() : null)
  .then(producto => {
    if (!producto) {
      // Solo crea si no existe
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
      })
        .then(manejarRespuesta)
        .then(data => console.log("Producto creado:", data))
        .catch(error => console.error('Error al crear el producto:', error));
    } else {
      console.log("El producto con id 6 ya existe.");
    }
  });

// // Creación de datos (POST)
// const nuevoProducto = { "id": 6, "name": "Gomitas", "price": 600 };

// fetch(apiUrl, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(nuevoProducto)
// })
//   .then(manejarRespuesta)
//   .then(data => console.log("Producto creado:", data))
//   .catch(error => console.error('Error al crear el producto:', error));

// Actualización de datos (PUT)
const productoId = 6;
const productoActualizado = { "name": "Chocolates", "price": 150 };

fetch(`${apiUrl}/${productoId}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(productoActualizado)
})
  .then(manejarRespuesta)
  .then(data => console.log("Producto actualizado:", data))
  .catch(error => console.error('Error al actualizar el producto:', error));

// Eliminación de datos (DELETE)
fetch('http://localhost:3000/Products/3', { method: 'DELETE' })
  .then(manejarRespuesta)
  .then(() => console.log("Producto eliminado exitosamente"))
  .catch(error => console.error('Error al eliminar el producto:', error));

// Manejo de errores y validaciones
function validarProducto(producto) {
  if (!producto.name || typeof producto.price !== 'number') {
    console.error("El producto debe tener un nombre y un precio");
    return false;
  }
  return true;
}
