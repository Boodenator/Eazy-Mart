import {createRoot} from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Product from './pages/Product'; //products page
import Cart from './pages/Cart'; //cart page
import Payment from './pages/Payment'; //new payment method
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './pages/Form'; //sign up page
import Login from './pages/Login'; //login page
import './index.css';
import Popup from 'reactjs-popup';
import Chatbot from './components/Chatbot';
import 'reactjs-popup/dist/index.css';

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
                    <Route path="/login" element={<Login />} />
                    <Route path="/payment" element={<Payment />} /> {/*new payment method*/}
                </Routes>
                
              </main>
            
        </div>
      </Router>
    </CartProvider>

      <div>
        <h1 className='header1'>Your Next Stop For All Your Shopping Needs</h1>
      </div>
      <div className="contactUs">
       <Popup
                trigger={<button className="contactButton">Contact Us</button>}
                position="right center">
                <div>Eazy-Mart Developers</div>
                <div>Phone: 123-456-7890</div>
                <div>Email: support@eazy-mart.com</div>
                </Popup>
               
      </div>
    <Chatbot />  
      <Footer />
    </>
  );
}

export default App;

