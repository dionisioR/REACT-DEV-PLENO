import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt =>{
        // console.log(evt.target.value);
        setName(evt.target.value)
    }
    const save = () =>{
        axios
            .post('/api/genres',{
                name
            })
            .then(res => {
               setSuccess(true)
            })
    }
    if(success){
        return <Redirect to='/generos' />
    }
    return (
    <div className="container">
      <h1>Novo Gênero {name}</h1>
      <form>
        <div className="form-group">
          <label for="name">Nome</label>
          <input
            onChange={onChange}
            type="text"
            value={name}
            className="form-control"
            id="name"
            placeholder="Nome do gênero"
          />
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-primary" type="button" onClick={save}>
            Salvar
          </button>
        </div>
      </form>

      <br/>
      <br/>
      <br/>
    </div>

    
  );
};

export default NovoGenero;
