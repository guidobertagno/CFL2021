let readlineSync = require('readline-sync');
let user = "Juan";
let pass = "claveJuan";
let userIngresado = readlineSync.question("Ingrese su nombre de usuario: ");
let passIngresada = readlineSync.question("Ingrese su contraseña: ");
    if (user == userIngresado && pass == passIngresada){
        console.log("Bienvenido :D");
    }else{
        console.log("El Usuario o la contraseña ingresada son incorrectas.");
    }
