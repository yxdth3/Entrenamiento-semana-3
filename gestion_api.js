// Operaciones CRUD con Fetch API
const apiUrl = 'http://localhost:3000/Products';


//Muestra de los productos
function mostrarProductos(productos) {
  productos.forEach(producto => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.name}, Precio: ${producto.price}`);
  });
}

// Lectura de datos (GET)
fetch(apiUrl)
  .then(Response => Response.json())
  .then(data => {
    console.log("Productos disponibles:");
    mostrarProductos(data);
  })
  .catch(error => console.error('Error al obtener los productos:', error));


// Creación de datos (POST)
const nuevoProducto = { "id": 6, "name": "Gomitas", "price": 600 };

fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(nuevoProducto)
})
  .then(Response => Response.json())
  .then(data => console.log("Producto creado:", data))
  .catch(error => console.error('Error al crear el producto:', error));

// Actualización de datos (PUT)
const productoActualizado = { "id": 2, "name": "Chocolate", "price": 2500 };

fetch(`${apiUrl}/2`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(productoActualizado)
})
  .then(Response => Response.json())
  .then(data => console.log("Producto actualizado:", data))
  .catch(error => console.error('Error al actualizar el producto:', error));

// Eliminación de datos (DELETE)
fetch('http://localhost:3000/Products/3', { method: 'DELETE' })
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

