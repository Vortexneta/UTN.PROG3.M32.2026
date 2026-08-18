// ======================================================================
// EJEMPLO 3: Generación de Marcado / UI
// Muestra cómo transformar un arreglo de datos en un listado 
// de etiquetas HTML o componentes UI, ideal para vincularlo el frontend.
// ======================================================================

const opcionesMenu = ['Inicio', 'Productos', 'Servicios', 'Contacto'];

// Transforma cada string en un string formateado como <li>
const itemsHTML = opcionesMenu.map(opcion => `  <li>${opcion}</li>`);

// Unimos el arreglo generado en un solo string
const menuHTML = `<ul class="nav-menu">\n${itemsHTML.join('\n')}\n</ul>`;

console.log('--- ESTRUCTURA ENTRADA ---');
console.log(opcionesMenu);

console.log('\n--- SALIDA HTML GENERADA ---');
console.log(menuHTML);