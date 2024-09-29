import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

const Navbar = () => {
  // const [search, setSearch] = useState('');

  // const handleInputChange = (e) => {
  //   setSearch(e.target.value);
  // };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(search);
  // };


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
          {/* <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success text-color-white" type="submit">Search</button>
          </form> */}
          <Link to="/signup" className="btn btn-outline-success me-2 text-color-white">Sign Up</Link>
          <Link to="/login" className="btn btn-outline-success text-color-white">Login</Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
