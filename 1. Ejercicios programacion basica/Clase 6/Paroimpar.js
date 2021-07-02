let readlineSync=require('readline-sync');
let numeroIngresado=readlineSync.questionInt("Ingrese un numero: ");
    
    while(numeroIngresado==0){
        numeroIngresado=readlineSync.questionInt("Ingrese un numero: ");
    }
    if(numeroIngresado%2==0 && numeroIngresado>0){
        console.log("El numero ingresado es par. ");
    }else{(numeroIngresado%2==1 && numeroIngresado>0)
        console.log("El numero ingresado es impar. ");
    }