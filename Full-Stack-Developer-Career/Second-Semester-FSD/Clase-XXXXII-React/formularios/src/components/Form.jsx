/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
  const [datos, setDatos] = useState({
    name: "",
    lastName: "",
  });

  const handleChangeInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("enviando datos" +" "+ datos.name);
  };

  return (
    <div>
      <form action="" onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChangeInput}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChangeInput}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
