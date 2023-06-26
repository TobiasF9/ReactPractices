// Crea un componente de React llamado ContadorTiempo que muestre un contador de tiempo en minutos y segundos.
// El componente debe tener botones de inicio, pausa y reinicio. 
// Al hacer clic en el botón de inicio, 
// el contador debe comenzar a contar hacia abajo desde un valor inicial 
// (por ejemplo, 5 minutos). 
// Al hacer clic en el botón de pausa, 
// el contador debe detenerse en su lugar actual. 
// Al hacer clic en el botón de reinicio, 
// el contador debe volver al valor inicial

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Venta Farmaceuticos</h1>
      <ContadorTiempo tiempoInicial={300} />
    </>
  );
}

const ContadorTiempo = ({ tiempoInicial }) => {
  const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);
  const [intervalo, setIntervalo] = useState(null);

  const iniciarContador = () => {
    if (!intervalo && tiempoRestante > 0) {
      const idIntervalo = setInterval(() => {
        setTiempoRestante((prevTiempo) => prevTiempo - 1);
      }, 1000);
      setIntervalo(idIntervalo);
    }
  };

  const pausarContador = () => {
    if (intervalo) {
      clearInterval(intervalo);
      setIntervalo(null);
    }
  };

  const reiniciarContador = () => {
    pausarContador();
    setTiempoRestante(tiempoInicial);
  };

  const formatarTiempo = () => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    return `${minutos < 10 ? "0" + minutos : minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`;
  };

  return (
    <div>
      <p>Tiempo restante: {formatarTiempo()}</p>
      <button onClick={iniciarContador}>Iniciar</button>
      <button onClick={pausarContador}>Pausar</button>
      <button onClick={reiniciarContador}>Reiniciar</button>
    </div>
  );
};

// const TimeCount = () => {
//   const [secondsCount, setSecondsCount] = useState(0);
//   const minutesCount = useRef(0);

//   //me parece qu esta re mal usar useref aca, probar de nuevo los ejercicios solo usando state

//   const CountInitiateHandler = () => {
//     setSecondsCount(parseFloat(minutesCount.current.value));
//     //setSecondsCount(setInterval(tick, 1000))
//   };

//   const CountPauseHandler = () => {
//     return alert("Hola");
//   };

//   const CountReinitiateHandler = () => {
//     setSecondsCount(0);
//   };

//   return (
//     <>
//       <input type="number" placeholder="0" ref={minutesCount}></input>
//       <button onClick={CountInitiateHandler}>Inicio</button>
//       <button onClick={CountPauseHandler}>Pausa</button>
//       <button onClick={CountReinitiateHandler}>Reinicio</button>
//       <p>Contador: {secondsCount}</p>
//     </>
//   );
// };

export default App;
