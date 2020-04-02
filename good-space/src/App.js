import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {Button} from 'react-bootstrap';
import MainContainer from './containers/MainContainer';
import Navbar from './containers/Navbar';

function App() {
  return (

    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">All Posts</Link>
    //         </li>
    //         <li>
    //           <Link exact path to="/login">Log In</Link>
    //         </li>
    //         <li>
    //           <Link to="/signup">Sign Up</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     </div>
    //     </Router>

    <div className="App">
      <MainContainer />
    </div>
  );
}




export default App;
