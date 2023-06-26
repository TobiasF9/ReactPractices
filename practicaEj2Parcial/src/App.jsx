// Debemos crear tres componentes: ContainerProducts,ProductForm y Cart.

// ProductForm:
// Es un formulario donde el usuario ingresa el nombre de un producto y posee un botón “Agregar” para agregarlo a la lista.
// Retorna:
// Un label indicando “Ingrese el nombre del producto”
// Un input de texto que permita ingresar el nombre del producto
// Un botón que permite agregarlo a la lista.

// Cart:
// Lista de los productos agregados al carrito.
// Retorna:
// La lista de productos, los mismos encerrados en un <h3> por cada producto, de manera que resulte un maquetado similar a:
// <h3>Mesa</h3>
// <h3>Silla</h3>
// <h3>Diván</h3>

// ContainerProducts
// Es el padre de ambos componentes, maneja la lógica de la aplicación.
// A su vez, se nos solicitó que cada vez que el usuario haga click en uno de los productos renderizados, este se elimine de la lista.

// Generales:
// Los componentes deben ser funcionales.
// No es necesario ningún tipo de estilizado en la respuesta.
// Solo entregar los tres componentes (pueden adjuntar archivos o escribirlos en texto)
// El único hook necesario para la resolución del ejercicio es useState.

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Ej 2 parcial</h1>
      <ContainerProducts />
    </>
  );
}
const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productName);
    setProductName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ingrese el nombre del producto:</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

const Cart = ({ products, removeProduct }) => {
  return (
    <div>
      {products.map((product, index) => (
        <h3 key={index} onClick={() => removeProduct(index)}>
          {product}
        </h3>
      ))}
    </div>
  );
};

const ContainerProducts = () => {
  const [productList, setProductList] = useState([]);

  const addProduct = (productName) => {
    setProductList([...productList, productName]);
  };

  const removeProduct = (index) => {
    const updatedList = [...productList];
    updatedList.splice(index, 1);
    setProductList(updatedList);
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <Cart products={productList} removeProduct={removeProduct} />
    </div>
  );
};

// // const Cart = ({ products }) => {
// //   return <div> {products} </div>;
// // };

// // const ContainerProducts = () => {
// //   const [productList, setProductList] = useState([]);

// //   const mappedProducts = productList.map((product, index) => (
// //     <h3 key={index} onClick={() => removeProduct(index)}>
// //       {" "}
// //       {product}{" "}
// //     </h3>
// //   ));

// //   return (
// //     <div>
// //       {" "}
// //       <ProductForm addProduct={addProduct} /> <Cart products={mappedProducts} />{" "}
// //     </div>
// //   );
// // };

export default App;
