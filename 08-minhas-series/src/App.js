import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Generos from "./components/Generos";
import NovoGenero from "./components/NovoGenero";
import EditarGenero from "./components/EditarGenero";

const Home = () => {
  return <h1>HOME</h1>;
};

function App() {
  // const [data, setData] = useState([])
  // useEffect(
  //   ()=>{
  //     axios.get('/api').then(res =>{
  //       setData(res.data)
  //     })
  //   },[]
  // )
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generos" component={Generos} />
          <Route exact path="/generos/novogenero" component={NovoGenero} />
          <Route exact path="/generos/:id" component={EditarGenero} />
        </Switch>
        {/* <pre>{JSON.stringify(data)}</pre>
        {console.log(JSON.stringify(data))} */}


      </div>
    </Router>
  );
}

export default App;
