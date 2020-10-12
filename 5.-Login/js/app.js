// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// declara el prompt

// function user () {
// // escribe tu código aqui...
//   var contrasena = "laboratoria";
//   var contrasena_re = prompt("Ingresa tu contraseña: ");
//
//   console.log(contrasena_re === contrasena? true : false);
// }
//
// user();
// comenta todo lo anterior y escribelo en ES6


var user = () => {
  const contrasena = "laboratoria";
  let contrasena_re = prompt("Ingresa tu contraseña");

  console.log((contrasena === contrasena_re) ? true : false);
};

user();
