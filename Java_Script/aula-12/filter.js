//FILTER
const numbers = [1, 2, 3, 4, 5, 6];


const pairs = numbers.filter((value) => value % 2 == 0);

console.log(pairs); 


const studant = [
  { name: "Quincy", average: 96 },
  { name: "Jason", average: 84 },
  { name: "Alexis", average: 100 },
  { name: "Sam", average: 65 },
  { name: "Katie", average: 90 }
];

const aboveAverage = studant.filter((result) => {
  return result.average > 85
});

console.log(aboveAverage);

const product = [
  { name: "Suco de Laranja", price: 7.50, type: "Bebida" },
  { name: "Batata Frita", price: 10.50, type: "Comida" },
  { name: "Pizza", price: 12.49, type: "Comida" },
  { name: "Chocolate", price: 1.50, type: "Comida" },
  { name: "Pastel", price: 4.50, type: "Comida" },
  { name: "Coca-Cola", price: 6.99, type: "Bebida" },
];

const findProduct = product.filter((item) => {
  return item.price < 10 && item.type !== "Bebida";
});

console.log(findProduct);