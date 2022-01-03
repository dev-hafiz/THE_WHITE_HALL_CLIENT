import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut, isAdmin } = useAuth();
  const { displayName } = user;

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container">
        <a href="" className="navbar-brand ">
          <span>The White Hall</span>
          <br /> <span className="text-muted"></span>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-target="#menu"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto ">
            <li>
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/allpackages">
                All PACKAGES
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/bookCenter">
CENTER BOOK</Link>
            </li>

            <li>
              <Link className="nav-link" to="/galary">
                GALARY
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>

            {isAdmin ? (
              <li>
                <Link className="nav-link" to="/admin">
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <li>
                <Link className="nav-link" to="/customerdashboard">
                  DASHBOARD
                </Link>
              </li>
            )}

            {!user.email ? (
              <li>
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={logOut}
                  className="nav-link btn btn-outline-dark"
                >
                  LOG-OUT
                </button>
              </li>
            )}

<li>
            <h5 className="ms-1 mt-2 text-warning">{displayName}</h5>
            </li>


          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;
