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
