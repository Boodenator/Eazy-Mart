// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from an API 
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
  <>
    <div>
      <h1 className="homeHeader">Welcome to Eazy-Mart Online Store</h1>
      <h3 className="homeHeaderTwo">The Future of Online Shopping is NOW!</h3>
      <div className="JBL-container">
        <img src="src/assets/JBL.png" alt="JBL Image" className="JBL-image"/>
        </div>
      <input type="text" placeholder="Search for products ..." className="search-bar" width="90%"/>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className='images'/>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
     </div>
            ))}
      </div>
    </div>
    <div className="New-Arrival-container">
      <img src="src/assets/New-Arrival.png" alt="New Image" className="New-image"/>
    </div>

    </>
  );
};

export default Home;
