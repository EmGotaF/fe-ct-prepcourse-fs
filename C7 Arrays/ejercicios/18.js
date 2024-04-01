function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let resultado = resultadosTest.reduce(function(con,numero) {
    return con = con + numero;
  });
return resultado / resultadosTest.length;
} 

module.exports = promedioResultadosTest;
