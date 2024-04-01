function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
let arrayNuevo = arrayOfStrings.filter(function(ele,){
   return ele.toLowerCase().startsWith('a');
});
return arrayNuevo;
}

module.exports = filter;
