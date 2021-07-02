let rl = require('readline-sync');
let dimension, arrayV, nro, ocu;
dimension = rl.questionInt('Ingrese tamaño: ');
arrayV = new Array(dimension);

function cargar(arrayV,dimension) {
    for (let i=0; i<dimension; i++)
        arrayV[i]=Math.floor(Math.random()*100);
}
//TENGO UNA FUNCION CARGAR QUE ME CARGA EN UN ARREGLO, EN ESTE CASO: arrayV, NUMERO AL AZAR ENTRE 0 Y 100 INCLUSIVE.
function mostrar(arrayV,dimension) {
    let c="";
    for (let i=0; i<dimension; i++)
        c+=arrayV[i]+" ";
    console.log(c);
}
//TENGO UNA FUNCION MOSTRAR QUE ME MUESTRA EL MISMO ARREGLO ANTES MENCIONADO, AGREGANDO UN ESPACIO ENTRE CADA ELEMENTO.
//ALMACENA EN UNA VARIABLE, EN ESTE CASO: c, LOS VALORES DEL ARRAY Y LUEGO LE AGREGA UN ESPACIO. 
    //LUEGO PIDE MOSTRAR LA VARIABLE DONDE ESTAN TODOS LOS VALORES SEPARADOS POR ESPACIO.
function metodo(arrayV,dimension,nro) {
    let oc=0
    for (let i=0; i<dimension; i++){
        if(arrayV[i]==nro)
            oc= oc+1
	}
	return oc;
}
//MI FUNCION METODO, RECORRE EL ARRAY CARGADO CON NUMEROS AL AZAR(arrayV) y COMPARA CADA NUMERO DEL ARRAY CON UN NUMERO QUE LE PIDE AL USUARIO
    // SI ESE NUMERO QUE INGRESO EL USUARIO APARECE EN EL ARRAY LE DICE AL USUARIO CUANTAS VECES APARECIO, YA SEA 0,1,2 LAS VECES QUE SEA QUE APAREZCA ESE NUMERO.
cargar(arrayV,dimension);
mostrar(arrayV,dimension);
nro = rl.questionInt('Ingrese número: ');
ocu = metodo(arrayV,dimension,nro);
console.log("El número "+nro+" aparece "+ocu+" vez o veces");