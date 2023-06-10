import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ProductList = () => {
  const { products, deleteProduct} = useContext(
    ProductContext
  );

  const categories = ['Type 1', 'Type 2', 'Type 3'];

  return (
    <div>
      <h1>Products</h1>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {products
            .filter((product) => product.category === category)
            .map((product, index) => (
              <li key={index}>
                <div>
                  <strong>Id:</strong>
                  {product.id}
                </div>
                <div>
                  <strong>Name:</strong>
                  {product.name}
                </div>
                <div>
                  <strong>Price:</strong>
                  {product.price}
                </div>
                <div>
                  <strong>Category:</strong>
                  {product.category}
                </div>
                <button onClick={() => deleteProduct(index)}>Delete</button>
              </li>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
