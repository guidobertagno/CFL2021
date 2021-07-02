let readlineSync=require('readline-sync');

let numDeseadoArreglo=new Array(5);
let num, indice;

for(indice=0; indice<5;indice++){
    num=readlineSync.questionInt("indique el numero que desea incorporar en la posicion: ", indice,":");
    numDeseadoArreglo[indice]=num;
}
for(indice=0;indice<5;indice++){
    console.log("El numero en la posicion", indice," es", numDeseadoArreglo[indice]);
}