//function calcularAreaTriangulo (base, altura){
//	return base*altura/2
//}
//console.log("El area es: ",calcularAreaTriangulo(2,4));

let i;
for(i=1;i<=100;i++){
	console.log("El area del triangulo es: ", calcularAreaTriangulo(i,i*2));
}
function calcularAreaTriangulo(base, altura){
	return (base*altura)/2;
};