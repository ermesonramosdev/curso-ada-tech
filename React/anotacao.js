/*
  ! Introdução ao ReactJS

    -> O ReactJS é uma biblioteca de JavaScript eficiencia e flexível, sendo útil no desenvolvimento de interfaces de usuário.

    * O ReactJS pode ser utilizado para diferentes finalidades:

      1. Aplicação Web
      2. Aplicação Mobile
      3. Aplicação Desktop 
      4. Aplicativos para TV
      5. Aplicativos de Realidade Aumentada.

      -> Ele nos permite criar interfaces complexas a partir de pedaços de código pequenos e isolados, o que chamamos de componentes.

    * Bibliotecas derivadas do ReactJS

      1. React DOM - Aplicação Web
      2. React Native - Aplicativo Mobile
      3. Eletron - Aplicação Desktop
      4. React TV - Aplicação para TV
      5. React VR - Aplicativo de Realidade Aumentada.

    * Como o ReactJS funciona ? 

      1. Compilers (Babel)
        -> E um compilador ele vai fazer uma conversão de código.

      2. Bundlers (WebPack)
        -> E pegue varios códigos JavaScript e transforme em apenas um.

      3. Vite (WebPack)
        -> O Vite é uma ferramenta de construção e desenvolvimento frontend extremamente rápida e eficiente, criada para substituir o Webpack e outras bundlers tradicionais. Ele é especialmente popular em projetos Vue.js e React, mas suporta diversas outras tecnologias modernas.

    * Exemplo de importação

      1. import { greeting, PI } from './exemplo';  
        -> Forma nova de importação suportada pelo browser, essa forma é chamada de ESModules

      2. const { greeting, PI } = require('./exemplo1');

      -> Forma antiga de importação não suportada pelo browser, essa forma é chamada de Common JS.

    * Para que serve o StrictMode?
      -> Ferramenta para checar más práticas React. Caso encontre potenciais problemas, emite warnings(Apenas no ambiente de desenvolvimento).

      ? Exemplos de checagens de erro:
        1. Utilização do Content API legado
        2. Detectação de utilização de métodos do ciclo de vida que forem depreciados.
        3. Efeitos colaterais não esperados em componentes.

    
    ! Componetização
      -> Ela consiste em dividir um sistema em componentes independentes e reutilizáveis, facilitando a manutenção, escalabilidade e reutilização do código.
      
      * Padrões de Renderização (Rendering Patterns).

        ? SPA - single page application        
          -> Single Page Application (SPA) é um tipo de aplicação web que carrega uma única página HTML e atualiza seu conteúdo dinamicamente, sem precisar recarregar a página inteira quando o usuário navega. 

        ? SSR - Server Side Rendering(Next JS)
          -> Server-Side Rendering (SSR) é uma técnica onde as páginas de um site são geradas no servidor antes de serem enviadas ao navegador. Isso significa que, ao acessar uma página, o servidor monta todo o HTML com o conteúdo dinâmico e entrega pronto para o usuário, ao invés de depender do JavaScript para construir tudo no lado do cliente (como acontece em SPAs puras).

        ? SSG - Static Site Generation(Next JS)
          -> Static Site Generation (SSG) é uma técnica onde as páginas de um site são pré-geradas no momento da build e servidas como arquivos HTML estáticos. Isso significa que, quando um usuário acessa o site, ele recebe uma página pronta, sem necessidade de processamento no servidor.

      * Dois tipos de componentes
        ? Class Componentes
          -> Componentes baseados em classes
          * Exemplos:
            import React from "react"
            
            // Componente em classe é uma classe que herda a classe Componentes do React, e retorna HTML dentro método render.
            class App extends React.Component {
              // Método responsável por renderizar o contéudo HTML do nosso componente
               render() {
                return (
                  <>
                    <div>
                      <h1>Aprendendo React</h1>
                      <p>Isso aqui é um parágrafo</p>
                    </div>
                  </>
                )
              }
            }
            
            export default App;
            
            

        ? Function Componentes 
          -> Componentes baseadas em funções

    ! React Legado II - Props e Estados
    
      * Outras formas de criar um componente
        Exemplo:
          import React from "react";
          import logoImg from '../../assets/image/react.svg';
          import './style.css';
          
          export class Navbar extends React.Component {
            render() {
              return (
                <header>
                  <nav id="navbar">
                    <div className="nav-brand">
                      <img src={logoImg} alt="" />
                      <h1>Space Flight News</h1>
                    </div>
                    <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About us</a></li>          
                  </ul>
                  </nav>        
                </header>
              )
            }
          }

      * A importação em outro arquivo.
        import { Navbar } from "./components/Navbar/Navbar";    
          -> As chaves nos obriga nomear as exportação com o mesmo nome.  


      * Props
        -> Props (abreviação de "properties") são argumentos que passamos para componentes no React. Elas permitem que um componente receba valores dinâmicos e sejam reutilizáveis.

        * this.props = {
          -> Dentro do this.props é criado um objeto

          title: 'Exemplo
        }

      * Estados
        -> Estados são dados que são mantidos pelo componente e podem ser alterados em resposta a eventos ou interações do usuário os estados sempre são passados em formato de objetos.
        * Exemplo:
          import React from "react";
          
          export class Counter extends React.Component {
            constructor() {
              super()
              this.state = { counter: 0 }
            }
            render() {
              return (
                <div style={{ marginTop: '20px', marginLeft: '20px'}}>
                  <h1> {this.state.counter} </h1>
                  <div>
                    <button onClick={() => {
                      this.setState( { counter: this.state.counter - 1 })
                      }}
                      >
                        Diminuir
                      </button>
                    <button onClick={
                      () => {
                       this.setState({ counter: this.state.counter + 1})
                      }}
                      >
                        Aumentar
                      </button>
                  </div>
                </div>
              )
            }
          }

      * Aplicando estilo inline no react
        <div style={{marginTop: '20px', marginLeft: '20px'}}>

    ! React Legado III - Ciclo de Vida.
      * Ciclo de Vida no React
        -> Fluxo de renderização dos componentes do React. Em outras palavras, trata-se de todas as etapas pelas quais componentes passa desde o seu surgimento (montagem) até o seu desaparecimento (desmontagem) na aplicação.

        -> Conhecimento essencialmente para quem trabalho no React, ter esse conhecimento irá te ajudar a otimizar mais suas aplicações.

      * Fases do ciclo de vida de um componente React
        -> O ciclo de vida de um componente apresenta três fases:

          1. Montagem - consiste no momento em que é criado em tela(montado no DOM);
          * Nesse momento o componente:
            1. Recebe props.
            2. Realiza chamada HTTP.
            3. Inicializa seu estado.

          2. Atualização - Sempre que alguns mudanças ocorra no componente, seja por alguma alteração de uma prop ou pela alteração de algum estado, passaremos por esta etapas do ciclo de vida.

          3. Desmontagem - Consiste no momento em que o componente é removido da tela por não ser mais necessário. Isso ocorre quando mudamos de página ou quando alguma interação do usuário na remoção de um determinado componente da tela dar espaço a outro componente, por exemplo. 

          ? Todas as fases/etapas do ciclo de vida irão dispor de alguns métodos que nos permitem acessá-las.

      * Métodos do Ciclo de Vida
        ? 1. Montagem 
            1.1 contructor
            1.2 componetWillMount
            1.3 render 
            1.4 componetDidMount
            
        ? 2. Atualização
            2.1 shouldComponetUpdate: Um método que será chamado sempre que houver uma mudança de props ou estados. Caso o seu retorno seja 'true', ocorrerá uma atualização do componente. Caso o retorno seja 'false' nada irá acontecer.

            2.2 componetWillUpdate: O processo de atualização do componente foi iniciado.
            
            2.3 render: Renderização do componente.

            2.4 componetDidUpdate: O componente foi atualizado e já está na tela.

        ? 3. Desmontagem
            3.1 componetWillUnnount: Método chamado pouco antes do momento em que o componente foi desmontado(removido) da tela. Pode ser muito útil para, po exemplo: 
              1. Remover a inscrição de um evento que esteja associado a um componente.
              2. Cancelar uma requisição HTTP
              3. Invalidar algum timer.


        


*/
