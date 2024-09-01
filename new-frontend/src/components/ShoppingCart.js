import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  const handleRemoveClick = (productId) => {
    onRemoveFromCart(productId);
  };

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
              <button onClick={() => handleRemoveClick(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cartTotal.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
