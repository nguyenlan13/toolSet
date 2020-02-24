import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h2 className="title">Welcome to toolSet</h2>
      </Link>
        <ul className="nav-links">
            <Link className="nav-link" to="/categories">
                <li>Categories</li>
            </Link>
            <Link className="nav-link" to="/about">
                <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;