let readlineSync = require('readline-sync');
let IngresoClave=readlineSync.question('ingrese la clave: ');
let clave="eureka";
let contador=1;
    while((IngresoClave!=clave)&&(contador<3)){
    contador++;
    IngresoClave=readlineSync.question('Ingrese la clave: ', "intento", contador);
        }if(IngresoClave==clave){
        console.log("Ha ingresado con exito");
        }else{
        console.log("No tiene mas intetos");
}
