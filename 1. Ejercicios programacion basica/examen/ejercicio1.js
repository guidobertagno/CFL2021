let readlineSync=require('readline-sync');
let texto = readlineSync.question("Ingrese el texto para analizar: ");
let arrayString= texto;
let ocurrencia= new Array(arrayString.length);

function analizarArray(arrayString){
	let letra;
	for(let i=0; i<arrayString.length;i++){
		letra=arrayString[i];
		ocurrencia[i]=0;
		for(let j=i; j<arrayString.length;j++){
			if(arrayString[j]==letra && arrayString.indexOf(letra)==i){
				ocurrencia[i]++;
			}
		}
	}
};

function mostrarResultado(arrayString,ocurrencia){
	for(let i=0; i<arrayString.length;i++){
		if(arrayString.indexOf(arrayString[i])==i){
			console.log("La letra "+ arrayString[i]+ " aparece "+ ocurrencia[i]+ " veces y tiene una probabilidad de ocurrencia de: "+ ocurrencia[i]/arrayString.length);
		}
	}
};
analizarArray(arrayString);
mostrarResultado(arrayString,ocurrencia);