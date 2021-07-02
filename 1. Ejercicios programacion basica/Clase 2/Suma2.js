// Entrada
let read = require('readline-sync');
let primerNumero = read.questionInt("ingrese el primer numero: ");
console.log("el primer número es:", primerNumero);
let segundoNumero = read.questionInt("Ingrese el segundo numero: ");
console.log("el segundo número es:", segundoNumero);
// Proceso
let resultado = primerNumero + segundoNumero;
// Salida
console.log("El resultado de la suma es: ", resultado);
