//Importa modulo file system de node.js
const fs = require("fs");

//Definimos fx que acepta 5 parametros, dentro, el objeto que almacenara estos parametros.
function registrar(nombre, edad, tipo_animal, color, enfermedad) {
  const nuevaCita = { nombre, edad, tipo_animal, color, enfermedad };

  // Con fs lee el archivo del archivo citas.json - UTF-8 le da el formato de lectura como cad de texto apropiado que utilizamos.
  //Con json parse transformamos la cadena de texto json a un objeto js para manipular, esto sera parte del arreglo datos.
  const datos = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

  // Agrega con push la nueva cita al arreglo datos, que es el que contiene todas las citas existentes.
  datos.push(nuevaCita);

  // Pasa a JSON con stringify
  fs.writeFileSync("citas.json", JSON.stringify(datos, null, 2)); //con null dejamos el objeto sin modificaciones al json. Se agrega a json y sobreescribe.
  console.log(`Cita registrada para ${nombre}`);
}

// Fx para leer datos y para mostrarlos
function leer() {
  const datos = JSON.parse(fs.readFileSync("citas.json", "utf-8")); //pasa el json a un objeto js
  //caso 1 - no hay citas
  if (datos.length === 0) {
    console.log("No hay citas registradas.");
  } else {
    console.log("Citas registradas:");
    console.table(datos); //devuelve en forma de tabla los datos.
  }
}

// Exporta las funciones registrar y leer para usarlas en los demas archivos.
module.exports = { registrar, leer };
