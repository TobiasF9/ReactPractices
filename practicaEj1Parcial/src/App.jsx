// Nuestro cliente es un local bailable de Rosario, que desea que le construyamos un componente Login.js 
// donde haya dos componentes Input en donde el usuario pueda ingresar su apellido y la edad que posee. 
// A su vez, luego de que solicita la entrada, 
// debe aparecer un texto en alguna parte del componente que le notifique si está o no admitido al local.

// Condiciones para ser admitido:
// Tener 18 o más años.
// No poseer el apellido “Golzman” (usuario baneado del establecimiento).
// Ambos campos deben tener valor.

// Button:
// Componente button que muestra dentro suyo lo que sea que pongamos entre sus llaves del estilo:
// <Button> Solicitar entrada </Button>

// ValidationText:
// Componente que devuelve el mensaje de si entra o no entra al local bailable al usuario luego de tratar de solicitar la entrada.
// Este componente no debe ser renderizado al iniciar la aplicación, solo luego de presionar el botón.

// Login:
// Deberá manejar la lógica de la aplicación.
// Retorna:
// Un input para el apellido
// Un input Input para la edad
// Un componente Button  que diga “Solicitar entrada”
// Un componente ValidationText con información si el usuario es admitido al establecimiento.

// Una vez que el usuario hizo click en el botón, en el caso de que haya tenido alguna condición no cumplida,
//  hacer foco en el input en el cual se produjo el error. 
// En caso de que haya cometido ambos errores, dejar el comportamiento default (foco en el primer input)

// Generales:
// Los componentes deben ser funcionales.
// No es necesario ningún tipo de estilizado en la respuesta.
// Solo entregar los dos componentes (pueden adjuntar archivos o escribirlos en texto)
// Los hooks necesarios son solo useState y useRef

import { useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Ej 1 parcial</h1>
      <Login />
    </>
  );
}
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const ValidationText = ({ isValid }) => {
  return isValid ? (
    <p>¡Bienvenido al local bailable!</p>
  ) : (
    <p>No cumples con las condiciones para ingresar al local bailable.</p>
  );
};

const Login = () => {
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const lastNameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleButtonClick = () => {
    if (!lastName || !age) {
      if (!lastName) {
        lastNameInputRef.current.focus();
      } else {
        ageInputRef.current.focus();
      }
    } else {
      setShowValidation(true);
      if (age >= 18 && lastName !== "Golzman") {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  return (
    <div>
      <label>Apellido:</label>
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        ref={lastNameInputRef}
      />

      <label>Edad:</label>
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        ref={ageInputRef}
      />

      <Button onClick={handleButtonClick}>Solicitar entrada</Button>

      {showValidation && <ValidationText isValid={isValid} />}
    </div>
  );
};

export default App;
