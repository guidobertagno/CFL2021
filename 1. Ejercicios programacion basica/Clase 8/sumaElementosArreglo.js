let readlineSync = require('readline-sync');
let longitud = readlineSync.questionInt("Ingrese la longitud de su Array: ");
let numeros = new Array(longitud);
let resultado = 0;

for(let indice = 0; indice < longitud; indice ++){
	numeros[indice]= readlineSync.questionInt("Ingrese un numero: ");
	resultado+=numeros[indice];
}
for(let indice = 0; indice < longitud; indice ++){
	console.log("El numero del indice", indice, "Es: ", numeros[indice]);
}
console.log("El resultado de la suma de los elementos es: ",resultado);