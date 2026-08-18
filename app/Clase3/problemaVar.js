// Código JS usando var
if (true) {
    var mensaje = "Hola desde el bloque";
}
// En C#, 'mensaje' no existiría fuera del if.
// En JS con var, la variable se "fuga" al scope exterior:
console.log(mensaje); // Imprime: Hola desde el bloque

if (true) {
    let bloqueSeguro = "Solo vivo dentro del IF";
    const constante = 100;
}

// Intentar acceder afuera lanza un error en tiempo de ejecución:
// console.log(bloqueSeguro); // ReferenceError: bloqueSeguro is not defined