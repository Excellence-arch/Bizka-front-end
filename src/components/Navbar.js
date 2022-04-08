import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div className="container ">
        <a href="#" className="navbar-brand mt-0 h1">
          <img
            className="d-flex align-top"
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/240584989_173622064794381_4485450073447507273_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-5&_nc_sid=dd9801&_nc_ohc=GAuAYNnQhUYAX_dVVj1&_nc_ht=scontent-los2-1.xx&oh=00_AT-21u1XYljMTSNYE4nC9Pj-TwfGBhBzs9mopxmiIf69lw&oe=624D2B6C"
            height={"90rem"}
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
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                <strong> Home </strong>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <strong> Discover </strong>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <strong> About </strong>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <strong> Blog </strong>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <strong> Contact</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <ul className="d-flex mr-3 gap-4">
            <li className="list-inline-item">
              <button
                type="submit"
                className="btn rounded-pill btn-outline-primary btn-lg"
              >
                Login
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="btn rounded-pill btn-lg btn-primary"
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
