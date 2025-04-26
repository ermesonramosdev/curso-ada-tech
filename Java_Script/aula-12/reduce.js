//REDUCE
const number = [ 1, 2, 3, 4, 5];

const add = number.reduce((acumulador, element, _, arrayCompleto) => {
  return element / arrayCompleto.length + acumulador;
}, 0);

console.log(add);
console.clear();

//media

const addPair = number.reduce((acumulador, element) => {
  if(element % 2 === 0) {
    return acumulador + element;
  } else {
    return acumulador;
  }
}, 0);

console.log(addPair);

const shoppingCarts = [
  { product: "Feijão", price: 7.98, quantities: 3 },
  { product: "Arroz", price: 4.98, quantities: 5 },
  { product: "Leite 1L", price: 6.99 , quantities: 2 },
];

const totalPrice = shoppingCarts.reduce((acumulador, element) => {
  return (element.price * element.quantities) + acumulador;
}, 0);

console.log(totalPrice);