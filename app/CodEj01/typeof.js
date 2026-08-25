// 1. Declaración con inferencia de tipo inicial
let x = 20000;
console.log("Valor:", x, "| Tipo:", typeof x); 
// Output: Valor: 10 | Tipo: number

// 2. Reasignación con otro tipo de dato (Imposible en C ó C#)
x = "Ahora soy una cadena";
console.log("Valor:", x, "| Tipo:", typeof x); 
// Output: Valor: Ahora soy una cadena | Tipo: string

// 3. Operaciones raras por coerción implícita de tipos
let resultado1 = "5" + 2;
let resultado2 = "5" - 2;
console.log(""); 

console.log("Resultado '5' + 2:", resultado1, "| Tipo:", typeof resultado1); 
console.log("Resultado '5' - 2:", resultado2, "| Tipo:", typeof resultado2); 
