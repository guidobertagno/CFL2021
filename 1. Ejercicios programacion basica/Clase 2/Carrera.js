let read = require('readline-sync');            
let vuelta1 = read.questionFloat("Ingrese tiempo de vuelta 1: ");
let vuelta2 = read.questionFloat("Ingrese tiempo de vuelta 2: ");
let vuelta3 = read.questionFloat("Ingrese tiempo de vuelta 3: ");
let vuelta4 = read.questionFloat("Ingrese tiempo de vuelta 4: ");
let tiempoTotal = vuelta1+vuelta2+vuelta3+vuelta4;
console.log("Tiempo total: ", tiempoTotal);
console.log("Promedio de vuelta: ", tiempoTotal/4); 