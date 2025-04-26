/*
  ! Variaveis 
    pedaçinho de memoria destinada a armazenar o contéudo.
  ! Como nomear variaveis
    camelcase
     exemplo:
    *nameFromTeacher
  
  ! Tipos de variaveis 
    ? No JavaScript ocorre a tipagem dinâmica ou seja ele pode mudar o tipo da variaval no fluxo do codígo.
    ? JavaScript possui uma tipagem fraca.
    * String
      var name = 'Ermeson';
    * Number
      var age = 17;
    * Boolean
      var studying = true(Verdadeiro) ou false(Falso);
    *underfined -> Variavel declarada mas que não recebeu nenhum contéudo
      var noContent;

  ! Novas formas de declaração de variavel
    * let 
        -> Sintaxe mais segura que var, não permite redeclaração e não possui escopo global.
    * const 
        -> Sintaxe mais segura que let, não permite redeclaração e possui escopo global.

  ! Hosting e Escopos
  *Escopo global
    Variáveis declaradas que podem ser acessadas em qualquer parte do codígo.
  *Escopo Local
    Variáveis que só funcionam em um bloco de codígo.
  *Hosting
    Iniciar as variaveis antes de serem declaradas
*/

var name = 'Ermeson';
var age = 17;
var heigth = 1.70;
var studying = true;
var noContent;
var course = ('Front-end em React'), 
topic = ('JavaScript');
const pi = 3.16;
let studentGrade = 6;


console.log(`meu nome é ${typeof name} tenho ${typeof age} anos tenho ${typeof heigth} de altura e se eu estou estudando ${typeof studying}`);
console.log(course, topic)

console.log(studentGrade); 
console.log(pi);
