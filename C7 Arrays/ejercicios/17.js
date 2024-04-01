function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(function (acum, elem) {
    return acum + elem;
  }, 0);

}

module.exports = agregarNumeros;
