import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Hello world!!");
        const response = await fetch('http://localhost:8080/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log("Got data: ", data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
      <ProductList products={products} searchTerm={searchTerm} onAddToCart={handleAddToCart} />
      <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;