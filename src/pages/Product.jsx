import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';



const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  //const { addToCart } = useCart();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1 className='viewedProduct'>{product.title}</h1>
      <img classname="productimg" src={product.image} alt={product.title} />
      <p className="productDesc">{product.description}</p>
      <p className="productPrice">${product.price}</p>
      <button className="cartBtn"
          onClick={() => addToCart(product)}>
            <span>Add to Cart</span>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier"> <defs>  </defs> <g id="cart"> <circle r="1.91" cy="20.59" cx="10.07" class="cls-1"></circle> 
            <circle r="1.91" cy="20.59" cx="18.66" class="cls-1"></circle> 
            <path d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10" class="cls-1"></path> 
            <polyline points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91" class="cls-1"></polyline> </g> 
            </g>
            </svg>
            </button>
    </div>
  );
};

export default Product;