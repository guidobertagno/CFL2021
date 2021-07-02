let arregloCompletar=new Array(10);
let i;

for(i=0;i<10;i++){
    arregloCompletar[i]=Azar(100);
}

for(i=0;i<10;ii++){
    console.log("El numero en la posicion", i, " es:", arregloCompletar[i]);
}

function Azar(tope){
    return Math.floor(math.random()*tope);
}