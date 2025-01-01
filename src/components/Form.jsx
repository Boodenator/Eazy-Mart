import React from 'react';
import './Form.css'; // Import the CSS file

const Form = () => {
  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder />
          <div className="forgot">
            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
          </div>
        </div>
        <button className="sign">Sign in</button>
      </form>
      <div className="social-message">
        <div className="line" />
        <p className="message">Login with social accounts</p>
        <div className="line" />
      </div>
      <div className="social-icons">
        <button aria-label="Log in with Google" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078..."></path>
          </svg>
        </button>
        <button aria-label="Log in with Twitter" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M31.937 6.093c..."></path>
          </svg>
        </button>
        <button aria-label="Log in with GitHub" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16 0.396c..."></path>
          </svg>
        </button>
      </div>
      <p className="signup">Don't have an account?
        <a rel="noopener noreferrer" href="#">Sign up</a>
      </p>
    </div>
  );
};

export default Form;
