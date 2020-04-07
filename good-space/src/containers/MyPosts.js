import React from "react";
import { Button } from "react-bootstrap";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
import PostCard from "../components/PostCard";

const postsAPI = "http://localhost:3000/posts";

class MyPosts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/posts/${localStorage.user_id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts: [posts] }));
    // .then(console.log(this.state.posts, 'posts?'));
  }

  addNewPost = newPost => {
    fetch(postsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts: [posts, ...this.state.posts] });
      });
  };

  renderPosts = () => {
    return (
      this.state.posts.length &&
      this.state.posts[0].posts.map(post => <PostItem {...post} key={post.id}/>)
    );
  };

  //   editPost = (id) => {
  //     fetch() ?
  // this.setState({})
  //   }

  //   deletePost = () => {
  //     fetch()
  //     this.setState({})
  //   }

  render() {
    return (
      <div className="my-posts">
        <h3>My Posts</h3>
        <br />
        <div>
          <div>
          {this.renderPosts()}
          <Button>Edit</Button>
          <Button>Delete</Button>
          </div>
      
        </div>
        <br />
        <h4>Create A New Post</h4>
        <PostForm addNewPost={this.addNewPost} />
      </div>
    );
  }
}

export default MyPosts;
