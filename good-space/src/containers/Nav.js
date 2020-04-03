import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {

  const navStyle = {  color: "black"}


  return (
    <nav>
      <div className="nav">
      <h3>Good Space Logo</h3>
        <ul className="nav-links">
          <Link style={navStyle}  to="/login">
            <li>Log In</li>
          </Link>
          <Link style={navStyle} to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link style={navStyle} to="/allposts">
            <li>Posts</li>
          </Link>
        </ul>
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Nav;
