let readlineSync = require("readline-sync");
let num = readlineSync.questionInt("Ingrese un numero: ");

function esMultiplo (num1, num2){
	if(num1%num2 == 0){
		return true
	}else{
		return false
	}
}

function cantidadDeDivisores (num){
	let suma = 0;
	for (let i = num; i >= 0; i--){
		if(esMultiplo(num,i)){
			suma++;
		}
	}
		return suma;
}
console.log("la cantidad de divisores de: "+ num + " son: " + cantidadDeDivisores(num));