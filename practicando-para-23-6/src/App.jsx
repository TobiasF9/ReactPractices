// Ejercicio de lógica de componentes:
// Crea un componente de lista de tareas. El componente debe permitir agregar nuevas tareas, 
// marcar tareas como completadas y eliminar tareas existentes. 
// Utiliza useState para gestionar la lista de tareas y su estado (completada o no). 
// Muestra las tareas en pantalla y agrega controles para marcar y eliminar cada tarea.

import { useState, useRef } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Practicando</h1>
      <ContainerOfTask />
    </>
  );
}

const ContainerOfTask = () => {
  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setTasksList([...tasksList, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1);
    setTasksList(updatedTasks);
  };

  const mappedTasks = tasksList.map((filteredBooks, index) => (
    <Task
      key={index}
      name={filteredBooks}
      removeTask={() => removeTask(index)}
    />
  ));

  return (
    <>
      <form>
        <label>Ingrese el nombre de la nueva tarea</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button onClick={submitHandler}>Enviar al arreglo</button>
      </form>
      <div>{mappedTasks}</div>
    </>
  );
};

const Task = ({ name, removeTask }) => {
  return (
    <>
      <p>{name}</p>
      <button onClick={removeTask}>Eliminar Tarea completada</button>
    </>
  );
};

export default App;
