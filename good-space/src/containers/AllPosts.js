import React from "react";
import PostCard from "../components/PostCard";
import MyPosts from "../containers/MyPosts";

const postsAPI = "http://localhost:3000/posts";

class AllPosts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch(postsAPI)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
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

  render() {
    // console.log(this.state.posts, "props??")
    // console.log(this.addNewPost, 'adding new post?')
    return (
      <div>
        {this.state.posts.map(post => (
          <PostCard post={post} key={post.id} />
          ))}
      </div>
    );
  }
}

export default AllPosts;
