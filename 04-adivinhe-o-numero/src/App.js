import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Estados do jogo = Entrada / Rodando / Fim
  const [estado, setEstado] = useState("ENTRADA");
  // Palpite
  const [palpite, setPalpite] = useState(150);
  // número de palpites
  const [numeroPalpite, setNumeroPalpite] = useState(1)
  // valor máximo e mínimo
  const [max, setMax] = useState(300)
  const [min, setMin] = useState(0)

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0)
    setMax(300)
    setPalpite(150)
    setNumeroPalpite(1)
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={iniciarJogo}>Começar a Jogar!</button>
        </header>
      </div>
    );
  }

  function menor (){
    setNumeroPalpite(numeroPalpite + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min)/2) + min
    setPalpite(proxPalpite)
  }

  function maior(){
    setNumeroPalpite(numeroPalpite + 1)
    setMin(palpite)
    const proximoPalpite = parseInt((max - palpite)/2) + palpite
    setPalpite(proximoPalpite)
  }

  function acertou(){
    setEstado("FIM")
  }

  if (estado === "FIM") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>Acertei o número {palpite} com {numeroPalpite} chutes!</p>
          <button onClick={iniciarJogo}>Começar a Jogar!</button>
        </header>
      </div>
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <p>O seu número é {palpite}</p>
          <p>Quantidade de chutes: {numeroPalpite}</p>

          <button onClick={menor}>Menor!</button>
          <button onClick={acertou}>Acertou!</button>
          <button onClick={maior}>Maior!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
