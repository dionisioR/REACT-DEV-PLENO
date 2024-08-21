import React, { useState, useEffect } from "react";

import MostrarVoltas from "./componentes/MostraVoltas";
import MostrarTempo from "./componentes/MostraTempo";
import Button from "./componentes/Button";
import './App.css'


function App() {
  const [numVoltas, setNumVoltas] = useState(0);

  // flag para verificar se nosso contador (tempo) está rodando ou não
  const [running, setRunning] = useState(false);

  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000);
    }
 
    return () => {
      if(timer){
        clearInterval(timer)
      }
    }

  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    // numVoltas++
    setNumVoltas(numVoltas + 1);
  };

  const decrement = () => {
    // numVoltas--
    if(numVoltas > 0)
      setNumVoltas(numVoltas - 1);
  };

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div>
      <MostrarVoltas voltas={numVoltas} />

      <Button texto="+" className="bigger" onClick={increment} />
      <Button texto="-" className="bigger" onClick={decrement} />
      {
        numVoltas > 0 &&
        <MostrarTempo tempo={(tempo / numVoltas).toFixed(0)} />
      }
      <br/>
      <Button texto={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} />
      <Button texto="Reiniciar" onClick={reset} />
    </div>
  );
}

export default App;
