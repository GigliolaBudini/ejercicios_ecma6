// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

// var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion

// function square (array) {
// }
//
// square(array);


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)
//const array = [2, 4, 6];
//const array = [-3, 2, -8, 12, 5];
const array = [1, 2, 3, 4, 5];

// declara la funcion y ejecuta el código
function square (array) {
  var nuevo_array = array.map((item)=>{
    return (Math.sign(item) == 1) ? item**2 : item;
  })

  return nuevo_array;
}

// ejecuta la funcion
console.log(square(array));
