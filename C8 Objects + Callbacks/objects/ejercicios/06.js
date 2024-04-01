const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
let cuenta = 0;
for(const propiedad in objeto){
  if(objeto.hasOwnProperty(propiedad)) {
    cuenta++;
  }
}
return cuenta;
};

module.exports = contarPropiedades;
