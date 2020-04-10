import React from "react";
import PostCard from "../components/PostCard";

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
    return (
      <div className="all-posts">
        <h3>Latest Posts</h3>
        <br />
        {this.state.posts.map(post => (
          <PostCard
            {...post}
            key={post.id}
            history={this.props.history}
            showDetails={true}
            showEdit={false}
            showSave={false}
            showDelete={false}
          />
        ))}
      </div>
    );
  }
}

export default AllPosts;
