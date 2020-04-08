import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome To The Good Space</h1>
      <br />
      <br />
      <div>
        <p>
          A community platform that allows you to connect with others for help,
          especially during a time of emergency.
        </p>
      </div>
      <br />
      <Link to="/allposts" exact>
        <Button>See All Posts</Button>
      </Link>
      <br />
      <br />
      <Link to="/login" exact>
        <Button>Login</Button>
      </Link>
      <Link to="/signup" exact>
        <Button>Signup</Button>
      </Link>
    </div>
  );
};

export default Home;
