/*
  ! Escuta de Eventos e Estilos
    ? element.addEventListener('O evento passado', e a função);
      -> O método addEventListener em JavaScript é utilizado para adicionar um "ouvinte" (listener) de eventos a um elemento da página web, permitindo que você execute uma função específica quando um evento ocorrer nesse elemento.

      ? Eventos
        * Eventos de Mouse
          1. click
            -> Ocorre quando um usuário clica em um elemento.
          2. dblclick
            -> Ocorre quando um usuário dá um clique duplo em um elemento.
          3. mousedown
            ->  Ocorre quando o botão do mouse é pressionado sobre um elemento
          4. mouseup
            ->  Ocorre quando o botão do mouse é solto sobre um elemento.
          5. mousemove
            -> Ocorre quando o mouse se move sobre um elemento.
          6. mouseover
            ->  Ocorre quando o ponteiro do mouse entra na área de um elemento.
          7. mouseout
            -> Ocorre quando o ponteiro do mouse sai da área de um elemento.
          8. mouseenter
            -> Ocorre quando o ponteiro do mouse entra em um elemento, mas não nos elementos filhos.
          9. mouseleave
            -> Ocorre quando o ponteiro do mouse sai de um elemento, mas não dos elementos filhos.

        * Eventos de Teclado
          1. keydown
            -> Ocorre quando um tecla é pressionada.
          2. keyup
            -> Ocorre quando uma tecla é solta.
          3. keypress
            -> Ocorre quando uma tecla é pressionada e liberada (geralmente utilizada para capturar caracteres alfanuméricos).

        * Eventos de Formulários
            1. submit
              -> Ocorre quando um formulário é enviado.
            2. change
              -> Ocorre quando o valor de um campo de entrada é alterado.
            3. input
              -> Ocorre quando o valor de um campo de entrada é alterado (geralmente usado em campos de texto).
            4. focus
              -> Ocorre quando um elemento (como um campo de input) recebe foco.
            5. blur
              -> Ocorre quando um elemento perde o foco.
            6. reset
              ->  Ocorre quando um formulário é resetado.

        * Eventos de Janela
            1. load
              -> Ocorre quando a página ou um recurso (como uma imagem) é completamente carregado.
            2. resize 
              -> Ocorre quando a janela do navegador é redimensionada.
            3. scroll
              ->  Ocorre quando o usuário rola a página ou um elemento.
            4. beforeunload
              ->  Ocorre antes de uma página ser descarregada.
            5. unload
              -> Ocorre quando uma página está sendo descarregada.

        * Eventos de Foco e Perda de Foco
            1. focus
              ->  Ocorre quando um elemento (como um campo de input) recebe foco.
            2. blur
              -> Ocorre quando um elemento perde o foco.

        * Eventos de Toques(Touch Events)
            1. touchstart
              -> Ocorre quando o usuário toca na tela.
            2. touchend
              -> Ocorre quando o toque na tela é liberado.
            3. touchmove
              -> Ocorre quando o toque na tela se move.
            4. touchcancel
              -> Ocorre quando um toque é interrompido (por exemplo, por um evento de scroll).

        * Eventos de Animação
            1. animationstart
              -> Ocorre quando uma animação começa.
            2. animationend
              -> Ocorre quando uma animação é completada.
            3. animationiteration
              -> Ocorre quando uma animação CSS é repetida.

        * Eventos de Transição
            1. transitionend
              ->  Ocorre quando uma transição CSS termina (por exemplo, um efeito de transição de estilo em um elemento).

              
        * Eventos de Drag and Drop
            1. dragstart
              -> Ocorre quando o usuário começa a arrastar um elemento.
            2. drag
              -> Ocorre enquanto o usuário arrasta um elemento.
            3. dragenter
              -> Ocorre quando o elemento arrastado entra na área de destino.
            4. dragover
              -> Ocorre enquanto o elemento arrastado está sobre a área de destino.
            5. dragleave
              -> Ocorre quando o elemento arrastado sai da área de destino.
            6. drop
              -> Ocorre quando o elemento arrastado é solto na área de destino.
            7. dragend
              -> Ocorre quando o usuário termina de arrastar o elemento. 


        * Eventos de Performance
            1. requestIdleCallback
              -> Um evento que permite que você agende a execução de um código quando o navegador estiver ocioso (não ocupado com outros processos). 
           
      ? Alterando os estilos CSS
        * Estilo inline
          -> counter.style.color = 'red';

        * Manipulando Classes  
          -> element.classList.add / remove('nomeDaClasse');

      ? Web Storage API
        -> Armazenamento de Dados do cliente.

        * O Client-side Storage pode ser utilizado para diferentes finalidades, tais como:

          -> Personalizar as preferências do site (Tema claro ou Escuro que usuário já escolheu em uma visita anterior site, por exemplo).

          -> Atividade anterior persistte do site (por exemplo, armazenar o contéudo de um carrinho de compras de uma sessão anterior, lembrando se um usuário estava conectado anteriormente).

          -> Salvar dados localmente para que o download de um site seja mais rápido.

          -> Salvar, Localmente, Documentos gerados durante o uso de alguma aplicação para uso offine.

        * Os tipos de Client-side Store que existem nos navegadores são: Cookies, Local Storage e Session.
        

        * LocalStorage e SessionStorage
          -> Eles funciona em um modelo key-value

          -> O LocalStorage: ele guarda os dados de cada aplicação de forma isolada, baseado-se URL base da página. Todos esses dados, continuam armazenados mesmo se o navegador for fechado e aberto navamente.

          -> O SessionsStorage: o armazenamento funciona da mesma forma nele, mas os dados ficam disponíveis apenas durante a sessão da página. Em outras palavras, enquanto a aba navegador estiver aberta, o que inclui o carregamento e restauração de páginas, os dados serão guardados.


        * Métodos

          1. setItem(key, value)
            -> Esse método é usado para armazenar um valor associado a uma chave específica. 
          2. getItem(key)
            -> Esse método é usado para recuperar um valor armazenado usando a chave correspondente.
            -> O retorno dessa função sempre é passado como string
          3. removeItem(key)
            -> Esse método remove um item específico do armazenamento, usando a chave.
          4. clear
            -> Esse método remove todos os itens armazenados.


    

      

*/