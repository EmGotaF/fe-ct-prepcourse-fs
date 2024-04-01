function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let contadorPares = 0;

  if (!numeros || numeros.length === 0) {
    return 0;
  }
  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] !== 'number') {
      continue;
    }
    if (numeros[i] % 2 !== 0) {
      continue;
    }
    contadorPares++;
  }
  return contadorPares;
}

module.exports = contarParesConContinue;
