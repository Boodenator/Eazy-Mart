import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';
const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav className='headerNav'>
        <button className="headerButton"><Link to="/">Home</Link></button>
        <button className="headerButton"><Link to="/cart">Cart</Link>
        {cart.length > 0 && <span className="cartCount">({cart.length})</span>} {/* Display cart item count */}
        </button>
        <button className="headerButton"><Link to="/SignIn">Sign In</Link></button>
      </nav>
    </header>
  );
};

export default Header;
