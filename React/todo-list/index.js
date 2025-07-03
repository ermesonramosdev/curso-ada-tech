/*
    ! Componentes Funcionais e Nova forma de estilo
        * O que são componentes funcionais: 
        -> Componentes funcionais são funções que retorna HTML.

        * React + TypeScript
         ? : React.FC
            -> Determina que o componente se torna funcional.

        * CSS Modules 
        ->  Vai criar uma estilização unica para meu componente para não ter conflitos entre as classes repetidas de outro componente.

    ! React Funcional II - Hooks de estado 
        * O que são os Hooks:
        -> Ele vai permite acessar os estados e ciclo de vida do componente.

        * Regras do Hooks:
        -> Chame apenas os Hooks no nível mais alto do componente(Chama logo no escopo inicial). Não chame Hooks dentro de loops condições ou funções aninhadas.

        -> Apenas chama Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns.

        * Como indentificar um Hooks:
        -> Sempre vai começar com um use[...].

        * Hooks de Estado:
        -> Estado: O mesmo conceito que vimos nos componentes em classe.
            ? Ex: const [contador, função] = useState('estado em que começa o contador')

        * {} -> Eu saiu da aplicação React e entro no JavaScript.
        * () -> Eu saiu do JavaScrit e entro na minha aplicação React.
        * 
    
    ! React Funcional III - Hooks de efeito
        * useEffect:
            -> O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais, como:
                1. Buscar dados de uma API
                2. Manipular o DOM
                3. Usar timers (setTimeout, setInterval)
                4. Sincronizar estados com localStorage ou outras variáveis externas.

            Sintaxe básica:

            import { useEffect } from 'react';
            useEffect(() => {
            // Código a ser executado
            }, [dependências]);

            * Como funciona:
                -> O primeiro argumento é uma função que será executada.
                -> O segundo argumento é um array de dependências. Ele determina quando o efeito será executado.

            Exemplos práticos:
            🟢 1. Executar apenas uma vez (quando o componente montar):
            useEffect(() => {
            console.log('Componente montado!');
            }, []); // array vazio => executa apenas na montagem

            🟡 2. Executar sempre que uma variável mudar:
            useEffect(() => {
            console.log(`O valor de count mudou: ${count}`);
            }, [count]); // executa sempre que "count" mudar

            🔴 3. Limpar efeitos (como event listeners ou intervals):
            useEffect(() => {
            const timer = setInterval(() => {
                console.log('Rodando...');
            }, 1000);

            return () => {
                clearInterval(timer); // limpa o intervalo quando o componente for desmontado
                console.log('Intervalo limpo!');
            };
            }, []);
            
            Resumo:
            Objetivo	Código
            Executar 1 vez (montagem)	useEffect(() => {}, [])
            Executar quando algo mudar	useEffect(() => {}, [x])
            Executar sempre que renderizar	useEffect(() => {})
            Limpar um efeito	return () => { ... } dentro




*/