/*
  ! O que são laços de repetição 
    Estruturas de repetição não controladas
  ! While =  Enquanto
    exemplo:
      while(balance < 0) {
        balance = Number(prompt.question('Saldo invalido! Por favor, informe novamente:'));
      }
  ? Cuidado com o loop infito
    Se por algum motivo não tiver uma variavel para parar será criado um loop infinito pós ele necessita de uma condição para ser parada.
      *Exemplo:
        while(balance < 0)
  ? Math.random() 
    -> Vai gerar numeros entre 0 e 1
      * Exemplo
        const prompt = require('readline-sync');
        let numberRandom = parseInt(Math.random() * 10);
        const numberUsur = Number(prompt.question('Digite um numero entre 1 e 10:'));

        while(numberUsur !== numberRandom) {
          console.log('Tente novamente!');
          const numberUsur = Number(prompt.question('Digite um numero entre 1 e 10:'));
        }

        console.log(`Parabéns voçê acertou numéro era ${numberRandom}`);

  ! Break e Continue
    * Break
      -> Interrompe o laço de repetição e sai imediatamente.
    * Continue
      -> Pula o restante da iteração atual e continua com a próxima iteração.

  ! Do while = Faça Enquanto
    Ele serve para executar pelo menos uma vez
    * Exemplo:
      do {
        console.log('Executando...');
      } while(false); //Condição sempre false para executar pelo menos uma vez

*/

const prompt = require('readline-sync');

let balance = Number(prompt.question('Qual e o seu saldo:'));

while(balance < 0) {
  balance = Number(prompt.question('Saldo invalido! Por favor, informe novamente:'));
}

console.log(balance);


//Exemplo 2
const prompt = require('readline-sync');
let gradeStudants = Number(prompt.question('Informa a nota do aluno:'));
let sumFromGrade = 0; //Acumulador
let qtdGradesTyped = 0;

while(gradeStudants >= 0) {
  sumFromGrade += gradeStudants; //Incremento o acumulador (sumFromGrade)
  gradeStudants = Number(prompt.question('Informe a prxima nota: '));
  qtdGradesTyped++; //Acumulador (Quantidades de notas valídas digitadas)
}

console.log(`A soma das media são ${sumFromGrade / qtdGradesTyped}`);


//Exemplo 3
const prompt = require('readline-sync');
let numberRandom = parseInt(Math.random() * 10);
const numberUsur = Number(prompt.question('Digite um numero entre 1 e 10:'));

while(numberUsur !== numberRandom) {
  console.log('Tente novamente!');
  const numberUsur = Number(prompt.question('Digite um numero entre 1 e 10:'));
}

console.log(`Parabéns voçê acertou numéro era ${numberRandom}`);


//Loop com contador
let counter = 0;

while(counter <= 5) {
  console.log(`Contador: ${counter}`);
  counter++; //Incremento o contador
  if(counter == 2) {
    continue;
  }
  console.log('Depois do if')
}


//Do while

const prompt = require('readline-sync');

let balance2;

do {
  balance = Number(prompt.question('Informe um saldo válido: '));
}while(balance2 < 0);

console.log(balance2);