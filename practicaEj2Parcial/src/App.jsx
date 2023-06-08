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

export default App;
