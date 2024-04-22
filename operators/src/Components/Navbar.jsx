import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaSearch } from 'react-icons/fa';
import '../navbar.css';

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                City Crews
                </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cr" className="nav-links">
              Customer Review
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sr" className="nav-links">
              Submit Review
            </Link>
          </li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
        </>
    );
}

export default Navbar;