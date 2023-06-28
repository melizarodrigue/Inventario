import { ingresarExistencias } from "./ingresar.js";
import { existenciasDisponibles } from "./disponibles.js";
import { esquema } from "./model.js";
import { eliminarExistencias } from "./eliminar.js";
import { seleccionar } from "./seleccionar.js";

esquema();

function start() {
 let opcion = parseInt(prompt(`Ingrese 1 para agregar\n Ingrese 2 para eliminar\n Ingrese 3 para visualizar`));
 let cantidad =0
 switch (opcion) {
  case 1:
    let producto1 = seleccionar()
     cantidad = parseInt(prompt("Ingrese la cantidad que desea sumar"));
    ingresarExistencias(producto1, cantidad)
    console.log(existenciasDisponibles());
    
    break;

  case 2:
    let producto2 = seleccionar()
     cantidad = parseInt(prompt("Ingrese la cantidad que desea eliminar"));
    eliminarExistencias(producto2, cantidad)
    console.log(existenciasDisponibles());
    
    break;

  case 3:
    console.log(existenciasDisponibles());

     break;
 
  default:
    console.log("Ingrese una opcion valida");
   
    break;
 }
}

start();