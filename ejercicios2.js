//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
//si la edad ingresada no es un número válido indicarlo en un mensaje.

/** 
const edad= parseInt(prompt("Ingrese su edad: "));

if(edad >= 18 && edad <= 69){
    alert("Ya puedes conducir");
}  else if (edad < 0 || edad >= 70){
    alert("No es un número válido");
} else{
    alert("No puedes conducir"); 
}*/


//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
//0-2: Muy deficiente   3-4: Insuficiente   5-6: Suficiente 7: Bien  8-9: Notable    10: Sobresaliente
//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
//Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
/** 
const nota= (prompt("Ingrese su nota: "));

if(nota >= 0 && nota <= 2){
    alert("Muy deficiente");
} else if(nota >= 3  && nota <= 4){
    alert("Insuficiente");
} else if(nota >= 5  && nota <= 6){
    alert("Suficiente");
} else if(nota >= 7 && nota < 8){
    alert("Bien");
}  else if(nota >= 8 && nota <= 9 ){
    alert("Notable");
} else if(nota === 10 ){
    alert("Sobresaliente");
} else {
    alert("Número erróneo");
    alert("Introduce un número válido");
}*/

var resultado = ""
// BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    // PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    // SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        // CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    // SINÓ
    else {
        // CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
    alert(resultado);
// MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));



