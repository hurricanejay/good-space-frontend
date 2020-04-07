import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AllPosts from "./containers/AllPosts";
import Nav from "./containers/Nav";
import MyPosts from "./containers/MyPosts";

class App extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    const user_id = localStorage.user_id;
    if (user_id) {
      fetch("http://localhost:3001/auto_login", {
        headers: {
          Authorization: user_id
        }
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors);
          } else {
            this.setState({ currentUser: response });
          }
        });
    }
  }

  setUser = user => {
    this.setState(
      {
        currentUser: user
      },
      () => {
        localStorage.user_id = user.id;
        this.props.history.push("/allposts");
      }
    );
  };

  logout = () => {
    this.setState(
      {
        currentUser: null
      },
      () => {
        localStorage.removeItem("user_id");
        this.props.history.push("/home");
      }
    );
  };

  renderLogin = renderprops => {
    return <Login setUser={this.setUser} />;
  };

  render() {
    return (
      <div className="App">
        <Nav
          setUser={this.setUser}
          logout={this.logout}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route
            path="/login"
            exact
            component={() => <Login isAuthed={true} setUser={this.setUser} />}
          />
          <Route
            path="/signup"
            exact
            component={Signup}
            setUser={this.setUser}
          />
          <Route path="/allposts" exact component={AllPosts} />
          <Route path="/myposts" exact component={MyPosts} />
        </Switch>
      </div>
    );
  }
}

{
  /* <Route exact path="/signup" render={() => (!props.currentUser) ? <Signup setUser={props.setUser} /> : null} />
{props.currentUser ? <Link onClick={props.logout} >Logout</Link> : null} */
}

export default App;
