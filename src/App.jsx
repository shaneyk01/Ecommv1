import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

const App = () => {
  const cartCount = useSelector((state) => state.cart.itemCount);

  return (
    <Router>
      <div className="app">
       
        <header className="app-header">
          <div className="header-content">
            <h1>
              <Link to="/" className="logo-link">
                🛍️ FakeStore
              </Link>
            </h1>
            <nav className="app-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/cart" className="nav-link cart-link">
                🛒 Cart ({cartCount})
              </Link>
            </nav>
          </div>
        </header>

   
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

      
        <footer className="app-footer">
          <p>&copy; 2026 FakeStore E-Commerce. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
