let readlineSync = require ("readline-sync");
let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension de su Array: ");
let arregloInvertido = [];

for(let indice=0;indice<dimensionArreglo;indice++){
	arregloInvertido[indice] = readlineSync.questionInt("Ingrese los numeros del Array: ");
};
for(let indice=dimensionArreglo-1;indice>=0;indice--){
	console.log("El numero del indice", indice, "es: ", arregloInvertido[indice]);
};