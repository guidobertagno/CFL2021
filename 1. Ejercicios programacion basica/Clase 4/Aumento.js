let readlineSync = require('readline-sync');
let sueltoActual= readlineSync.questionFloat("Ingrese el salario actual del empleado:");
let nuevoSueldo;
switch (true){
    case 1:
        (sueldoActual<=15000);
        aumentoCorrespondiente=sueldoActual*0.2
        console.log ("Le corresponde un aumento de: ", aumentoCorrespondiente);
        break;
    case 2:
         (sueldoActual>15000 && sueldoActual<=20000);
        aumentoCorrespondiente=sueldoActual*0.1
        console.log ("Le corresponde un aumento de: ", aumentoCorrespondiente);
        break;
}