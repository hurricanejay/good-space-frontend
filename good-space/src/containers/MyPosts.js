import React from "react";
import { Button } from "react-bootstrap";
import PostForm from "../components/PostForm";
const postsAPI = "http://localhost:3000/posts";

class MyPosts extends React.Component {
state = {
  posts: []
}

  componentDidMount() {
        fetch(`http://localhost:3000/users/posts/${localStorage.user_id}`)
    .then(response => response.json())
    .then(posts => this.setState({posts: [posts]}))
    .then(console.log(this.state.posts, 'posts?'));

  }

  addNewPost = newPost => {
    // console.log(newPost, 'newpost??')
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
    {this.state.posts.map(post => (
    {...post} 
    ))}
  }

//   editPost = (id) => {
//     fetch() ?
// this.setState({})
//   }

//   deletePost = () => {
//     fetch()
//     this.setState({})
//   }

  render() {
 
    // console.log(this.addNewPost, 'adding post?')
    return (
      <div className="my-posts">
        <h3>My Posts</h3>
        <br />
        <div>
          <p>{this.state.posts.posts}</p>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
        <br />
        <h4>Create A New Post</h4>
        <PostForm addNewPost={this.addNewPost} />
      </div>
    );
  }
}

export default MyPosts;
