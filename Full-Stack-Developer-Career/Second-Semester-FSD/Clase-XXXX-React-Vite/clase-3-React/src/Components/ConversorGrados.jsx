/* eslint-disable no-unused-vars */
import { useState } from "react";

const ConversorGrados = () => {
  const [resultado, setResultado] = useState(0);

  const convertirGrados = (e) => {
    let gradosCentigrados = e.target.value;

    let gradosFarenheit = (gradosCentigrados * 9) / 5 + 32;

    setResultado(gradosFarenheit);
    if (gradosCentigrados == "") {
      setResultado(0);
    }
  };

  return (
    <div>
      <h4>Ingresa Grados Cnetigrados</h4>
      <input type="text" onChange={convertirGrados} />
      <h1>Son {resultado} grados Farenheit</h1>
    </div>
  );
};

export default ConversorGrados;
