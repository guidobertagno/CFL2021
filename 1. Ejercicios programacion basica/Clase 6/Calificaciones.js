let readlineSync =require("readline-sync");
let alumno=readlineSync.question("Ingrese el nombre del alumno: ");
let notaFinal=0
let nota1;
let nota2;
let nota3;

while(alumno!="" && nota1, nota2, nota3 >=0 && nota1, nota2, nota3<=10){
	nota1=readlineSync.questionInt("Ingrese la nota parte practica: ");
	nota2=readlineSync.questionInt("Ingrese la nota parte problemas: ");
	nota3=readlineSync.questionInt("Ingrese la nota parte teorica: ");
	notaFinal=nota1*0.1+nota2*0.5+nota3*0.4
	if(notaFinal>=0 && notaFinal<=10){
		console.log("La nota final es: ", notaFinal);
	}else{
		console.log("Las notas ingresadas no son validas, siguiente alumno: ");
	}
	alumno =readlineSync.question("Ingrese el nombre del alumno: ");
}
