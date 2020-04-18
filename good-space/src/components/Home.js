import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import bg from './bg.png'


const Home = () => {
  return (
    <div className="home">
      <h1 className='title'>Welcome To The Good Space</h1>
      <div>
        <img src= {`${bg}` } className='bg-img'></img>
        <p className='subtitle'>
          We are a community platform that allows you to connect with others in a time of emergency. Check below for the latest updates.  
        </p>
      </div>
      {/* <Link to="/login" exact>
        <Button  size="sm"  >Login</Button>
      </Link>
      <Link to="/signup" exact>
        <Button  size="sm" >Signup</Button>
      </Link>
      <br /> <br /> */}
      <div className="btns">
      <Link to="/allposts" exact>
        <Button variant="success" size="sm" >See All Community Posts</Button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
