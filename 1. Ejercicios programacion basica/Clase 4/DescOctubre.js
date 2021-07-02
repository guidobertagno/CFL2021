let readlineSync = require('readline-sync');
let precioUnitario = readlineSync.questionFloat ("Ingresar precio: ");
let cantidad = readlineSync.questionFloat ("Ingrese cantidad: ");
let mes = readlineSync.question("Ingrese el mes: ");  
let precioTotal = precioUnitario*cantidad;
    if(mes=="Octubre") {
        descuento = (precioTotal*15)/100;
        precioConDescuento = precioTotal-descuento
        console.log("Por comprar en nuestro mes de aniversario tiene un 15% de descuento.");
        console.log("El monto a pagar es: "+precioConDescuento);
    }else{
        console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
    }
