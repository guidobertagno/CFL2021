let readlineSync = require('readline-sync');
let posicionLlegada = readlineSync.questionInt("Indicar posicion de llegada del competidor: ");
switch(posicionLlegada){
    case 1: 
    console.log("Medalla de oro");
    break;
    case 2: 
    console.log("Medalla de plata");
    break;
    case 3: 
    console.log("Medalla de bronce");
    break;
    default:
        console.log("Mencion por participar");
        }