// eslint-disable-next-line react/prop-types
function Mensajero({sender, message}) {
  
  return (
    <>
      <h1>Soy el mensajero</h1>
      <p>Remitente:{sender}</p>
      <p className="tomato">Este es su mensaje: {message}</p>
    </>
  );
}

export default Mensajero;
