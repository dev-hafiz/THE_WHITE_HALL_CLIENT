import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container">
        <a href="" className="navbar-brand ">
          <span >The White Hall</span>
          <br /> <span className="text-muted"></span>
        </a>
        <button
          type="button"
          className="navbar-toggler "
          data-target="#menu"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto ">
            <li>
            <Link className="nav-link"  to="/">HOME</Link>

            </li>
            <li>
            <Link className="nav-link" to="/about">ABOUT</Link>

            </li>

      

            <li>
            <Link className="nav-link" to="/allpackages">All PACKAGES</Link>

            </li>
            <li>
            <Link className="nav-link" to="/booking">BOOKING</Link>

            </li>
            <li>
            <Link  className="nav-link" to="/galary">GALARY</Link>

            </li>
          

            <li>
            <Link className="nav-link" to="/contact">CONTACT</Link>

            </li>
            <li>
            <Link  className="nav-link" to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;