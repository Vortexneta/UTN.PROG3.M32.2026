//========================================

//USO DE REDUCE


// Ejemplo de acumulación con reduce() 
const carrito = [ 
  { producto: 'Laptop', precio: 1200 }, 
  { producto: 'Funda', precio: 30 } 
]; 
 
// El 0 final representa el valor inicial del acumulador 
const total = carrito.reduce((acum, item) => acum + item.precio, 0); 

console.log("====== EJEMPLO DE .reduce() ================");
console.log("Valores 'originales':");
console.table(carrito);
console.log("");
console.log("Total acumulado: " + total);
console.log("total es "+ typeof(total));
