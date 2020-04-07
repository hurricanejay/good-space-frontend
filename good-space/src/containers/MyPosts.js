import React from "react";
import { Button } from "react-bootstrap";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";

const postsAPI = "http://localhost:3000/posts";

class MyPosts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/posts/${localStorage.user_id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts: [posts] }));
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
      this.state.posts[0].posts.map(post => <div><PostItem {...post} test="x" key={post.id} />
       {/* <Button>Edit</Button>
          <Button>Delete</Button> */}
        </div>)
    );
  };

  //   editPost = (event) => {
  //     const {name, value} = event.target
  // this.setState({[name]: value})
  //   }

  //   handleChange = () => {
    // fetch(`http://localhost:3000/users/posts/${localStorage.user_id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json"
    //   },
    //   body: JSON.stringify(---)
    // })
    //   .then(res => res.json())
    //   .then(likes => {
    //     this.setState({ ----- });
    //   });
  //   }

    // deletePost = (post) => {
    //   fetch(`http://localhost:3000/users/posts/${localStorage.user_id}`, {
    //     method: 'DELETE',
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log(res))}

  render() {
    console.log(this.state.posts, 'posts?')
    return (
      <div className="my-posts">
        <h3>My Posts</h3>
        <br />
        <div>
          <div>
          {this.renderPosts()}
          {/* <Button>Edit</Button>
          <Button onClick={this.deletePost}>Delete</Button> */}
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
