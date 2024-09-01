import React from 'react';

const ProductList = ({ products, searchTerm, onAddToCart }) => {
  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ProductList">
      {filteredProducts.map((product) => (
        <div key={product.id} className="Product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
