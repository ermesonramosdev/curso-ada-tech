const prompt = require('readline-sync');

//! Coerção Explicita (Converção manual)
const age = Number(prompt.question('Qual he sua idade?'));

console.log(age, typeof age);

console.log(Number('x')); //*Nan: not a number = não é um numéro.
//! Coerção Implicita
console.log(1 + '1');
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');