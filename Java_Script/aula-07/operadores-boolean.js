/*
  *Operadores boolean: Comparação
  ! Diferença entre =, == e ===
  ? = 
    -> E ultilizado para declaração de variaveis
  ? == 
    -> E ultilizado para comparar valores sem considerar o tipo
  ? === 
    -> E ultilizado para comparar valores e tipos de dados
  
  ! Conjuções logicas 
    Exemplo:
      console.log(agePerson1 >= 18 && agePerson2 >= 18)
    * && = E
        -> Retorna true se ambos os operandos forem true
    * || = OU
        -> Retorna true se pelo menos um dos operandos forem true
    * ! = NAO
        -> Inverte o valor booleano
  ! Truthy e Falsy
    ? Falsy
      * Valores que são considerados falsos: false, 0, '', null, undefined, NaN.
      ->Valores que são considerados falsos

    ? Truthy
      -> Tudo aquilo que for considerado verdadeiro 

  ! Estruturas condicionais 
    Exemplo:
      if (age >= 18) {
        console.log('Pode entrar');
      } else {
        console.log('Não pode entrar');
      }
    * IF = Se
      -> Se condição for true
    * ELSE IF = Senão se
      -> Se a primeira condição for false
    * ELSE = Senão
      -> Se as duas primeiras condições forem false

  ! Switch Case
    -> Muito útil quando sua variável possui valores especificos
    Exemplo:
      const permissions = 'Ermeson'; //Aluno ou Professor ou Admin

      switch(permissions) {
        case "Aluno":
          console.log('Voçê só pode visualizar as aulas');
          break;
        case "Professor":
          console.log('Voçê pode visualizar as aulas, gravar, e excluir');
          break;
        case "Admin":
          console.log('Voçê pode fazer o que quiser no sistema operacional');
          break;
        default:
          console.log('Voçê não tem permissão para acessar esse recurso');
      }

    ! Operador Ternario 
      ->Forma simplificada do if else.
      Exemplo:
        const age = 17;
        age >= 18 ? true : false;

*/

const num1 = 10;
const num2 = 12;

console.log(num1 == 2);
console.log(num1 === num2);
console.log(num1 == "10");
console.log(num1 !== "10");
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 < num2);

const agePerson1 = 17;
const agePerson2 = 39;

console.log(!(agePerson1 >= 18 && agePerson2 >= 18));
console.log(agePerson1 >= 18 || agePerson2 >= 18);

