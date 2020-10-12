// ES5

// Escribe tu código aquí....
const array = [3, 34, 4, 12, 5, 2];
const dig = 9;

function findPairForSum(array, dig) {
  const pair = [];
  for (let item of array) {
    for (let item_2 of array) {
      let sum = item + item_2;
      if (sum == dig) {
        pair.push(item);
        pair.push(item_2);
        console.log(pair);
        return;
      }
    }
  }
}
findPairForSum(array, dig);
// ES6

// Ahora comenta todo el código anterior y pasalo a ES6
