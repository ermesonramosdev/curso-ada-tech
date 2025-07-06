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
                -> Por padrão, sempre o useEffect será disparado após a montagem do componente.
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


    ! React Funcional IV - Hook de referência
        * useRef:
        -> O useRef é um hook do React que te permite:
            1. Referenciar elementos do DOM (como acessar diretamente um input, por exemplo).
            2. Armazenar valores mutáveis que não causam re-renderização quando são atualizados.


        📦 Sintaxe básica
        const minhaRef = useRef(valorInicial);

        ✅ Casos de uso
        1. 📍Referência ao DOM (como o document.querySelector do JS)
        Você pode usar o useRef para acessar elementos da tela sem causar re-render.

        Exemplo: Focar um input ao carregar a página
        import { useRef, useEffect } from 'react';

        function MeuComponente() {
        const inputRef = useRef(null);

        useEffect(() => {
            inputRef.current.focus(); // foca automaticamente o input
        }, []);

        return <input ref={inputRef} placeholder="Digite algo" />;
        }

        2. 🧠 Guardar valores entre renders sem perder o valor
        Ideal quando você não quer re-renderizar ao mudar o valor (diferente de useState).

        Exemplo: Contador de renders
        import { useRef, useEffect, useState } from 'react';

        function RenderCounter() {
        const renderCount = useRef(0);
        const [state, setState] = useState(0);

        useEffect(() => {
            renderCount.current += 1;
        });

        return (
            <div>
            <p>Renderizações: {renderCount.current}</p>
            <button onClick={() => setState(state + 1)}>Re-renderizar</button>
            </div>
        );
        }
        renderCount.current é atualizado sem causar novo render.

        🔁 Comparação rápida
        Hook	Re-renderiza?	Para que serve?
        useState	✅ Sim	Guardar estado da UI
        useRef	❌ Não	Guardar valores entre renders ou acessar DOM

        🔧 Dica final
        O valor de useRef fica dentro da propriedade .current. Exemplo:


        const contador = useRef(0);
        contador.current += 1;


    ! React Funcional IV - Hooks de memoização
        * useMemo:
        ->  é um hook do React usado para memorizar valores calculados — ou seja, ele guarda o resultado de uma função e só recalcula esse valor quando as dependências mudam. Isso evita recalcular coisas pesadas desnecessariamente, melhorando o desempenho da aplicação.

        📌 Sintaxe
        const valorMemorizado = useMemo(() => {
        // função que retorna um valor
        return resultado;
        }, [dependências]);

        🔧 Quando usar?
            Use useMemo quando:
                1. Você tem cálculos pesados (ex: filtragens, ordenações, loops grandes).
                2. O valor é reutilizado no render.
                3. As dependências desse cálculo mudam com pouca frequência.

        ✅ Exemplo simples
            import React, { useMemo, useState } from 'react';

            function Exemplo() {
            const [numero, setNumero] = useState(0);
            const [contador, setContador] = useState(0);

            const numeroDobrado = useMemo(() => {
                console.log("Calculando...");
                return numero * 2;
            }, [numero]);

            return (
                <div>
                <p>Número: {numero}</p>
                <p>Número Dobrado: {numeroDobrado}</p>
                <button onClick={() => setNumero(numero + 1)}>Aumentar Número</button>
                <button onClick={() => setContador(contador + 1)}>Aumentar Contador</button>
                </div>
            );
            }

            Explicação:
                1. O valor numeroDobrado só será recalculado quando numero mudar.
                2. Se apenas contador mudar, o cálculo não será refeito.

            ⚠️ Cuidado:
                1. Não use useMemo para tudo. Ele só vale a pena se o 2. 2. cálculo for realmente custoso.
                Evite otimizar prematuramente. Use quando tiver problemas de performance reais ou re-renders desnecessários.

        * useCallback
            -> O useCallback é um hook do React usado para memorizar uma função, ou seja, evitar que ela seja recriada em toda renderização, a menos que suas dependências mudem.

            📌 Sintaxe
            const memoizedCallback = useCallback(() => {
            // função
            }, [dependências]);

            ✅ Quando usar useCallback
            Use quando:
                1. Você passa uma função para um componente filho que é otimizado com React.memo.
                3. Você quer evitar que a função seja recriada em cada render.
                3. A função depende de valores que podem mudar, e você quer controlar isso com um array de dependências.

            🧠 Exemplo prático
            import React, { useState, useCallback } from 'react';

            const Button = React.memo(({ onClick, children }) => {
            console.log('Renderizou:', children);
            return <button onClick={onClick}>{children}</button>;
            });

            function App() {
            const [count, setCount] = useState(0);
            const [dark, setDark] = useState(false);

            // Esta função só será recriada se `count` mudar
            const increment = useCallback(() => {
                setCount((c) => c + 1);
            }, []);

            const themeStyles = {
                backgroundColor: dark ? '#333' : '#FFF',
                color: dark ? '#FFF' : '#000',
            };

            return (
                <div style={themeStyles}>
                <h1>{count}</h1>
                <Button onClick={increment}>Incrementar</Button>
                <button onClick={() => setDark((prev) => !prev)}>Toggle Tema</button>
                </div>
            );
            }

            🔍 Sem useCallback, a função increment seria recriada sempre que o componente App fosse re-renderizado, o que faria o botão filho Button (mesmo com React.memo) renderizar novamente. Com useCallback, ela é mantida na memória e o Button só renderiza se realmente precisar.

            ⚠️ Quando não usar useCallback
            1. Se a função não é passada para componentes filhos, não é usada em useEffect ou não tem impacto de performance, não precisa usar.
            2. Usar useCallback à toa pode até prejudicar a performance, porque manter referências em memória também custa.









*/