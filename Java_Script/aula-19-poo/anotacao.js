/*
  ! Programação Orientada a Objetos.
    -> Paradigma de programação que foca na modelagem das entidades envolvidas em um problema(Objetos) e na interação entre elas.

    * Principais Características:
      1. Reutilização de código.
      2. Modularização.
      3. Integração simples entre módulos.
      4. Reaproveitamento de módulos em outros sistemas (Se possível).

    * Elementos presentes na POO:
      ? 1. Classe
        -> Abstração de algum elemeto do mundo real.
        -> Ex: Pessoa, SmartPhone, Cachorro.
      ? 2. Objetos
        -> Uma reprentação "Concreta" da abstração feita através da classe.
        -> Ex: Walisson, Galaxy Z Fold4, Beethoven.
      ? 3. Atributos
        -> Características comuns apresentadas pelos objetos de uma determinada classe.
        -> Ex: nome, idade e altura(Pessoa); memória, processador, câmera(SmartPhone); Raça(Cachorro).
      ? 4. Métodos
        -> Ações comuns realizadas pelos objetos de uma determinada classe.
        -> Ex: Comer, dormir, levantar(Pessoa); Ligar, instalar app, tirar foto(SmartPhone); latir(Cachorro);
      ? 5. Encapsulamento 
        -> Cada classe deve conter todas as informações necessárias para seu funcionamento para seu funcionamento bem como todos os métodos necessários para alterar essas informações. Idealmente, apenas objetos da própria classe poderão alterar seus atributos, e objetos de outras classes irão interagir com eles através de métodos.
        * Private -> colocar _cpf
          -> No TypeScript, a palavra-chave private é usada para implementar o conceito de encapsulamento, um dos pilares da Programação Orientada a Objetos. Quando um membro (propriedade ou método) de uma classe é declarado como private, ele só pode ser acessado dentro da própria classe em que foi definido. Isso ajuda a restringir o acesso direto a partes internas de um objeto, promovendo boas práticas de design, como segregação de responsabilidades e proteção de dados.
        * ReadOnly
          -> No TypeScript, a palavra-chave readonly é usada para criar propriedades de classe que só podem ser lidas, mas não modificadas após sua inicialização. Isso é útil para implementar o conceito de imutabilidade parcial, garantindo que determinados valores não sejam alterados acidentalmente depois de definidos.
        * Accesson
          -> No TypeScript, um accessor é um recurso que permite criar getters e setters para controlar como as propriedades de uma classe são acessadas e modificadas. Ele faz parte do conceito de encapsulamento, permitindo adicionar lógica personalizada ao acesso ou modificação de propriedades, em vez de acessar diretamente os atributos internos.
            ? getter
              -> Em TypeScript, o getter é um tipo de accessor usado no encapsulamento para permitir o acesso a valores de propriedades privadas ou protegidas de uma classe. Ele age como uma interface pública para obter o valor de uma propriedade, enquanto a lógica interna do acesso pode ser personalizada conforme necessário. Os getters são declarados usando a palavra-chave get antes do nome do método, e eles são acessados como se fossem propriedades, sem a necessidade de parênteses.

              * Exemplo: 
                get cpf(): string {
                 return this._cpf;
                }
            ? setter
              -> Em TypeScript, o setter é um tipo de accessor usado no encapsulamento para controlar como os valores são atribuídos a propriedades privadas ou protegidas de uma classe. Ele permite implementar lógica personalizada, como validação ou transformação, antes de armazenar o valor de uma propriedade. Os setters são declarados usando a palavra-chave set antes do nome do método, e eles são chamados como se fossem atribuições simples, o que torna o código mais natural e legível.

              * Exemplo: 
                set cpf(newCpf: string) {
                 this._cpf = newCpf;
                }
      ? 6. Herança
          -> Se várias classes terão atributos e métodos em comum, não devemos ter que redigitá-los várias vezes. Ao invés disso, criamos uma classe com esses atributos comuns e as outras classes irão herdá-los
            * Exemplo:
              class Teacher extends Person implements IPerson {
              code: string;

              constructor(name: string, age: number, height: number, weight: number, code: string) {
                super(name, age, height, weight); -> Serve para herda o atributo.
                this.code = code;    
              }
            }

            * Polimorfismo
              -> Objetos de diferentes classes herdadeiras de uma mesma classe mãe podem ser tratados genericamente como objetos pertecentes á classe mãe.   
              ? Exemplo:
                console.log(person1 instanceof Person);

        * Método construtor:
          -> O método construtor é um recurso fundamental na Programação Orientada a Objetos (POO), utilizado para inicializar os objetos de uma classe. Ele é executado automaticamente no momento em que um objeto é criado, configurando seus atributos iniciais ou executando operações essenciais para a configuração inicial do objeto.

      * Explicação do This:
          -> O this em JavaScript é uma palavra reservada que representa o próprio objeto em que o método está sendo chamado. É útil para acessar os atributos e métodos da própria instância do objeto.
      * Interfaces de classe
          -> No TypeScript, uma interface de classe é uma estrutura que define um contrato que as classes devem cumprir. Ela descreve a forma que um objeto ou classe deve ter, especificando métodos e propriedades que devem ser implementados pelas classes que utilizam a interface. Embora a interface não contenha a implementação dos métodos, ela serve como uma "promessa" de que uma classe implementará esses métodos com as devidas assinaturas.

*/