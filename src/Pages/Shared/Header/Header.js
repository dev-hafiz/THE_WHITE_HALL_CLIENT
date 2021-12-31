import React from 'react';

const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top   ">
      <div className="container">
        <a href="" className="navbar-brand ">
          <span className="company-name text-orange">MEHEDI HASAN SAIKAT</span>
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
          <ul className="navbar-nav ml-auto">
            <li>
              <a href="#Home" className="nav-link">
                HOME
              </a>
            </li>
            <li>
              <a href="#About" className="nav-link">
                ABOUT 
              </a>
            </li>

            <li>
              <a href="#Skills" className="nav-link">
                SKILLS
              </a>
            </li>

            <li>
              <a href="#Projects" className="nav-link">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#Blogs" className="nav-link">
                BLOGS
              </a>
            </li>
            <li>
              <a href="#Education" className="nav-link">
                EDUCATION
              </a>
            </li>

            <li>
              <a href="#Contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;