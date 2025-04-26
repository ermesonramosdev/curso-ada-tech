const shoppingCarts = [
  { product: "Feijão", price: 7.98, quantities: 3 },
  { product: "Arroz", price: 4.98, quantities: 5 },
  { product: "Leite 1L", price: 6.99 , quantities: 2 },
];

const totalPrice = shoppingCarts.reduce((acumulador, element) => {
  return (element.price * element.quantities) + acumulador;
}, 0);

console.log(totalPrice);