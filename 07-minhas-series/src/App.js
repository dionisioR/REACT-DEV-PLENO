import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Generos from "./components/Generos";
import NovoGenero from "./components/NovoGenero";
import EditarGenero from "./components/EditarGenero";
import Series from "./components/Series";
import NovaSerie from "./components/NovaSerie";
import InfoSerie from "./components/InfoSerie";

const Home = () => {
  return <h1>HOME</h1>;
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generos" component={Generos} />
          <Route exact path="/generos/novogenero" component={NovoGenero} />
          <Route exact path="/generos/:id" component={EditarGenero} />
          
          <Route exact path="/series" component={Series} />
          <Route exact path="/series/novaserie" component={NovaSerie} />
          <Route exact path="/series/:id" component={InfoSerie} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
