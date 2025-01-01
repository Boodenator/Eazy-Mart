import {createRoot} from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
//import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import './index.css';

function App() {
    return (
    <>
    <CartProvider>
      <Router>
        <div>
            <Header />
              <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/SignIn" element={<Form />} /> 
                </Routes>
                
              </main>
            <Footer />
        </div>
      </Router>
    </CartProvider>
      <div>
        <h1 className='header1'>Welcome To Eazy-Mart</h1>
      </div>
      <p className="read-the-docs">
       Your Next Stop For All Your Shopping Needs
      </p>
    </>
  );
}

export default App;

