/*Ejercicio 1: Procesador de Calificaciones y Reporte HTML (ejercicio01.js)

Objetivo: Practicar transformación de objetos con .map(), operador spread (...), 
creación de marcado HTML y evitar el uso incorrecto de .map().

Consigna:Dado el siguiente arreglo de alumnos:JavaScript

const estudiantes = [
  { id: 1, nombre: 'Lucas', parcial1: 4, parcial2: 6 },
  { id: 2, nombre: 'Mariana', parcial1: 8, parcial2: 9 },
  { id: 3, nombre: 'Gonzalo', parcial1: 2, parcial2: 3 },
  { id: 4, nombre: 'Florencia', parcial1: 7, parcial2: 5 }
];

Utilizando .map() y el operador Spread (), generá un nuevo arreglo 
"estudiantesConPromedio" donde cada objeto conserve sus propiedades originales
e incorpore:
- promedio: Promedio numérico entre parcial1 y parcial2.
- condicion: String que valga 'APROBADO' si el promedio es mayor o igual 6
            o 'RECUPERA' si es menor.
 A partir del arreglo generado, utilizá .map() y .join() para crear una cadena
 de texto que genere una lista HTML con el formato:
 <li>Lucas - Promedio: 5 (RECUPERA)</li>
 Imprimí el HTML resultante por consola y verificá que el arreglo estudiantes
 original no haya sufrido ninguna mutación.
*/

const estudiantes = [
  { id: 1, nombre: 'Lucas', parcial1: 4, parcial2: 6 },
  { id: 2, nombre: 'Mariana', parcial1: 8, parcial2: 9 },
  { id: 3, nombre: 'Gonzalo', parcial1: 2, parcial2: 3 },
  { id: 4, nombre: 'Florencia', parcial1: 7, parcial2: 5 }
];
