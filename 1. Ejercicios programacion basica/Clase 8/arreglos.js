let readlineSync=require('readline-sync');
let num=new Array(5);

for(i=0;i<=4;i++){
    num[i]=readlineSync.questionInt("Ingrese un numero: ");
}
console.log(num);