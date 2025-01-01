import React, { useState } from 'react';
import SignUp from './SignUp';
import './SignIn.css'; // Create this CSS file for modal styling
import Form from './components/Form';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Sign In</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            {isSignUp ? (
              <SignUp />
            ) : (
              <>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit">Sign In</button>
                </form>
                <div className="signup-section">
                  <span>Not a member - </span>
                  <button onClick={() => setIsSignUp(true)}>Sign Up Now</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;