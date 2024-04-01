function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  for (let i = 0; i <20;  i++) { 
    if(edad >= 18){
        return "Allowed";
       }
}
 return "Not allowed"
}

console.log(mayoriaDeEdad());
module.exports = mayoriaDeEdad;
