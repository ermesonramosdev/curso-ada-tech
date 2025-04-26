import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    console.log("Construindo a classe Counter!");
    this.state = { counter: 0 };
  }

  UNSAFE_componentWillMount() { 
    console.log("O Nosso componente contador será montado ");
  }

  componentDidMount() {
    console.log("O Nosso componente contador foi montado");
    document.addEventListener('scroll', () => {
      
    });
  }

  shouldComponentUpdate() {
    if(this.state.counter === 2) return false;
    return true;
    
  }

  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado!");
  }

  componentDidUpdate() {
    console.log("Componente foi atualizado!");
  }

  componentWillUnmount() {
    console.log("O componente sera desmontado!");
  }

  render() {
    console.log("Rederizando o nosso componente Counter!");
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Diminuir
        </button>
      </>
    );
  }
}
