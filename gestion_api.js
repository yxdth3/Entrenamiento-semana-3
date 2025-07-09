//Operaciones CRUD con una Fetch API 

//Lectura de datos (GET)
fetch('http://localhost:3000/Productos')
    .then(response => response.json())
    .then(data => console.log("Productos disponibles:", data))
    .catch(error => console.error('Error al obtener los productos:', error));

//Creación de datos (POST)
const nuevoProducto = { "id": 6, "name": "Gomitas", "price": 600 };

fetch('http://localhost:3000/Productos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(nuevoProducto)
})
    .then(response => response.json())
    .then(data => console.log("Producto creado:", data))
    .catch(error => console.error('Error al crear el producto:', error));


//Actualización de datos (PUT)
const productoActualizado = { "name": "Chocolates", "price": 150 };

fetch(`http://localhost:3000/Productos/1`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(productoActualizado)
})
    .then(response => response.json())
    .then(data => console.log("Producto actualizado:", data))
    .catch(error => console.error('Error al actualizar el producto:', error));


//Eliminación de datos (DELETE)
fetch(`http://localhost:3000/Productos/1`, { method: 'DELETE' })
    .then(() => console.log("Producto eliminado exitosamente"))
    .catch(error => console.error('Error al eliminar el producto:', error));


//Manejo de errores y validaciones
function validarProducto(producto) {
    if (!producto.name || typeof producto.price !== 'number') {
        console.error("El producto debe tener un nombre y un precio");
        return false;
    }
    return true;
}