/*
  ! Qual a diferença entre laços condicionais X laços numéricos.
    Nos laços condicionais é ultilizado uma condição ou seja eu não sei ao certo quando ele ira parar já os laços numéricos eu sei exatamente quantas vezes ele ira acontecer graças uma variavel de controle.

  ! FOR = para
    ? for(inicialição da variavel de controle; condição que define quando ira  ocorrer a parada do for; incremento para a variavel de controle);
    * Exemplo:
      for(let i = 1; i <= 5; i++) {
        console.log(i);
      }
  ! Loop inifito
  * Exemplo:
    for(;;) {
    }
  ! Estruturas de dados
    -> Estruturas de dados são formas de organizar e armazenar dados de maneira eficiente para operações e manipulações.
    * Exemplos de tipos de estruturas de dados:
      ? Arrays
      ? Maps
      ? Objetos
      ? Fila(Stack)
  ! Array
    -> Arrays são estruturas de dados que nos permite guarda coleção de dados.
    ? Metodos de array
      * 1.length -> Retorna o numero de elementos do array.
      * 2.slice -> Fatiamento de um array.
      * 3.push -> Adicionando elementos no final do array.
      * 4.unshift -> Adicionando elementos no inicio do array.
      * 5.pop -> Remover elementos no final.
      * 6.shift -> Remover elementos no inicio do array.
      ? Metodos para buscar elementos dentro de um array
        * 7. indexOf -> Retorna a posição do primeiro elemento que corresponde ao valor especificado.
        * 8. lastIndexOf -> Retorna a posição do último elemento que corresponde ao valor especificado.
        * 9. includes -> Verifica se um elemento existe no array. 
       
  ! For of
    -> Ele pecorrer os elementos do array
    Exemplo:
      for(element of array) {
        bloco de codígo;
      }
  ! For in
    -> Ele pecorrer os indices do array
    Exemplo:
      for(const indice in arr) {
        console.log(indice);
      }
    

*/

for(let i = 1; i <= 5; i++) {
  console.log(i);
}

//Limpando o console
console.clear();

const prompt = require('readline-sync');
let biggestNumber = 0;
let numberInformed;
for(let i = 0; i < 5; i++) {
  numberInformed = Number(prompt.question('Informe um numero positivo:'));
  if(numberInformed > biggestNumber) {
    biggestNumber = numberInformed;
  }  
}

console.log('O maior número informado foi:', biggestNumber);

// Percorrer string com o FOR
const name = 'Ermeson';
console.log(name.length)

for(let i = 0; i < name.length; i++) {
  console.log(name[i]);
  if(i == 4) {
    continue;
  }
}

//Arrays

const gradeFromStudants = [10, 8, 5];
const person = ['Ermeson', 17, 1.70, true];
console.log(gradeFromStudants)
console.log(person[0]);

person[3] = false;
console.log(person[3]);

console.clear();
console.log(person.length);
console.clear();

// ! Meu Array
const number = [1, 10, 20, 30, 40, 50];

//Fatiamento de um arrays
console.log(number.slice(0, 2));
console.clear();

//Adicionando elementos
number.push(11);
console.log(number)
console.clear();

number.unshift(0);
console.log(number);
console.clear();

//Removendo elementos
number.pop();
console.log(number);
console.clear();

number.shift();
console.log(number);
console.clear();

//Buscando elementos
console.log(number.includes(20));
console.clear();
console.log(number.indexOf(20));
console.clear();
console.log(number.lastIndexOf(20));
console.clear();

//Pecorrendo arrays com for

const arr = [45, 36, 90, 76, 32, 7];

for(let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
  console.clear();
}

//Pecorrendo arrays com for...of
for(const element of arr) {
  console.log(element);
  console.clear();
}

//Percorrendo arrays com for...in
for(const indice in arr) {
  console.log(indice);
}