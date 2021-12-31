import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top   ">
      <div className="container">
        <a href="" className="navbar-brand ">
          <span className="company-name text-orange">The White Hall</span>
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
          <ul className="navbar-nav ml-auto ">
            <li>
            <Link to="/">HOME</Link>

            </li>
            <li>
            <Link to="/about">ABOUT</Link>

            </li>

            <li>
            <Link to="/service">SERVICE</Link>

            </li>

            <li>
            <Link to="/package">PACKAGE</Link>

            </li>
            <li>
            <Link to="/booking">BOOKING</Link>

            </li>
            <li>
            <Link to="/galary">GALARY</Link>

            </li>
          

            <li>
            <Link to="/contact">CONTACT</Link>

            </li>
            <li>
            <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;