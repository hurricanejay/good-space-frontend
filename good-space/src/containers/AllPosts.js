import React from "react";
import Post from "../components/Post";
const postsAPI = "http://localhost:3000/posts";
class AllPosts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(postsAPI)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {

    console.log(this.state.posts, "props??")
    return (
  
    
      <div>
        {this.state.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
};

export default AllPosts;
