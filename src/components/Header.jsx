import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header>
      <nav className='headerNav'>
        <button className="headerButton"><Link to="/">Home</Link></button>
        <button className="headerButton"><Link to="/cart">Cart</Link></button>
        <button className="headerButton"><Link to="/SignIn">Sign In</Link></button>
      </nav>
    </header>
  );
};

export default Header;
