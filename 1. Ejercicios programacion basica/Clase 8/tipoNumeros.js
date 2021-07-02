let readline=require('readline-sync');
let cantidad, indice;
cantidad=readline.questionInt("Ingrese la cantidad de numeros: ");
let v=new Array(cantidad);
let numPos=0;
let numNeg=0;
let numCero=0;

for(indice=0;indice<cantidad;indice++){
    v[indice]=readline.questionInt("Ingrese v[",indice,"]");
}
for(indice=0;indice<cantidad;indice++){
    if(v[indice]>0){
        numPos++;
    }else if(v[indice]<0){
        numNeg++;
    }else{
        numCero++
    }
}
console.log(numPos, "positivos.");
console.log(numNeg, "negativos.");
console.log(numCero, "ceros.");
