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
- condición: String que valga 'APROBADO' si el promedio es mayor o igual 6
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
  { id: 4, nombre: 'Florencia', parcial1: 7, parcial2: 5 },
  { id: 5, nombre: 'Eriberto', parcial1: 2, parcial2: 4 }
];

// SOLUCIÓN DE FEDEDRICO:
const estudiantesConPromedio = estudiantes.map(estudiante => {
  const promedio = (estudiante.parcial1 + estudiante.parcial2) / 2;
  /*let condicion = "";
  if (promedio >= 6) {
    condicion = 'APROBADO';
  } else {
    condicion = 'RECUPERA'
  }*/
  return {
    ...estudiante, 
    promedio: promedio,
    condicion: promedio >=6 ? 'APROBADO' : 'REPROBADO' 
  };
});

console.log("======== SOLUCIÓN FEDERICO ===============")
console.table(estudiantesConPromedio);

//Edgar Solution:  OJO TODOS REPROBADOS

const estudiantesConPromedio2 = estudiantes.map(e => ({
  ...e,
  promedio:  (e.parcial1 + e.parcial2) / 2,
  condicion: ((e.parcial1 + e.parcial2) / 2)>= 6 ? "Aprobado" : "Recupera"
}));

console.log("======== SOLUCIÓN EDGAR ===============")
console.table(estudiantesConPromedio2);

//RENDERIZACIÓN ANTONELLA

const listaEstudiantes = estudiantesConPromedio.map(estudiante =>
  (`<li> ${estudiante.nombre} - promedio: ${ estudiante.promedio } (${estudiante.condicion }) </li>`))
const textoHTML = "<ul> \n"+ listaEstudiantes.join('\n')+ "\n</ul>";  // joinea en la cadena textoHTML.
console.log('--- ESTUDIANTES ---');
console.log(textoHTML);                   // muestra la cadena.