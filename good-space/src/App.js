import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import MainContainer from "./containers/MainContainer";
import Nav from "./containers/Nav";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
