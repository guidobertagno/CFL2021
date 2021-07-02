let readlineSync=require('readline-sync');
let conIngresos=false;
let num=readlineSync.questionInt("Ingrese un numero: ");
let maxNum=num;

while(num!=0){
    conIngresos=true;
    if(num>maxNum){
        maxNum=num;
    }
    let num=readlineSync.questionInt("Ingrese un numero: ");
}
if(conIngresos){
    console.log("El maximo es: ", maxNum);
}