let readlineSync=require('readline-sync');
let numero = 10;
let user = 0;

while (numero != user){ 
    user = readlineSync.questionInt("Ingrese un numero: "); 
    if(user > numero){ 
        console.log("Incorrecto, ingrese un numero menor");
    }else if(user < numero){ 
            console.log("Incorrecto, ingrese un numero mayor"); 
        }else{ 
                console.log("Correcto :)")
            }

}