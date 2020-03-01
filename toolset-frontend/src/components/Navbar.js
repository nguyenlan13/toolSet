import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h2 className="title">toolSet(Add LOGO)</h2>
      </Link>
        <ul className="nav-links">
            <Link className="nav-link" to="/profile">
                <li>My Profile</li>
            </Link>
            <Link className="nav-link" to="/categories">
                <li>Categories</li>
            </Link>
            <Link className="nav-link" to="/topics">
                <li>Topics</li>
            </Link>
            <Link className="nav-link" to="/about">
                <li>About</li>
            </Link>
            <Link className="nav-link" to="/login">
                <li>Log In</li>
            </Link>
            <Link className="nav-link" to="/signup">
                <li>Sign Up</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;