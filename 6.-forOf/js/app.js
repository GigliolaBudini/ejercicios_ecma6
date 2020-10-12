// ES5

// declara la variable
// var array = [10, 20, 30, 20, 30, 40, 60];


// escribe tu funcion
// function computeSumOfAllElements() {
//   let promedio = 0;
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   promedio = sum / array.length;
//
//   console.log("El promedio de este arreglo es: ", promedio);
// }
//
// computeSumOfAllElements();

//ES6
// Comenta todo lo anterior y escribelo en ES6

// declara la variable
const array = [10, 20, 30, 20, 30, 40, 60];

// escribe tu funcion
var computeSumOfAllElements = () => {
  let promedio = 0;
  for (item of array) {
    promedio += item;
  }

  promedio = promedio / array.length;
  console.log("El promedio de este arreglo es: ", promedio);
}

computeSumOfAllElements();
