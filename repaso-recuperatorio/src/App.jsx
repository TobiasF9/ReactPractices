import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Ejercicio dado el viernes en el repaso del recuperatorio</h1>
      <TableForm />
    </>
  );
}

const TableInput = ({ legsQuantity, onLegsChange }) => {
  const changeLegsHandler = (event) => {
    onLegsChange(event.target.value);
  };
  return (
    <div>
      <input type="number" value={legsQuantity} onChange={changeLegsHandler} />
    </div>
  );
};

const TableForm = () => {
  const [legs, setLegs] = useState("");

  const legsChangeHandler = (legs) => {
    setLegs(legs);
  };

  return (
    <div>
      <>
        <h2>Cant de patas que tiene la mesa</h2>
        <TableInput legsQuantity={legs} onLegsChange={legsChangeHandler} />
        {legs && <p>{legs !== "4" ? "Mesa inestable " : "mesa estable"}</p>}
      </>
    </div>
  );
};

export default App;
