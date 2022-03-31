import React from "react";

const Navbar = () => {
  return (
    <header>
      <img src=".\assets\logo.PNG" alt="bizkalogo" />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">Discover </a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
          <li>
            <a href="#">Blog </a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
      </nav>
      <button type="text" className="btn">
        Login
      </button>
      <button type="text" className="btn">
        Register
      </button>
    </header>
  );
};

export default Navbar;
