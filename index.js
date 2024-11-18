const { registrar, leer } = require("./operaciones"); // Importa funciones desde operaciones.js

const argumentos = process.argv.slice(2); // Eliminamos valores iniciales de process.argv que no necesitamos, solo argumentos relevantes.
const operacion = argumentos[0]; // La operación es el primer arg tras el slice. Debe ser leer o registrar.
const args = argumentos.slice(1); // Los datos adicionales son el resto de los argumentos

if (operacion === "registrar") {
  const [nombre, edad, animal, color, enfermedad] = args;

  // Validacion de datos
  if (!nombre) {
    console.log("Falta el nombre.");
  } else if (!edad) {
    console.log("Falta la edad.");
  } else if (!animal) {
    console.log("Falta el tipo de animal.");
  } else if (!color) {
    console.log("Falta el color.");
  } else if (!enfermedad) {
    console.log("Falta la enfermedad.");
  } else {
    // Si estan todos los datos se registra
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log('Operación no válida. Usa "registrar" o "leer".');
}
