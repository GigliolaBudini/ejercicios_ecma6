// En este ejercicio te ayudaremos con la solucion de ES5, solo tendras que pasarlo a ES6

const inventory = [
  { name: "Inka Cola", category: "beverage", stock: "10" },
  { name: "Cusqueña", category: "beverage", stock: "15" },
  { name: "Pisco", category: "beverage", stock: "20" },
  { name: "Lúcuma", category: "fruit", stock: "30" },
  { name: "Aguaymanto", category: "fruit", stock: "5" },
  { name: "Tequila", category: "beverage", stock: "50" },
  { name: "Mezcal", category: "beverage", stock: "25" },
  { name: "Aguacate", category: "fruit", stock: "100" },
  { name: "Chayote", category: "fruit", stock: "5" },
  { name: "Cuitlacoche", category: "fungus", stock: "10" },
  { name: "Arándonos", category: "fruit", stock: "19" },
  { name: "Ciruela", category: "fruit", stock: "8" }
];

// var totalByCategory = function(inventory, category) {
//   var filterCategory = function filterCategory(prod) {
//     var totalProd = prod.category === category;
//     return totalProd;
//   };
//   var sumInventory = function sumInventory(prodAnterior, prodActual) {
//     var base = prodAnterior + parseInt(prodActual.stock, 10);
//     return base;
//   };
//   var filtrando = inventory.filter(filterCategory).reduce(sumInventory, 0);
//   console.log(filtrando);
//   return filtrando;
// };
//
// totalByCategory(inventory, "beverage");


// Comenta todo el código de arriba (ecepto la const inventory) y pasa el código a ES6

var totalByCategory = (inventory, category) => {
  var filtrarCategoria = (valor) => {
    return valor.category === category;
  }
  var sumarInventario = (total, valor) => {
    return total + parseInt(valor.stock,10);
  }
  var array_filtrado = inventory.filter(filtrarCategoria).reduce(sumarInventario,0);

  return array_filtrado;
};

console.log("Total beverage:",totalByCategory(inventory, "beverage"));
console.log("Total fruit: ",totalByCategory(inventory, "fruit"));
console.log("Total fungus: ",totalByCategory(inventory, "fungus"));
