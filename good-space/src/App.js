import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import AllPosts from './containers/AllPosts'
import MainContainer from "./containers/MainContainer";
import Nav from "./containers/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/main" exact component={MainContainer} />
          <Route path="/nav" exact component ={Nav} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
