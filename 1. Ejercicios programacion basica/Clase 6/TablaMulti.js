let readlineSync=require('readline-sync');
let numeroIngresado=readlineSync.questionInt("Ingrese numero para generar la tabla de multiplicacion: ");
let numeroLimite=readlineSync.questionInt("Ingrese hasta que numero mostrar la tabla: ");
let contador, resultado;

for(contador=1;contador<=numeroLimite;contador++){
    resultado = numeroIngresado*contador
    console.log(numeroIngresado, "X", contador, "=", resultado);
}   