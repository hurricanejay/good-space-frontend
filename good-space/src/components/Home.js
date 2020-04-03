import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return(
<div className="home">
<h1>Welcome To The Good Space</h1>
<p>A community space for all whenever we need help, especially during a time of emergency.</p>

<Link 
        to="/allposts" 
        exact
        ><button>See All Posts</button></Link> <br/>

        <Link
        to="/login"
        exact
        ><button>Login</button></Link>

        <Link
        to="/signup"
        exact
        ><button>Signup</button></Link>

        
  </div>
  ) 
  ;
};

export default Home;
