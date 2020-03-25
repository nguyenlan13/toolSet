import React from "react";
import { Link } from "react-router-dom";
import logo from './../assets/ToolSet_Glasses_White_and_Orange.png'

function Navbar() {
  return (
    <nav>
            <Link className="nav-link" to="/">
                <div><img id="logo" src={logo} alt=""/></div>
            </Link>
        <ul className="nav-links">
            <Link className="nav-link" to="/profile">
                <li>MY PROFILE</li>
            </Link>
            <Link className="nav-link" to="/categories">
                <li>CATEGORIES</li>
            </Link>
            <Link className="nav-link" to="/topics">
                <li>TOPICS</li>
            </Link>
            <Link className="nav-link" to="/lessons">
                <li>LESSONS</li>
            </Link>
            <Link className="nav-link" to="/about">
                <li>ABOUT</li>
            </Link>
           
            {/* <Link className="nav-link" to="/login">
                <li>LOG IN</li>
            </Link>
            <Link className="nav-link" to="/signup">
                <li>SIGN UP</li>
            </Link> */}
        </ul>
    </nav>
  );
}

export default Navbar;