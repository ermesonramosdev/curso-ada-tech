import React from "react";
import { Counter } from "./components/Counter/Counter";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { showCounter: false };
  }
  render() {
    return (
      <div>
        <h1>Ciclo de Vida React</h1>
        <button
          onClick={() => {
            this.setState( { showCounter: !this.state.showCounter } );
          }}
        >
          {this.state.showCounter ? "Remove Components" : "Show Components"}
        </button>
        {this.state.showCounter ? <Counter /> : null}
      </div>
      
    )
  };
}



