

function ingresarExistencias(producto,cantidad) {
 
  let cantidadActual = localStorage.getItem(producto);

  localStorage.setItem(producto, parseInt(cantidadActual) + cantidad);
 
}

export {ingresarExistencias};