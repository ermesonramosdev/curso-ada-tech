// map 

const number = [1, 2, 3, 4, 5, 6, 7, 8,];

const newArray = number.map((element) => {
  return element * 2;  
});

console.log(newArray);


// map elevado ao quadrado
const value = [2, 4 , 6, 8, 10, 12];

const newValue = value.map((value) => {
  return value ** 2;  
});

console.log(newValue);

//map carrinhos
const shoppingCarts = [
  { product: "Feijão", price: 7.98, quantities: 3 },
  { product: "Arroz", price: 4.98, quantities: 5 },
  { product: "Leite 1L", price: 6.99 , quantities: 2 },
];

const cartWithTotal = shoppingCarts.map((cartItem) => {
  return {
    ...cartItem,
    total: cartItem.price * cartItem.quantities,
  };
});

console.log(cartWithTotal);



const person = {
  name: "Ermeson",
  age: 17,
  heigth: 1.70
}

// Desestruturação ou spread(operator)
const personWithWeigth = {
  ...person,
  weigth: 79
}

console.log(personWithWeigth);