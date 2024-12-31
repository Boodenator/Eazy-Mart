import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header>
      <nav className='headerNav'>
        <Link to="/">Home<span>  </span></Link>
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  );
};

export default Header;
