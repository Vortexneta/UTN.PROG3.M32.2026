// ==========================================
// EJEMPLO 1: Calcular IVA (21%)
// ==========================================

const precios = [100, 250, 500];

// --- Enfoque Imperativo (C / C# tradicional) ---
const preciosConIVAImperativo = [];
for (let i = 0; i < precios.length; i++) {
  preciosConIVAImperativo.push(precios[i] * 1.21);
}

// --- Enfoque Funcional (JavaScript) ---
const preciosConIVAFuncional = precios.map(precio => precio * 1.21);

// --- Salidas por consola ---
console.log('--- ENTRADA ---');
console.log('Precios originales:', precios);

console.log('\n--- SALIDAS ---');
console.log('Imperativo (for) :', preciosConIVAImperativo);
console.log('Funcional (map)  :', preciosConIVAFuncional);

// Comprobación de Inmutabilidad
console.log('\n¿El arreglo original se modificó?:', precios);