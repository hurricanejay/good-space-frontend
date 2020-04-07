import React from "react";
import PostCard from "../components/PostCard";
// import MyPosts from "../containers/MyPosts";
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
    // console.log(this.state.posts, "props??")
    // console.log(this.addNewPost, 'adding new post?')
    return (
      <div className="all-posts">
        <h3>Latest Posts</h3>
        <br />
        {this.state.posts.map(post => (
          <PostCard {...post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default AllPosts;
