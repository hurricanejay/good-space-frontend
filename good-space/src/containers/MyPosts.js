import React from "react";
import { Button } from "react-bootstrap";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";

const postsAPI = "http://localhost:3000/posts";

class MyPosts extends React.Component {
  state = {
    posts: [],
    toggleForm: false
  };

  showForm = () => {
    this.setState(prevState => {
      return {
        toggleForm: !prevState.toggleForm
      };
    });
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/posts/${localStorage.user_id}`)
      .then(response => response.json())
      .then(user => this.setState({ posts: user.posts }));
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
        this.setState({ posts: [...this.state.posts, posts] });
      });
  };

  afterDelete = obj => {
    const postsCopy = [...this.state.posts];
    const newPosts = postsCopy.filter(p => p.id !== obj.id);
    this.setState({ posts: newPosts });
  };

  renderPosts = () => {
    return (
      this.state.posts.length &&
      this.state.posts.map(post => (
        <div>
          <PostItem
            {...post}
            test="x"
            key={post.id}
            afterDelete={this.afterDelete}
          />
        </div>
      ))
    );
  };

  render() {
    console.log(this.state.posts, "posts?");
    return (
      <div className="my-posts">
        <h3>My Posts</h3>
        <br />
        <div>
          <div>
            {this.renderPosts()}
          </div>
        </div>
        <br />

        <Button onClick={this.showForm}>Create A New Post</Button><br/><br/>
        {this.state.toggleForm ? (
          <PostForm addNewPost={this.addNewPost} />
        ) : null}
      </div>
    );
  }
}

export default MyPosts;
