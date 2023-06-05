// const books = [ { title: “El Quijote de la Mancha”, rating: 7.9 }, { title: “El señor de los anillos”, rating: 8.1 }, { title: “Dune”, rating: 7.8 }, { title: “Martín Fierro”, rating: 9.2 } ]

// Escribir el componente Books.js que reciba por props este arreglo,

// filtre los libros con rating mayor a 8 y

// devuelva un componente Book por cada una de las películas que cumplen esta condición.

// Book debe tener una etiqueta h1 con el título y una etiqueta p con el puntaje.
// <Book title = {/* aca el titulo /} rating = {/ aca el puntaje */} />

// Si el puntaje es mayor a nueve debería mostrarse en negrita.


import "./App.css";

function App() {
  const BOOKS = [
    {
      title: "El Quijote de la Mancha",
      rating: 7.9,
    },
    {
      title: "El señor de los anillos",
      rating: 8.1,
    },
    {
      title: "Dune",
      rating: 7.8,
    },
    {
      title: "Martín Fierro",
      rating: 9.2,
    },
  ];

  return (
    <>
      <Books BOOKS={BOOKS} />
    </>
  );
}

const Books = ({ BOOKS }) => {
  const filteredBooks = BOOKS.filter((BOOKS) => BOOKS.rating > 8);
  console.log(filteredBooks);
  const mappedBooks = filteredBooks.map((filteredBooks, index) => (
    <Book
      key={index}
      title={filteredBooks.title}
      rating={filteredBooks.rating}
    />
  ));

  return (
    <>
      <div>{mappedBooks}</div>
    </>
  );
};

const Book = ({ title, rating }) => {
  return (
    <>
      <h1>el titulo es: {title}</h1>
      <p style={{ fontWeight: rating > 9 ? "bold" : "normal" }}>
        el puntaje es: {rating}
      </p>
    </>
  );
};

export default App;
