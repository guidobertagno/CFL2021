let readlineSync = require("readline-sync");
let num1 = readlineSync.questionInt("Ingrese el primer numero: ");
let num2 = readlineSync.questionInt("Ingrese el segundo numero: ");

function esMultiplo (num1, num2){
	if(num1%num2 == 0){
		return true
	}else{
		return false
	}
}
console.log(esMultiplo(num1,num2));