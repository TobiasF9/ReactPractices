import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  const ContadorCallback = (newContador) => {
    setContador(newContador);
  };

  const appReset = () => {
    setContador(0);
    setUser(false);
  };

  return (
    <>
      <h1>Venta Farmaceuticos</h1>
      <Button ContadorCallback={ContadorCallback} contador={contador} />
      <p>Medicamentos comprados: {contador} </p>
      <Formulario />
      <footer>
        <button onClick={appReset}>Reseteo de app</button>
      </footer>
    </>
  );
}

const Button = ({ ContadorCallback, contador }) => {
  const ContadorHandler = () => {
    ContadorCallback(contador + 1);
  };

  return (
    <>
      <button onClick={ContadorHandler}>Comprar medicamento</button>
    </>
  );
};

const Formulario = () => {
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const [user, setUser] = useState(false);
  const [pass, setPass] = useState(false);

  const handleUserRef = () => {
    if (userRef.current.value.length === 0) {
      setUser(false);
      userRef.current.focus();
    } else {
      setUser(true);
      console.log("paso por el else");
    }
  };

  const handlePasswordRef = () => {
    if (passwordRef.current.value.length <= 3) {
      setPass(false);
      console.log("paso por el if");
    } else {
      setPass(true);
      console.log("paso por el else");
    }
  };

  const chequeandoLas2 = () => {
    if (userRef.current.value.length === 0) {
      setUser(false);
      userRef.current.focus();
    }
    if (passwordRef.current.value.length <= 3) {
      setPass(false);
      console.log("paso por el if");
    }
  };

  return (
    <>
      <div>
        <h3>Nombre de usuario</h3>
        <input ref={userRef} onChange={handleUserRef}></input>
        <p>{user ? "venis bien" : "venis mal"}</p>
        <h3>Contraseña</h3>
        <input ref={passwordRef} onChange={handlePasswordRef}></input>
        <p>{!pass && "te faltan caracteres"}</p>
        <button onClick={chequeandoLas2}>registrarse</button>
      </div>
    </>
  );
};

export default App;
