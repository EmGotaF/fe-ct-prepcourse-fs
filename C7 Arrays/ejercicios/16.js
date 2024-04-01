function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var resultado = array.map(function(ele,index) {
    return ele * index;
  });
  return resultado;
}

module.exports = multiplicarElementosPorIndice;
