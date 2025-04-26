/*
  ! APIs
    -> Em português, Interface de programação de Aplicações. 
    -> Hoje em dia é muito comum que diferentes aplicações consumam dados pela internet, muitas vezes dados providenciados por terceiros.
    -> Por exemplo, um aplicativo de entrega de alimentos pode usar dados de geolocalização do Google para localizar restaurantes próximos ao usário e exibir a rota percorrida pelo entregador.
    -> Como essas aplicações podem estar rodando em diferentes plataformas e linguagens de programação, é importante estabelecer uma "Liguagem comum" para que todos consigam esses dados.
    -> A API é uma interface que nos permite utilizar funcionalidades / recursos de terceiros, seguindo um conjuto de definições / contratos estabelecidos pelo terceiro.
    * Exemplos:
      -> Login social
      -> Pagamento Online
    -> A API acaba facilitando a vida dos programadores, pois reduz o tempo de desenvolvimento de novas aplicações.
    * Tipos de APIs:
      1. Públicas ou abertas
      2. Privadas ou internas
      3. APIs de Parceiras

    * Protocolos de APIs:
      -> Os protocolos servem para padronizar a troca de dados entre a aplicação e a API.
      -> Existem diferentes protocolos de APIs, como RPC, SOAP, GraphQL e REST.
      -> O REST é o padrão mais comum.
      -> REST (Representational State Transfer) se baseia em seis restrições. Caso uma API respeite essas 6 restrições, ela é considerada uma API RESTful.

    * Protocolos de APIs:
      -> Ter uma arquitetura formada por clientes, servidores e recursos, com solicitações gerenciadas por HTTP.
      -> Estabelecer uma comunicação stateless entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e todas as solicitações são separadas e desconectadas.
      -> Armazenar dados em cache para otimizar as interações entre cliente e servidor. 
      -> Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado.
      -> Ter um sistema em camadas que organiza os tipos de servidores( responsáveis pela segurança, pelo carregamento de carga e assim por diante ) envolvidos na recuperação das informações solicitações em hierarquias que o cliente não pode ver.
      -> Possibilidade código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionaliade disponivel ao cliente.

    * Características de APIs REST 
    -> Os recursos são solicitados / enviados via protocolo HTTP.
    -> URI Base (Base URL): Várias APIs fornecem um "endereço base".Todas as suas requisições incluirão esse endereço, e ao final dele nós colocamos detalhes específicos para cada um dos recursos disponíveis.
    -> Formato do dado/recurso: Algumas APIs possuem formatos fixos de dados. Outras permitem que voçê escolha. È comum, por exemplo, que uma API permite que voçê escolha entre JSON, XML, CSV e/ou outros formatos.
    -> Schemas: È bastante comum que as APIs disponibilizem um "modelo" genérico de como será formatado o seu JSON para que os desenvolvedores saibam quais campos esperar e quais tipos de dados serão possiveis para cada campo. Por exemplo:
      {
        "nome": string,
        "pontuacao": interger
      }
    -> Autentificação: Outro aspecto importante é a autentificação. Enquanto alguma APIs são grátis / abertas, outras são pagas. Ainda temos algumas híbridas (é possivel acessar gratuitamente certos recursos, ou consumir um certo volume de dados, e acima disso você deverá pagar).

      a. Os dois modelos mais comuns de autentificação:
        i. Chave: Ao fazer seu registro, você recebera uma chave que deverá ser passada na requição. 
        ii. OAuth: Um esquema um pouco mais complexo onde são combinados códigos de autorização, identificação do cliente e segredo do cliente em um POST, e o servidor cria uma sessão por um tempo  limitado e fornece o ID da mesma. APIs de gigantes da internet (como google e Facebook) costumam usar esse modelo.

    -> Endpoint: A URL completa que deve ser acessado a fim de obter um recurso específico.
      a. Dictionary API:
        https://api.dictionaryapi.dev/api/v2/entries/en/hello.(GET)
      b. OpenWeather API:
        https://api.openweathermap.org/data/2.5/weather?last={lat}&lon={lon}&appid={ API key}.
    * Exemplos de APIs de terceiros
        1.PokéAPI -> Pokémon.
        2.OpenWeather -> Climatico.
        3.Git Hub -> Resporsitorios.
        4.APIs públicas -> APIs disponiveis para praticar .

    * Como testar APIs (Documentação).
        1. Navegador.
        2. Software (Postman e Insomnia).

    * Existem outros tipos de APIs
      utilizando o JS para interagir com páginas web.

        1. Document API -> DOM.
        2. Notifications API -> Notificações.
        3. Web Storage API -> Armazenar dados.
        4. Fetch API -> Requisições HTTP.
*/




