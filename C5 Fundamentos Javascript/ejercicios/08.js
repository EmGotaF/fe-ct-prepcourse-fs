function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
 if (numero === "string") {
  return false;
}
return numero === Math.round (numero)


return Number.isInteger(numero)

}

module.exports = esNumeroEntero;