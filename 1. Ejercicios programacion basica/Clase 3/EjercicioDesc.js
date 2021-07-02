//Entrada
let read = require('readline-sync');
let precioProducto = 450.50;
let porcentajeDescuento = 10;
//Proceso
let descuento = precioProducto*porcentajeDescuento/100;
let precioFinal = precioProducto-porcentajeDescuento;
//Salida
console.log(precioFinal);