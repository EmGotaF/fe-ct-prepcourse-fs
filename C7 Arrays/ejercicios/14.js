function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let cuenta = 0;
  for(i = 0; i < array.length; i ++){
    if(cuenta === 10) {
      break;
    }
   cuenta++;
  }
  return cuenta;
}

module.exports = contarElementosMayoresA10;
