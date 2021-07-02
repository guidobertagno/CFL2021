readlineSync=require('readline-sync');
let num1 = readlineSync.questionInt("Ingrese el primer numero: ");
let num2 = readlineSync.questionInt("Ingrese el segundo numero: ");
let num3 = readlineSync.questionInt("Ingrese el tercer numero: ");
    if(num1>=num2&&num1>=num3){
        console.log("El numero mayor es: ", num1);
    }
        else if(num2>=num1&&num2>=num3){
            console.log("El numero mayor es: ", num2);
        }
        else if(num3>=num1&&num3>=num2){
            console.log("El numero mayor es: ", num3);
        }