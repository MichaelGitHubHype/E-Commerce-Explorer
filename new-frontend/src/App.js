import React, { useState } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>My Store</h1>
      <SearchBar onSearchChange={handleSearchChange} />
      <ProductList searchTerm={searchTerm} onAddToCart={handleAddToCart} />
      <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
