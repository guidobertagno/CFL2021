// Entrada
let read = require('readline-sync');
let precioProducto = read.questionInt ("Ingrese Precio del producto: ");
let porcentajeDescuento = read.questionInt ("Ingrese Descuento: ");
// Proceso
let descuento = precioProducto*porcentajeDescuento/100;
let precioFinal = precioProducto-descuento;
// Salida
console.log(precioFinal);