import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import "../css/signup.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setEmailError('');
    const userData = {
      name,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:3001/api/user/signup', userData);
      if (response.data.status === 200) {
        // console.log("response.data.data.token", response.data.data.token);

        setName('');
        setEmail('');
        setPassword('');
        localStorage.setItem('token', response.data.data.token);
        toast.success("Signup successful! 🎉", {
          onClose: () => navigate('/login')
        });
      }
    } catch (error) {
      toast.warning(error.response.data.message, {
        onClose: () => navigate('/signup')
      });

      // console.error(error.response.data.message, "llllllllllllllll");
    }

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => changePassword(e)}
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

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Signup;
