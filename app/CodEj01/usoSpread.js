// ==========================================
// USO DE Spread(): Transformación de Objetos
// Muestra dos de las operaciones más habituales en backend/frontend: 
// proyección de propiedades y enriquecimiento de objetos mediante 
// el operador spread (...).
// ==========================================

const estudiantes = [
  { id: 1, nombre: 'Ana', nota: 8 },
  { id: 2, nombre: 'Luis', nota: 5 },
  { id: 3, nombre: 'Carlos', nota: 9 },
  { id: 4, nombre: 'Gloria', nota: 10},
  { id: 5, nombre: 'Cacho', nota: 10}
  
];

console.log('=== DATOS ORIGINALES ===');
console.table(estudiantes);

// A) Proyección: Extraer solo los nombres (Arreglo de strings)
const nombres = estudiantes.map(estudiante => estudiante.nombre);

console.log('\n--- 1. Solo nombres (Proyección) ---');
console.log(nombres+'\n');
console.table(nombres);

// B) Enriquecimiento: Agregar propiedad 'aprobado' sin mutar los objetos originales
const estudiantesConEstado = estudiantes.map(estudiante => ({
  ...estudiante,                     // Copia las propiedades actuales
  aprobado: estudiante.nota >= 6   // Agrega la nueva propiedad
}));

console.log('\n--- 2. Estudiantes con estado de aprobación ---');
console.table(estudiantesConEstado);

// Verificación de inmutabilidad en el primer estudiante original
console.log('\nVerificación: ¿El estudiante original sigue intacto?');
console.log(estudiantes[0]); // No debe tener la propiedad 'aprobado'

/**/