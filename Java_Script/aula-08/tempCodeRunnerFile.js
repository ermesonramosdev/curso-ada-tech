const prompt = require('readline-sync');

let balance;

do {
  balance = Number(prompt.question('Informe um saldo válido: '));
}while(balance < 0);

console.log(balance);