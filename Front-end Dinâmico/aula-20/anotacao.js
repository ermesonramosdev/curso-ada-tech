/*
  ! Browser API
    -> São recursos de programação contidos no browser, que nos permitem desenvolver funcionalidades complexas, dentro das páginas web, com mais facilidade.
    -> Para adicionar alguns recursos em aplicações web, como o envio de notificações, por exemplo, teríamos que conhecer profundamente sobre o funcionamento navegador.
    -> A Web Notification API nos permite implementar esse recurso utilizando poucas linhas de códigos.

    * Exemplos de APIs do navegador: 
        -> Web API Notifications: Gerenciar notificações.
        -> Web Audio API: Manipular áudios no navegador.
        -> Web Storage API: Armazenamento de dados no navegador.
      -> É importante destacar qe as APIs dos navegadores são baseadas na liguagem JavaScript, já que esta é a linguagem executada nos browsers.

    * A DOM API
      -> DOM (do inglês, Document Object Model) é uma sigla para Modelo de Objeto de Documento.
      -> Trata-se de uma API que favorece a representação de documentos HTML ou XML em nós e objetos, permitindo que toda estrutura de uma página HTML, por exemplo, possa ser acessado por meio de um objeto do JavaScript e, dessa forma, o conteúdo ou estilos possam ser alterados por meio de um script.
      -> Essa representação é estruturada como uma árvore e, poor isso, é comum você escutar o termo "a árvore de elementos DOM".
      -> Para toda página web contida em navegador, existe um objeto document que a representa.
      -> É a partir desse objeto que poderemos acessar todos os elementos da página, assim como poderemos alterar o conteúdo / estilos dela.
      -> Dentro de qualquer script JS que esteja rodando no navegador, é possivel acessar o objeto document

      ? Existem muitos atributos dentroo do objetoo document. Vamos conhecer alguns deles:
        -> document.title
        -> document.URL
        -> document.images 
        -> document.forms
        -> document.head
        -> document.body

    * Explorando o DOM
      ? Seletores: Obtendo elementos do DOM
        1. document.getElementByTagName(nomeDaTag);
        2. document.getElementByClassName(nomeDaClasse);
        3. document.getElementById(idDoElemento);
        4. document.getElementByName(PeloNameDaTag);
        5. document.querySelector(seletor);
        6. document.querySelectorAll(seletor);

      ? Alterando o conteúdo dos elementos HTML
        1. element.textContent 
          -> Serve para pegar o conteúdo em texto.
          -> Serve para alterar o conteúdo em texto.
        2. element.innerText
          > Serve para pegar o conteúdo e o HTML.
          > Serve para alterar o conteúdo e o HTML.
        3. element.value
          -> Serve apenas para campos de input.

      ? Adicionar elementos na página Web.
        1. document.createElement(nomeDaTag);
          -> Serve para criar um novo elemento
        2. element.appendChild(elementoFilho);
          -> Serve para adicionar elementos filhos dentro da árvore HTML (no final) mais apena uma vez.
        3. elementoPai.insertBefore('elemento novo criado', 'Aonde você quer adicionar');
          -> Serve para você adicionar na posição na qual você quer

      ? Removendo elementos
        1. element.removeChild(elementoQueDeveSerRemovodo);
          -> Serve para remover elementos.






*/