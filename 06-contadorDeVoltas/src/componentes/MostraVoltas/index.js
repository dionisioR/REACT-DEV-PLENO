import React from "react";

const MostrarVoltas = (props) => {
  return (
    <p className="voltas">
    <span>{props.voltas}</span> <br /> voltas
    </p>
  );
};

export default MostrarVoltas