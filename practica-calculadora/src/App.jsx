import { useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Ejercicio calculadora (っ ͡❛ᴗ ͡❛)っ🎔</h1>
      <Calculadora />
    </>
  );
}

const Calculadora = () => {
  // const [firstNumber, setFirstNumber] = useState(0);
  // const [secondNumber, setSecondNumber] = useState(0);

  const firstNumberRef = useRef(0);
  const secondNumberRef = useRef(0);

  const sumHandler = () => {
    const result =
      parseInt(firstNumberRef.current.value) +
      parseInt(secondNumberRef.current.value);
    console.log(parseInt(firstNumberRef.current.value));
    //console.log(secondNumberRef.current.value)
    console.log(result);

    return alert("la suma de los 2 numeros es: " + result);
  };

  return (
    <>
      <p>primer número</p>
      <input type="number" ref={firstNumberRef}></input>
      <p>segundo número</p>
      <input type="number" ref={secondNumberRef}></input>
      <button onClick={sumHandler}>Sumar los dos números</button>
    </>
  );
};

export default App;
