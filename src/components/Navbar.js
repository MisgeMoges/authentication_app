import React, { useState } from "react";
import logo from "../images/logo1.svg";
import { Link } from "react-router-dom";


const Navbar = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fs-1" href="/home">
            <img src={logo} alt="logo" className="w-50 h-25 m-0" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              isOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75 d-flex align-items-center">
              <li className="nav-item justify-space-around">
                <a
                  className="nav-link text-uppercase"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item justify-space-around">
                <a
                  className="nav-link text-uppercase"
                  aria-current="page"
                  href="/security"
                >
                  Security
                </a>
              </li>
              <li className="nav-item justify-space-around mr-5">
                <a
                  className="nav-link text-uppercase"
                  aria-current="page"
                  href="/contact"
                >
                  contact
                </a>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center mt-3">
              {user ? (
                <ul className="list">
                  <li className="listItem">
                    <img src={user.photos[0].value} alt="" className="avatar" />
                  </li>
                  <li className="listItem">{user.displayName}</li>
                  <li className="listItem" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              ) : (
                
                  <Link
                    to="/auth"
                    className="btn btn-primary rounded-pill w-100 w-sm-75"
                  >
                    Sign In
                  </Link>
                
              )}
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
