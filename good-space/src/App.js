import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Signup from './components/Signup';
import Login from './components/Login';
import AllPosts from './containers/AllPosts';
import Nav from './containers/Nav';
import MyPosts from './containers/MyPosts';

function App() {
  return (

      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/allposts" exact component={AllPosts} />
          <Route path="/myposts" exact component={MyPosts} />
        </Switch>
      </div>

  );
}

export default App;
