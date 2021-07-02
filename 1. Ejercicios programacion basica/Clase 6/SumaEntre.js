let readlineSync = require("readline-sync");
let suma, contador;
let num1 = readlineSync.questionInt("Ingrese el primer numero: ");
let num2 = readlineSync.questionInt("Ingrese el segundo numero: ");
suma=0;
for(contador=num1;contador<=num2;contador++){
	suma+=contador;
}
console.log("primer numero:", num1);
console.log("segundo numero:", num2);
console.log("la suma es:", suma);