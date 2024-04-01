function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
 for(let i = 0; i < numeros.length; i++) {
  for(let c = i + 1; c < numeros.length; c++){
        if(numeros[i] === numeros[c]) return numeros [i];
  }
 }
}

module.exports = encontrarElementoRepetido;