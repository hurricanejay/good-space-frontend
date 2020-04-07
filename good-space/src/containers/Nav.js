import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Nav = (props) => {

  const navStyle = {  color: "black"}


  return (

    <nav>
      <div className="nav">
      <h3>The Good Space</h3>
        <ul className="nav-links">
        <NavLink style={navStyle}  to="/home">
            <li>Home</li>
          </NavLink>
          {(props.currentUser) ? null :
          <NavLink style={navStyle}  to="/login">
            <li>Log In</li>
          </NavLink>}
          {(props.currentUser) ? null : 
          <NavLink style={navStyle} to="/signup">
            <li>Sign Up</li>
          </NavLink>}
          {props.currentUser ? <Link style={navStyle} onClick={props.logout} >Logout</Link> : null}
          <NavLink style={navStyle} to="/allposts">
            <li>All Posts</li>
          </NavLink>
          <NavLink style={navStyle} to="/myposts">
            <li>My Posts</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
