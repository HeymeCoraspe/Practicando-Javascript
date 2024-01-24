/** */

/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”

alert("Un mensaje");
.*/

/**2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). 

document.write("Hola mundo");*/

/** 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3+5);*/

/** 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let nombre= prompt("Ingresa tu nombre: ");

alert(`Hola ${nombre}`);*/


/** 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. 

const num1= parseFloat(prompt("Ingresa un número: "));
const num2= parseFloat(prompt("Ingresa otro número: "));
alert(`La suma de ambos es ${num1 + num2}`);*/

/**6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. 

const num1= parseFloat(prompt("Ingresa un número: "));
const num2= parseFloat(prompt("Ingresa otro número: "));

if(num1>num2){

    alert(`El mayor es ${num1}`)

} else if (num1 === num2){

    alert(`Los números son iguales`);

}else{

    alert(`El mayor es ${num2}`);

}

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. 

const num1= parseFloat(prompt("Ingresa el primer número: "));
const num2= parseFloat(prompt("Ingresa el segundo número: "));
const num3= parseFloat(prompt("Ingresa el tercer número: "));

if(num1 === num2 && num1===num3 && num2===num3 ){

    alert(`Los números son iguales`); 

} else {
    //si no anido dentro del else, me imprime que el mayor es 1. 
    //Valido ambas condiciones con && para que entre si amba son verdaderas mayor que uno y que el otro
    if(num1>num2 && num1>num3){

        alert(`El mayor es el primer número ingresado: ${num1}`);
    
    } else if(num2>num1 && num2>num3){
       
        alert(`El mayor es el segundo número ingresado: ${num2}`);
        
    } else{
    
        alert(`El mayor es el tecer número ingresado: ${num3}`);
    
    }
    
}

/** 8.- Escribe un programa que pida un número y diga si es divisible por 2

const num= parseInt(prompt("Ingrese un número: "));
const resultado=num % 2;

if(resultado===0){

    alert(`El número ${num} es divisible por 2`);

} else{

    alert(`El número ${num} no es divisible por 2`);
}
/** 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)*/

//.length cuenta los caracteres de la cadena, también los espacios en blanco
// .charAt devolve la posición del carácter que le pasemos como parámetro en el interior de la cadena.
//.toLowerCase transforma mayúsculas en minúsculas, si no, no las cuenta
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/substring
/**
let frase = prompt("Introduzca una palabra o texto") ;
let fraseMin= frase.toLocaleLowerCase();

let contadorA= 0; 
let contadorE= 0;
let contadorI= 0;
let contadorO= 0;
let contadorU= 0;



for (let i = 0 ; i < fraseMin.length ; i++) {

	switch(fraseMin.charAt(i)) {

		case "a":
        contadorA++;
		break;

		case "e":
        contadorE++;
		break;

		case "i":
        contadorI++;
		break;

		case "o":
        contadorO++;
		break;

		case "u":
        contadorU++;
		break;


	}

}

document.write(` ${frase}  ` +"<br>");
document.write(` Tu frase tiene ${frase.length} letras en total.`+"<br>");
document.write(` Vocales:  a= ${contadorA} , e= ${contadorE} , i= ${contadorI} , o=${contadorO} , u=${contadorU} `+"<br>");

if(contadorA>0){
    document.write(" a ");
    if(contadorE>0){
        document.write(" e ");  
    }
    if(contadorI){
        document.write(" i ");
    }
    if(contadorO){
        document.write(" o ");
    }
    if(contadorU){
        document.write(" u ");
    }
}*/


//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//Ejemplo: input: 20 Output: El 20 es divisible por 2.
/** 
const num= parseInt(prompt("Ingrese un número: "));
const divisor2= num % 2 === 0;
const divisor3= num % 3 === 0;
const divisor5= num % 5 === 0;
const divisor7= num % 7 === 0;

if(num % 2 === 0){
    alert(`El numero es divisible por 2`);
} 
if (num % 3 === 0 ){
    alert(`El numero es divisible por 2 y 3`);
} 
if ( num % 5 === 0 ){
    alert(`El numero es divisible por 2, 3 y 5`);
}
if ( num % 7 === 0 ){
    alert(`El numero es divisible por 2, 3, 5 y 7`);
} 

else {
    alert(`El número no es divisible por ningún número`);
}*/

var n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
if (n1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (n1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (n1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (n1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
    























/**
INTEGRACION ELEMENTOS ESENCIALES JAVASCRIPT
(constantes, variables, tipos de datos, condiciones, ciclos, contadores, operadores).

RONDA DE PERSONAS:

-Una ronda de 10 personas debe contar hasta 100, comenzando en sentido horario y turnándose de 1 en 1 (la 1er persona dice 1, la 2da dice 2, y así sucesivamente).

-Cada vez que la cuenta llega a un valor perfectamente divisible por 8, se debe invertir el sentido de la ronda y continuar el conteo.

-Cada vez que la cuenta llega a un valor perfectamente divisible por 11, se debe saltar una persona y continuar el conteo.

-Intenten integrar el uso de los elementos básicos vistos, para poder realizar este conteo bajo las condiciones que se piden. 
No importa si no logran 100% de funcionalidad, pero por favor inténtenlo. */

/** 
const cantidadPersonas=10;
const limiteCuenta=50;

let persona=0;
let sentidoHorario=true;


//cuenta debe iniciar en 1 para que no cuente desde cero
for (let cuenta = 1; cuenta <= limiteCuenta; cuenta++) {
    if (sentidoHorario === true) {
        // Si se está contando en sentido horario
        // se incrementa persona mientras no llegue al límite de cantidad,
        // sino se resetea a 1
        if (persona !== cantidadPersonas) {
            persona++; // es lo mismo que escribir persona = persona + 1
        } else {
            persona = 1;
        }
    } else {
        // Si se está contando en sentido antihorario
        // se decrementa persona mientras no llegue a 1,
        // sino se resetea al límite de cantidad
        if (persona !== 1) {
            persona--; // es lo mismos que escribir persona = persona - 1
        } else {
            persona = cantidadPersonas;
        }
    }

    // Si la cuenta es perfectamente divisible por 8, se invierte la variable
    if (cuenta % 8 === 0) {
        sentidoHorario = !sentidoHorario; // ! operador not, negación
    }

    console.log(`Persona ${persona} dice ${cuenta}`);


    if (cuenta % 11 === 0) {
        //if (sentidoHorario === true) {
        //    persona++;
        //} else {
        //    persona--;
        //}
        //operador ternario
        sentidoHorario ? persona++ : persona--;
    }
}

const lecturas =[9,-2,-1,15,16,3,-3,5];

let sumatoria=0;

for(C=0; c< lecturas.length;C++){

    sumatoria= sumatoria+lecturas[c];
}

const promedio= sumatoria/lecturas.length;

console.log (sumatoria);
console.log (promedio);*/

/** 
function calcularSpuerficie(largo, ancho){
    return largo*ancho;
}

const superficie= calcularSpuerficie(5,5);
console.log(superficie);*/


