import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "../css/signup.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password
    };

    const notify = (message) => toast.success(message);

    try {
      const response = await axios.post('http://localhost:3001/api/user/signup', userData);
      console.log(response.data, "response.data");

      if (response.data.status === 200) {
        console.log("response.data.data.token", response.data.data.token);

        setName('');
        setEmail('');
        setPassword('');
        toast.success(response.data.data.message);
        // notify(response.data.data.message);
        // toast.success(response.data.data.message, {
        //   // position: toast.POSITION.TOP_CENTER,
        //   autoClose: 3000, //3 seconds
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   // toastId,
        //   transition: Slide
        // });
        localStorage.setItem('token', response.data.data.token);
        // navigate('/login');

      }
    } catch (error) {
      console.error(error);
      // toast.error('Cound not fetch nationalities, please try again later', {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
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
