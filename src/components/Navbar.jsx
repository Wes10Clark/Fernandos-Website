import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="heading">
        Fernando<span className="pepper">`</span>s
      </h1>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="link" to="/Drinks">
            Drinks
          </Link>
        </li>
        <li>
          <Link className="link" to="/Info">
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
