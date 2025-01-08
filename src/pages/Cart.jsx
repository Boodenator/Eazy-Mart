import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const shippingCost = 20.0;
  const grandTotal = total + shippingCost;

  return (
    <div>
      <h1>
        Your Cart <img src="/shopping-cart.png" alt="Cart Icon" className="cart-icon" width="40px" />
      </h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.title} - ${product.price.toFixed(2)}
                <button className="cartRemoveBtn" onClick={() => removeFromCart(product)}>Remove</button>
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
