let readlineSync=require("readline-sync");
let numerosArreglo1=new Array (6);
let numerosArreglo2=new Array (6);
let resultadoArreglos=new Array (6);
console.log("Ingrese los numeros del primer Array");

for(let indice=0;indice<6;indice++){
	numerosArreglo1[indice]=readlineSync.questionInt("Ingrese un numero: ");
}
console.log("Ingrese los numeros del segundo Array");
for(let indice=0;indice<6;indice++){
	numerosArreglo2[indice]=readlineSync.questionInt("Ingrese un numero: ");
}
for(let indice=0;indice<6;indice++){
	resultadoArreglos[indice]=numerosArreglo1[indice]+numerosArreglo2[indice];
}

console.log("la suma de ambos Array en sus respectivas posiciones son: ", resultadoArreglos);