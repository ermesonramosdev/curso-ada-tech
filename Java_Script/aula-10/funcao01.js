/*
  ! O que são funções?
    -> são blocos de codígos que a gente construi e que nos permite reutilizar.
    ? Uso de return
      -> Ele ajuda tornando o uso de funções mais flexiveis ultilizando variaveis para a armazenação de contéudo.
    ? Parâmentro padrão
      -> Parâmentro opcional que possui um valor padrão caso não seja passado.
      * Exemplo:
          function greetingToTheStudants(nameFromStudant, course="curso não definido ainda");

  ! DRY - Don't Reapt Yourself
    -> Princípio de programação que diz que não devemos repetir codígo.
  ! Template string ou template literais
    -> Uso de crase para inserção de variaveis dentro de um texto.
    * Exemplo:
        console.log(`${variavel}`);
  ! Função anonimâma
    -> E uma função que não possui nome ela é bastante ultlizado nas funções de alta ordem ela é passada com paramentro para outras funções.
    * Exemplo:
        const doubleFromNumber = function(number) {
          return number * 2;
        }
  ? First Class Function
    -> Funções são tratadas como variaveis.
  ! Arrow Functions
    -> Função seta, ela tem sintaxe mais curta
    * Exemplo:
        const variavel = (paramentro) => {
          bloco de codígo;
        }
  ! Object Literal
    ? Adicionar atributos
      const person = {
        name: 'Ermeson',
        age: 17,
        heigth: 1.70,
        isProgrammer: true,
        hobbies: ['Academia', 'futebol']
      };
      person.profession = 'Desenvolvedor';
  
  ! Desentruturação de objetos
    -> E tirar um atributo e colocar em uma variavel
    * Exemplo:
      const { name } = person;

    ? Deletar atributos
      delete person.heigth;
    * Exemplo:
      const person = {
        chave: atributo,
      }
  -> 
*/

function greetingToTheStudants(nameFromStudant, course="curso não definido ainda") {
  return `Olá, seja bem-vindo(a) ao curso de ${course} ! ${nameFromStudant}`;
}

const massageFromGreeting1 = greetingToTheStudants('Ermeson', 'Front-end em React');
const massageFromGreeting2 = greetingToTheStudants('Alessando');
console.log(massageFromGreeting1);
console.log(massageFromGreeting2);
console.clear();

const doubleFromNumber = function(number) {
  return number * 2;
}


console.log(doubleFromNumber(2));
console.clear();


const subtract = (number1, number2) => {
  return number1 - number2;
}

const multiply = (number1, number2) => number1 * number2;

const trheeFromNumber = (number) => number * 3;
console.log(trheeFromNumber(3));