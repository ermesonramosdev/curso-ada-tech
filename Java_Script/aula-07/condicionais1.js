const prompt = require('readline-sync');

const age = Number(prompt.question('Qual a sua idade?'));

const youIsFromLangerAge = age >= 18;

if(youIsFromLangerAge) {
  console.log('Você é maior de idade!');
} else {
  console.log('Você é menor de idade!');
}

const grade1 = Number(prompt.question('Qual a sua 1º nota?'));
const grade2 = Number(prompt.question('Qual a sua 2º nota?'));
const avarege = (grade1 + grade2) / 2;

if(avarege >= 7) {
  console.log('Parabéns voçê foi aprovado!');
} else if(avarege == 6) {
  console.log('Voçê foi reprovado mais ira fazer um trabalho para recuperar nota')
} else {
  console.log('Voçê foi reprovado!');
}