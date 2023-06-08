import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  return (
    <>
      <h1>Venta Farmaceuticos</h1>
      <TimeCount />
    </>
  );
}

const TimeCount = () => {
  const [secondsCount, setSecondsCount] = useState(0);
  const minutesCount = useRef(0);

  //me parece qu esta re mal usar useref aca, probar de nuevo los ejercicios solo usando state

  const CountInitiateHandler = () => {
    setSecondsCount(parseFloat(minutesCount.current.value));
    //setSecondsCount(setInterval(tick, 1000))
  };

  const CountPauseHandler = () => {
    return alert("Hola");
  };

  const CountReinitiateHandler = () => {
    setSecondsCount(0);
  };

  return (
    <>
      <input type="number" placeholder="0" ref={minutesCount}></input>
      <button onClick={CountInitiateHandler}>Inicio</button>
      <button onClick={CountPauseHandler}>Pausa</button>
      <button onClick={CountReinitiateHandler}>Reinicio</button>
      <p>Contador: {secondsCount}</p>
    </>
  );
};

export default App;
