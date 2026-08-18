// 1. Declaración con inferencia de tipo inicial
let x = 20000;
console.log("Valor:", x, "| Tipo:", typeof x); 
// Output: Valor: 10 | Tipo: number

// 2. Reasignación con otro tipo de dato (Imposible en C#)
x = "Ahora soy una cadena";
console.log("Valor:", x, "| Tipo:", typeof x); 
// Output: Valor: Ahora soy una cadena | Tipo: string

// 3. Operaciones raras por coerción implícita de tipos
let resultado = "5" + 2; 
console.log("Resultado '5' + 2:", resultado, "| Tipo:", typeof resultado); 
// Output: Resultado '5' + 2: 52 | Tipo: string

let resta = "5" - 2;
console.log("Resultado '5' - 2:", resta, "| Tipo:", typeof resta); 
// Output: Resultado '5' - 2: 3 | Tipo: number
