let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("ingrese base: ");
let exponente = readlineSync.questionInt("Ingrese exponente: ");
let suma = 1;

function calcularPotencia (base, exponente) {
	if (exponente > 0) {
		for (let i = 0; i < exponente; i++) {
			suma = suma*base;
		}
		return suma;
	} else {
		if (exponente == 0) {
			return 1
		} else {
			console.log("Solo se admiten exponentes iguuales o mayores a 0. ");
		}
	}
}
console.log("el resultado es: ", calcularPotencia(base, exponente));