// Ejercicio de useRef:
// Crea un formulario con un campo de entrada de texto y un botón de enviar. 
// Utiliza useRef para capturar el valor del campo de entrada de texto cuando se hace clic en el botón. 
// Luego, muestra el valor capturado en algún lugar del componente.

import { useRef, useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <h1>Práctica actual</h1>
      <Form/>
    </>
  );
}

const Form = () => {
  const [datita, setDatita] = useState([])
  const data = useRef("")
  const sendData = (e) => {
    e.preventDefault();
    setDatita([...datita, data.current.value]);
    //console.log(datita)
   }
return (
  <>
  <form onSubmit={sendData}>
  <input type="text" ref={data}/>
  <button type="submit" >Enviar</button>
  <div>{datita.map((dat, index) => (
    <p key={index}>{dat}</p>
  ))}</div>
  </form>
  </>
)
}

// function Formulario() {
//   // Declara una ref para el campo de entrada
//   const inputRef = useRef(null);

//   // Declara una variable de estado para el valor capturado
//   const [valor, setValor] = React.useState('');

//   // Define una función que se ejecuta al hacer clic en el botón
//   function handleClick() {
//     // Obtiene el valor actual del campo de entrada
//     const inputValue = inputRef.current.value;

//     // Actualiza el estado con el valor capturado
//     setValor(inputValue);
//   }

//   return (
//     <div>
//       <h1>Formulario con useRef</h1>
//       <input type="text" ref={inputRef} /> {/* Asigna la ref al campo de entrada */}
//       <button onClick={handleClick}>Enviar</button> {/* Llama a la función al hacer clic */}
//       <p>El valor capturado es: {valor}</p> {/* Muestra el valor capturado */}
//     </div>
//   );
// }


//dasdasda

export default App;
