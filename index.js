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

document.write(`${frase}..  ` );
document.write(`Tu frase tiene ${frase.length} letras en total..   `);
document.write(`  Vocales:  a= ${contadorA} , e= ${contadorE} , i= ${contadorI} , o=${contadorO} , u=${contadorU} `);
*/


/**
INTEGRACION ELEMENTOS ESENCIALES JAVASCRIPT
(constantes, variables, tipos de datos, condiciones, ciclos, contadores, operadores).

RONDA DE PERSONAS:

-Una ronda de 10 personas debe contar hasta 100, comenzando en sentido horario y turnándose de 1 en 1 (la 1er persona dice 1, la 2da dice 2, y así sucesivamente).

-Cada vez que la cuenta llega a un valor perfectamente divisible por 8, se debe invertir el sentido de la ronda y continuar el conteo.

-Cada vez que la cuenta llega a un valor perfectamente divisible por 11, se debe saltar una persona y continuar el conteo.

-Intenten integrar el uso de los elementos básicos vistos, para poder realizar este conteo bajo las condiciones que se piden. 
No importa si no logran 100% de funcionalidad, pero por favor inténtenlo. */


const cantidadPersonas=10;
const limiteCuenta=50;

let persona=0;
let sentidoHorario=true;


//cuenta debe iniciar en 1 para que no cuente desde cero
for (let cuenta = 1; cuenta <= limiteCuenta; cuenta++) {
    if (sentidoHorario === true) {
        if (persona !== cantidadPersonas) {
            persona++; // igual a persona = persona + 1
        } else {
            persona = 1;
        }
    } else {
        if (persona !== 1) {
            persona--; // igual a persona = persona - 1
        } else {
            persona = cantidadPersonas;
        } 
    }
    console.log(`Persona ${persona} dice ${cuenta}`);
}
/**
    if (cuenta % 8 === 0) {
        sentidoHorario = !sentidoHorario;
    }

    if (cuenta % 11 === 0) {}
    
    console.log(`Persona ${persona} dice ${cuenta}`);}*/
