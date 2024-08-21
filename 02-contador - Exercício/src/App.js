import React, {useState} from "react"
import "./App.css";

const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

function App() {

  // declarando variável
  // let contador = 0

  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }
  function decrementar() {
    setContador(contador -1)
  }

  return (
    <>
      <Titulo>Exercício - Contador</Titulo>
      <div className="center">
        <p>{contador}</p>
        <button onClick={incrementar}>+ Incremento</button>
        <button onClick={decrementar}>- Decremento</button>
      </div>
    </>
  );
}

export default App;
