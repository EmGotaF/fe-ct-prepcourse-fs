function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
let resultado =  arrayOfNumbers.reduce(function(acum,ele){
 return acum = acum + ele
});
return cb(resultado);


}

module.exports = sumarArray;
