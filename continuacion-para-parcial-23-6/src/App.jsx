//Ejercicio: practicaEj1Parcial.

import { useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Practicando</h1>
      <Login />
    </>
  );
}

//las cosas que me faltaron y no me salieron digamos, son importantes. toca repasarlas

const Login = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const userRef = useRef(null);
  const ageRef = useRef(null);
  const [isValid, setIsValid] = useState(null);

  const userHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    userRef.current.value === "Golzman" || ageRef.current.value < 18
      ? setIsValid(false)
      : setIsValid(true);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Usuario</label>
        <input
          type="text"
          ref={userRef}
          value={userName}
          onChange={userHandler}
        ></input>
        <label>Edad</label>
        <input
          type="number"
          ref={ageRef}
          value={age}
          onChange={ageHandler}
        ></input>
        <button type="submit">Enviar</button>
        <p>{isValid ? "pasas" : "no pasas"}</p>
      </form>
    </>
  );
};

export default App;
