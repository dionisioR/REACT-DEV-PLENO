import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

const elementoTitulo = <h1>Contador</h1>;

// componente
function Contador(props) {
  return <>{props.contador}</>;
}

function App() {
  // estado do componente
  // pense no estado como se fosse uma foto
  const [contador, setContador] = useState(0);
  const increment = () => {
    setContador(contador + 1);
  };
  const decrement = () => {
    setContador(contador - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {elementoTitulo}
        {contador} {/* Modificando o estado da constante */}
        <br />
        <br />
        <div>
          <button onClick={increment}> + Incrementar</button>
          <button onClick={decrement}> - Decrementar</button>
          <br />
          <br />
          {/* componente */}
          <Contador contador={contador} />
        </div>
      </header>
    </div>
  );
}

export default App;
