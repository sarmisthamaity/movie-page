import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-color-white active">Home</Link>
            </li>
          </ul>
          <Link to="/signup" className="btn btn-outline-success me-2 text-color-white">Sign Up</Link>
          <Link to="/login" className="btn btn-outline-success text-color-white">Login</Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
