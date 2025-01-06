import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  //using the reduce method and the accumulator to calculate the total price of the products in the cart
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  //Estimated the shipping cost
  const shippingCost = 20.00;
  //Grand total of the cart
  const grandTotal = total + shippingCost;

  return (
    <div>
      <h1>Your Cart  <img src="/shopping-cart.png" alt="Cart Icon" className="cart-icon" width="40px"/></h1>
      {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <>
      <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h2>Total: ${total.toFixed(2)}</h2>
        <h2>Shipping: ${shippingCost.toFixed(2)}</h2>
        <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
     </>
      )}
    </div>
  );
};

export default Cart;
