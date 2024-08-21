import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Series = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/series").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteSerie = (id) =>{
    axios.delete('/api/series/' + id)
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
          <button className="btn btn-danger me-5" onClick={() => deleteSerie(record.id)}>Remover</button>
          <Link className="btn btn-warning" to={"/series/" + record.id}>Info</Link>
        </td>
      </tr>
    );
  };

  if(data.length === 0){
    return(
      <div className="container">
        <h1>Séries</h1>
        <Link to='/series/novaserie' className="btn btn-primary">Nova Série</Link>
        <div className="alert alert-warning" role="alert">
          Você não possui séries criadas
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>SÉRIES</h1>
      <Link to='/series/novaserie' className="btn btn-primary">Nova Série</Link>

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
export default Series;
