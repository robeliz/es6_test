/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */
var nombre = "Rober";
var template = `Hola ${nombre} eres una variable`;

var sumA = 8;
var sumB = 10;

function suma (sumA, sumB){
	return sumA + sumB;
};

var template2 = `Vamos a sumar ${sumA} + ${sumB} y el resultado es ${suma(sumA, sumB)}`

function tagged(cadenas, valores){
	document.getElementById('templateCadenas').innerHTML = "Estas son las cadenas que recibe "+cadenas;
	document.getElementById('templateValores').innerHTML = "Estas son los valores que recibe "+valores;
	//document.getElementById('templateCadenas').innerHTML(template);
}
document.getElementById('templateVar').innerHTML=template;
document.getElementById('templateFunction').innerHTML=template2;
console.log(template);
console.log(template2);

tagged`Hola ${"Roberto "+"Elizo "} esto solo son pruebas`; 

var numeros = [1,2,3,4,5];
var cuadrados = numeros.map(n => n*n);
document.getElementById('arrowNotation').innerHTML= JSON.stringify(cuadrados, null, 4);

function persona(){
	this.nombre = "Rober";
	//Utilizamos arrow para heredar el scope del padre
	setTimeout(()=>{
		this.nombre = "Roberto Elizo";
	},500);
}

var persona = new persona();

console.log(persona.nombre);
setTimeout(function(){
	console.log(persona.nombre);
},1000);

//Utilizando clases
class humano{
	constructor(nombre, apellido){
		this.nombre = nombre;
		this.apellido = apellido;
	}
	
	full_name(){
		//let => block scoping y var es function scoping 
		let full_name = "El nombre completo es "+this.nombre+" "+this.apellido; 
		return full_name;
	}
}

class hombre extends humano{
	
}

var colega = new hombre("Rober","Elizo Vecino");
console.log(colega.full_name());