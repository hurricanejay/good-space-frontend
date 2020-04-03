import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "../containers/Nav";
import AllPosts from '../containers/AllPosts';
import MyPosts from '../containers/MyPosts';

const postsAPI = "http://localhost:3000/posts";

class MainContainer extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch(postsAPI)
          .then(response => response.json())
          .then(posts => this.setState({ posts }));
      }

  render() {
      console.log(this.state.posts, "do we have posts?")
    return (
    <div>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/allposts" component={AllPosts}/>
        <Route path="/myposts" component={MyPosts} />
        </Switch>
      </div>
    </Router>
    </div>);
  }
}

export default MainContainer;
