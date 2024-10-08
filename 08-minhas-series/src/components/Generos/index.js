import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Generos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/genres").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteGenero = (id) =>{
    axios.delete('/api/genres/' + id)
         .then(res => {
          const filtrado = data.filter(item => item.id !== id)
          setData(filtrado)
         })
  }
  const renderizaLinha = (record) => {
    return (
      <tr key={record.id}>
        <td>{record.id}</td>
        <td>{record.name}</td>
        <td>
          <button className="btn btn-danger me-5" onClick={() => deleteGenero(record.id)}>Remover</button>
          <Link className="btn btn-warning" to={"/generos/" + record.id}>Editar</Link>
        </td>
      </tr>
    );
  };

  if(data.length === 0){
    return(
      <div className="container">
        <h1>Gêneros</h1>
        <div className="alert alert-warning" role="alert">
          Você não possui gêneros criados
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>GÊNEROS</h1>
      <Link to='/generos/novogenero' className="btn btn-primary">Novo Gênero</Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOME</th>
            <th scope="col">AÇÔES</th>
          </tr>
        </thead>
        <tbody>{data.map(renderizaLinha)}</tbody>
      </table>
    </div>
  );
};
export default Generos;
