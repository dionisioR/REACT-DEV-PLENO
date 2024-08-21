import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Badge } from "reactstrap";

const InfoSerie = ({ match }) => {
  const [form, setForm] = useState({
    name:''
  });
  const [success, setSuccess] = useState(false);
  const [mode, setMode] = useState("INFO");
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState("");

  const [data, setData] = useState({});

  useEffect(() => {

      axios.get("/api/series/" + match.params.id).then((res) => {
        setData(res.data);
        setForm(res.data);
      });
    
  }, [match.params.id]);

  useEffect(() => {
    axios.get("/api/genres").then((res) => {
      setGenres(res.data.data);
      const genres = res.data.data;
      const encontrado = genres.find((value) => data.genre === value.name);
      if (encontrado) {
        setGenreId(encontrado.id);
      }
    });
  }, [data]);

  // custom header
  const masterHeader = {
    height: "50vh",
    minHeight: "500px",
    backgroundImage: `url('${data.background}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onChangeGenre = evt => {
    setGenreId(evt.target.value)
  }

  const onChange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  const seleciona = (value) => () => {
    setForm({
      ...form,
      status: value,
    });
  };

  const save = () => {
    axios
      .put("/api/series/" + match.params.id, {
        ...form,
        genre_id: genreId,
      })
      .then((res) => {
        setSuccess(true);
      });
  };
  if (success) {
    return <Redirect to="/series" />;
  }
  return (
    <div style={masterHeader}>
      <header>
        <div className="h-100 p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-3">
                <img
                  src={data.poster}
                  alt={data.name}
                  className="img-fluid img-thumbnail"
                />
              </div>
              <div className="col-8">
                <h1 className="text-white fw-light ">{data.name}</h1>
                <div className="lead text-white">
                  {data.status === "ASSISTIDO" && (
                    <Badge color="success">Assistido</Badge>
                  )}
                  &nbsp;&nbsp;
                  {data.status === "PARA_ASSISTIR" && (
                    <Badge color="warning">Para assistir</Badge>
                  )}
                  &nbsp; &nbsp;
                  <span>Gênero: {data.genre_name} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="my-3 container">
        <button
          className="btn btn-outline-primary"
          onClick={() => setMode("EDIT")}
        >
          Editar
        </button>
      </div>
      {mode === "EDIT" && (
        <div className="container">
          <h1>Nova Série: {form.name}</h1>
          <button
            className="btn btn-outline-primary"
            onClick={() => setMode("INFO")}
          >
            Cancelar Edição
          </button>

          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                onChange={onChange("name")}
                type="text"
                value={form.name}
                className="form-control"
                id="name"
                placeholder="Nome da série"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="name">Comentários </label>
              <input
                onChange={onChange("comments")}
                type="text"
                value={form.comments}
                className="form-control"
                id="name"
                placeholder="Escreva um comentario..."
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="name">Gênero </label>
              <select
                className="form-control"
                onChange={onChangeGenre}
                value={genreId}
              >
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="assistido"
                value="ASSISTIDO"
                onChange={seleciona("ASSISTIDO")}
                checked={form.status === "ASSISTIDO"}
              />
              <label className="form-check-label" htmlFor="assistido">
                Assistido
              </label>
            </div>
            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="paraAssistir"
                value="PARA_ASSISTIR"
                onChange={seleciona("PARA_ASSISTIR")}
                checked={form.status === "PARA_ASSISTIR"}
              />
              <label className="form-check-label" htmlFor="paraAssistir">
                Para assistir
              </label>
            </div>

            <div className="form-group mt-3">
              <button className="btn btn-primary" type="button" onClick={save}>
                Salvar
              </button>
            </div>
          </form>

          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default InfoSerie;
