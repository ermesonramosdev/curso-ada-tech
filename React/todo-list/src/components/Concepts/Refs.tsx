import { FormEvent, useRef } from "react"

export const Refs: React.FC = () => {

    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    function handleOnSubmit(event: FormEvent) {
        event.preventDefault();

        console.log(inputNameRef.current?.value);
        console.log(inputEmailRef.current?.value);
        console.log(inputPasswordRef.current?.value);

    };

    return(
        <form style={{ padding: '2rem' }} onSubmit={(event) => handleOnSubmit(event)}>
            <h1>useRef</h1>
            <br />
            <input type="text" name="" id="" placeholder="Nome Completo" style={{ padding: '5px' }} ref={inputNameRef}/>
            <input type="email" name="" id="" placeholder="E-mail" style={{ padding: '5px' }} ref={inputEmailRef}/>
            <input type="password" name="" id="" placeholder="Senha" style={{ padding: '5px' }} ref={inputPasswordRef}/>
            <br />
            <button type="submit" style={{ padding: '5px', backgroundColor: '#16a34a', color: 'white', fontWeight: 'bold' }}>Enviar</button>
        </form>
    );
}