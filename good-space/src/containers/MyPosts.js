import React from "react";
import { Button } from "react-bootstrap";
import PostForm from "../components/PostForm";

class MyPosts extends React.Component {
  render() {
    console.log(this.props.addNewForm, "props??");
    return (
      <div className="my-posts">
        <h3>My Posts</h3>
        <br />
        <h4>Create A New Post</h4>
        <PostForm addNewPost={this.props.addNewPost} />

        <div>
          <h3>My Previous Posts</h3>
          <p>User's previous posts should go here, posts.user.id</p>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
    );
  }
}

export default MyPosts;
