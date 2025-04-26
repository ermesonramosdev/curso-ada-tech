/*
  ! TypeScript I
    -> Nada mas é que do que o JavaScript com a adição de tipagem estatíca.
    * Por que estudar o TypeScript
      -> Types.
      -> Utilização de um JS mais recente (Compilado para funcionar em browsers mais antigos).
      -> Adiciona recursos, que não existem no JS (ex: Interfaces e Generics).
      -> Muitas opções de configurações.
      -> Melhores sugestão de codígo em IDEs que têm um suporte melhor ao TS.
    * Como utilizar o TypeScript
      -> O TypeScript é configurado com o node.js
    * Configurações do TypeScript 
      1. Inicializar um projeto Node.js 
      1.1. `nmp init ou -y`
      2. Instalar o TypeScript 
        2.1. Instalação Global (Instala o TypeScript na máquina toda). -> `npm install -g typescript`
        2.2. Instalação Local (Instalção dentro do projeto). -> `npm install typescript -D`
      3. Utilizar o TypeScript para transpilar o nosso codígo 
      3.1. `npx tsc 'nomedoarquivoparasercompliado --watch'`
      4. Mexer nas configurações do TypeScript
        4.1 `npx tsc --init`

  ! TypeScript II
    * Tipagens

    -> Inferência de tipos o TypeScript indêntifica o tipo de dado quando eu passo direto para a variável. 

    1.1. Numeros = Number
    1.2. Letras e caracteres = String
    1.3. verdadeiro ou falso = Boolean
    1.4. Arrays = {
      * Exemplo 1: 
        1.1. const myArray: number[] = [1, 2, 4, 5];
      * Exemplo 2:
        1.1. const myArrayRandom: (number | string)[] = ['Ermeson', 17, 1.70];
      * Exemplo 3:
        1.1. const myOtherArray: Array<number>  = [1, 2, 3, 4,];    
    }
    * Tuplas
      -> Sempre vai ter dois valores com o mesmo objetivo.
      ->Exemplo: const person: [string, number] = ['Ermeson', 17];

    * Object Types 
      -> São objetos que possuem um nome e um tipo de dados para cada chave.
      -> Exemplo: const person: {name: string, age: number} = {name: 'Ermeson', age: 17};

      * Interface 
        -> uma interface é uma estrutura que define a forma de um objeto. Ela serve como um contrato, especificando quais propriedades e métodos um objeto deve ter, incluindo seus tipos, mas sem implementar a lógica desses métodos. Interfaces são úteis para garantir que diferentes partes do código sigam um padrão consistente.

        const person: Person = {
        name: 'Ermeson',
        age: 17,
        work: 'Develop',
        heigth: 1.70
      }


      //Interface
      interface Person {
        name: string;
        age: number;
        work?: string; -> Essa ? significa que o atributo não é obrigatorio.
        heigth: number;
      }

      * Type 
        -> é usado para descrever a forma e a estrutura de objetos, especificando as propriedades que um objeto deve ter e seus respectivos tipos. Ele é uma das maneiras de criar tipos personalizados no TypeScript

        const person: PersonType = {
        name: 'Ermeson',
        age: 17,
        work: 'Develop',
        heigth: 1.70
      }

      console.log(person);

      //Type
      type PersonType = {
        name: string;
        age: number;
        work?: string;
        heigth: number;
      }

      ! Diferença entre o Type eo Interface 
          -> Em TypeScript, tanto interface quanto type podem ser usados para definir tipos de objetos. Eles compartilham muitas semelhanças, mas têm algumas diferenças importantes. A escolha entre os dois geralmente depende do caso de uso e das preferências pessoais ou da equipe.Type é ultilizado de forma mais génerica

    * Union Types
          -> O Union Type em TypeScript é um recurso que permite que uma variável, parâmetro ou propriedade assuma um valor de mais de um tipo definido. É usado quando você quer que algo possa ser de múltiplos tipos, mas não necessariamente ao mesmo tempo.

    * Literal Type  
          ->  O Literal Type em TypeScript permite especificar que uma variável ou parâmetro pode assumir apenas um valor específico, ao invés de um tipo genérico como string, number, ou boolean. Ele é muito útil para criar tipos mais restritivos e previsíveis.

          Os Literal Types podem ser usados com strings, números ou booleanos, e combinados com outros recursos do TypeScript, como Union Types e Type Aliases.
    * Type Aliases 
      -> Em TypeScript, um Type Alias (ou "alias de tipo") é uma forma de criar um nome personalizado para um tipo existente ou para um conjunto de tipos. Ele é usado para melhorar a legibilidade, a reutilização e a organização do código.
    * Tipagem de funções 
      -> A tipagem de função em TypeScript permite definir o tipo de seus parâmetros e do valor de retorno. Isso ajuda a garantir segurança e clareza no código, prevenindo erros comuns e facilitando o trabalho em equipes.

    * Utility Type
      -> A ideia deles é permiter que você crie novos tipos a partir de tipos já existentes.

        ? 1.1. Partial
          -> Quando você utilizar o partial e envolve <> o nome de alguma interface todos os atributos vão se torna não obrigatorio.
          * Exemplo: type PersonPartial = Partial<Person>;

        ? 1.2. Required
          -> Quando você utilizar o partial e envolve <> o nome de alguma interface todos os atributos vão se torna obrigatorio.
          * Exemplo: type PersonRequired = Required<Person>;

        ? 1.3. Pick
          -> A parti de uma interface já existente pegar alguns atributos dela.
          * Exemplo: type PickPerson = Pick<Person, 'name' | 'age'>;

        ? 1.4. Omit
          -> Omitir ou esconder alguns atributos.
          * Exemplo: type OmitPerson = Omit<Person, 'work'>;

        ? 1.5. Exclude
          -> A ideia é ele excluir alguns atributos.
          * Exemplo: type CriterioExclude = Exclude<Criterio, 'greater'>;

        ? 1.6. Record
          ->O Record em TypeScript é um utility type usado para criar um objeto tipado onde as chaves pertencem a um conjunto específico de tipos e os valores têm outro tipo específico.Ele é útil para criar dicionários ou mapas de maneira tipada, fornecendo um controle mais robusto sobre as chaves e os valores de um objeto.

          * Exemplo: type Persons = Record<string, Person>;




    ? Evite sempre utilizar o any para tipagem em TypeScript você está anulando o TypeScript.

    ! Sempre que for criar um Type ou Interface tem que iniciar com letra maiuscula PascalCalse.

*/

