let readlineSync = require ("readline-sync");
let cantidadButacas = readlineSync.questionInt("Ingrese la cantidad total de butacas: ");
let butacas = new Array (cantidadButacas);
function cargarArray(butacas){
	for(let i = 0; i < butacas.length; i++){
		butacas[i]= Math.round(Math.random());
	}
}
function butacasDesocupadas(butacas){
	let butacasVacias = 0;
	for(let i = 0; i < butacas.length; i++){
		if(!butacas[i]){
			butacasVacias++;
		}
	}
	return butacasVacias; 
}
cargarArray(butacas);
console.log(butacas);
console.log(butacasDesocupadas(butacas), "Butacas vacias");