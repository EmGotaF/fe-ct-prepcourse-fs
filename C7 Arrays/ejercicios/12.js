function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayEnMayusculas = [];
for( let i = 0; i < array.length; i++){
  let elementoMayusculas = array[i].toUpperCase();
  arrayEnMayusculas.push(elementoMayusculas);
}
return arrayEnMayusculas;
}
module.exports = convertirStringAMayusculas;
