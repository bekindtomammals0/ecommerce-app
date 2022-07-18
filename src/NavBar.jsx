import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light navbar-expand-lg navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              BB
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="nav-link"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link" aria-current="page">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/customers"
                    className="nav-link"
                    aria-current="page"
                  >
                    Customers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

//export default NavBar;
