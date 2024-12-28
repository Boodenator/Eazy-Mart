import {createRoot} from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
    <>
    
    <Router>
      <div>
          <Header />
            <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          <Footer />
      </div>
    </Router>
      <div>
        <h1 className='header1'>Welcome To Eazy-Mart</h1>
      </div>
      <p className="read-the-docs">
        Click on MEEEE to learn more
      </p>
    </>
  );
}

export default App;

