import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import Sucess from '../modal/Sucess';
import "../css/signup.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [ message, setMessage ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };

    const token = localStorage.getItem("token");
    // console.log("token", token);
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }  

    try {
      const response = await axios.post('http://localhost:3001/api/user/login', userData, config);
      
      // console.log(response.data, "hello");
      if(response.data.status === 200) {
        navigate('/');
        alert('Ok');
        // <Sucess message={response.data.message}/>
      }
    } catch (error) {
      // setMessage('Signup failed. Please try again.');
      console.error(error);
    }
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary toggle-password-btn"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </div>
  );
};

export default Login;
