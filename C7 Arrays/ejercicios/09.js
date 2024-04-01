function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if(array.length === 0){
      return undefined;
   }
   let aleatorio = Math.floor(Math.random() * array.length);
   return array[aleatorio];
}
module.exports = obtenerElementoAleatorio;
