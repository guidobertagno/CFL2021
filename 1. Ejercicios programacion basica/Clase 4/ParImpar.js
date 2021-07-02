let readlineSync=require('readline-sync');
let numeroIngresado=readlineSync.questionInt("Ingrese un numero: ");
    if(numeroIngresado%2==0 && numeroIngresado>0){
        console.log("El numero ingresado es par");
    }
    else if(numeroIngresado==0){
    console.log("El numero ingresado es 0");   
    }else{
        console.log("El numero ingresado es impar");
    }