import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a href="#" className="navbar-brand mb-0 h1" width="30" height="30">
          <img
            className="d-inline-block align-top"
            src="\assets\logo.PNG"
            alt="bizkalogo"
          />
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Discover{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Blog{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-lg ">
          Login
        </button>
        <button type="button" className="btn  btn-lg btn-primary">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
