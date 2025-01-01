// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title} - {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
