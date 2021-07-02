let readlineSync= require("readline-sync");
let diasAño=365;
let dia= readlineSync.questionInt("Ingrese un dia: ");
let mes= readlineSync.questionInt("Ingrese un mes: ");
let año= readlineSync.questionInt("Ingrese un año: ");
//ARREGLO: 
    //-ELEMENTOS: TODOS LOS DIAS QUE CONTIENE CADA MES. 
    //-INDICE: DE 0 A 11. 0 COMO ENERO Y 11 COMO DICIEMBRE.
    //-LONGITUD: 12.
let diasMeses=new Array (31,28,31,30,31,30,31,31,30,31,30,31);

//CREO UNA FUNCION QUE ME RETORNE EL VALOR BOOLEANO TRUE SI EL AÑO ES BISIESTO,
 //TENIENDO EN CUENTA QUE SI UN AÑO ES DIVISIBLE POR 400 Y POR 4, ESTAMOS HABLANDO DE UN AÑO BISIESTO. 
 //EN CAMBIO SI EL AÑO ES DIVISIBLE POR 100, NO ES BISIESTO.
function esBisiesto(año){
	if((año%4==0)&&(año%100!=0)||(año%400==0)){
		return true;
	}
}
//SI EL AÑO ES BISIESTO MODIFICO LAS VARIABLES
    //TENIENDO EN CUENTA QUE AHORA FEBRERO TIENE 29 DIAS, POR LO TANTO, EL AÑO 366 DIAS. 
if(esBisiesto(año)==true){
	diasAño=366;
	diasMeses[1]=29;
}
//CREO UNA FUNCION QUE ME RETORNE LA SUMA DE LOS DIAS, DESDE EL MES 0 HASTA EL MES QUE EL USUARIO INGRESO
function contarDias(dia,mes){
	let suma=0;
	for(let i=0;i<mes-1;i++){
		suma=suma+diasMeses[i];
	}
	suma=suma+dia;
	return suma;
}
esBisiesto(año);
console.log("La cantidad de dias que faltan hasta fin de año son: ",diasAño-contarDias(dia,mes));