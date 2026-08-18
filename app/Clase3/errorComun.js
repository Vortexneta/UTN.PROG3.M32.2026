// ==========================================
// EJEMPLO 4: Error común vs Uso Correcto
// ==========================================

const numeros = [1, 2, 3, 4];

// ❌ ERROR COMÚN: Usar .map() sin `return` tratando de mutar algo externo
const malUsoMap = numeros.map(n => {
  n * 2; // Al no haber 'return', mapea cada valor a 'undefined'
});

console.log('❌ Resultado de map sin return:', malUsoMap);

// ✅ USO CORRECTO DE .map(): Retornar la expresión directa
const mapeoCorrecto = numeros.map(n => n * 2);
console.log('✅ Resultado de map correcto:', mapeoCorrecto);

// ✅ USO CORRECTO DE .forEach(): Para iterar y ejecutar acciones (Side-effects)
console.log('\n✅ Uso adecuado de forEach (imprimir paso a paso):');
numeros.forEach((n, i) => {
  console.log(`  Índice ${i}: El doble de ${n} es ${n * 2}`);
});