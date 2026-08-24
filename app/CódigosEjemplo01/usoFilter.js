// ==========================================
// EJEMPLO: Uso de .filter()
// ==========================================

const productos = [
  { id: 1, nombre: 'Teclado Mecánico', precio: 80, stock: true },
  { id: 2, nombre: 'Mouse Óptico', precio: 25, stock: false },
  { id: 3, nombre: 'Monitor 24"', precio: 200, stock: true },
  { id: 4, nombre: 'Auriculares', precio: 50, stock: true }
];

console.log('=== CATÁLOGO COMPLETO ===');
console.table(productos);

// Filtrar productos en stock y con precio mayor a $30
const disponiblesYValiosos = productos.filter(p => p.stock && p.precio > 30);

console.log('\n--- Productos en stock y > $30 (filter) ---');
console.table(disponiblesYValiosos);