import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

<div className="navbar">
<NavLink
  to="/home"
  exact
  ><button>Home</button></NavLink>
  <NavLink
  to="/login"
  exact
  ><button>Log In</button></NavLink>
  <NavLink
  to="/signup"
  exact
  ><button>Sign Up</button></NavLink>

</div>

  );
};

export default Navbar;
