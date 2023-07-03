/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num === 0){
   return false;
   }
   if (num > 0) {
      return  "Es positivo";
   }
   else {
      return "Es negativo";
   }
  
}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let symbol = '!';{
      return str + symbol;
   }
   
 }
 agregarSimboloExclamacion("hello world")

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let combinacion = (nombre + " " + apellido); {
      return combinacion;
    }
   
 }
 combinarNombres( "Soy", "Henry")


function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let saludo = "Hola" + " " + nombre + "!"; {
      return saludo;
   }
   
 }
 
 obtenerSaludo('Martin')

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   let area = alto * ancho;{
   return area;
 }
}
 obtenerAreaRectangulo(15,5)


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let perimetro = lado * 4; {
      return perimetro;
   }
}
retornarPerimetro (4)

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let areatr = base * altura / 2; {
      return areatr;
   }
}
areaDelTriangulo (4,9)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let valorEu = euro * 1.20; {
      return valorEu;
   }
}
deEuroAdolar(5)

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   
  if (letra.length > 1) {
   return "Dato incorrecto";
 } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra ===  'u') {
   return "Es vocal";
 } else {
   return "Dato incorrecto";
 }
}

console.log(esVocal("a"));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
