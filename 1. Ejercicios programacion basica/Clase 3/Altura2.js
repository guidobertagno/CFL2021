let readlineSync = require('readline-sync');
let alturaPermitida = 1.30;
let alturaPersona = readlineSync.questionFloat("Indique la altura de la persona: ");
    if(alturaPersona <= alturaPermitida){
        console.log("La persona no puede subir al juego.");
    }else{
        console.log("La persona puede subir al juego.");
    }