import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome To The Good Space</h1>
      <br />
      <br />
      <div>
        <p>
          A community platform that allows you to connect with others during a time of emergency.
        </p>
      </div>
      <br />
      <Link to="/login" exact>
        <Button  size="sm"  >Login</Button>
      </Link>
      <Link to="/signup" exact>
        <Button  size="sm" >Signup</Button>
      </Link>
      <br /> <br />
      <Link to="/allposts" exact>
        <Button size="sm" >See All Posts</Button>
      </Link>
      <br />
    </div>
  );
};

export default Home;
