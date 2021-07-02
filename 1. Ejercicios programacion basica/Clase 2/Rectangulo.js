let read = require('readline-sync');
let base = read.questionInt("Ingrese la base: ");
let altura = read.questionInt("Ingrese la altura: ");
let area = base * altura;
console.log ("El area es: ", area);