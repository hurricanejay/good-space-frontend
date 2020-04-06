import React from "react";
import { Button } from "react-bootstrap";
import PostItem from './PostItem'

class PostCard extends React.Component {
  state = {
    toggleDetails: false,
    likes: 0
  };

  increaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  clickHandler = event => {
    // event.preventDefault()
    event.persist();
    this.setState(prevState => {
      return {
        toggleDetails: !prevState.toggleDetails
      };
    });
  };

  // componentDidMount() {
  //   const userId =
  //   fetch(postsAPI/userId)
  //     .then(response => response.json())
  //     .then(posts => this.setState({ posts }));
  // }

  //onclick need to get the id of the post and show that particular user's post
  //onclick need to patch likes 



  render() {
    console.log(this.state.toggleDetails, "click or no click");

    return (
      <div className="post-card">
        <h5>{this.props.title}</h5>
        <h6>Category: {this.props.category}</h6>
        <h6>Location: {this.props.location}</h6>
        <Button onClick={this.increaseLikes}>Likes: {this.state.likes} </Button>
        {this.state.toggleDetails ? <PostItem {...this.props}/> : null }
    <Button onClick={this.clickHandler}>{this.state.toggleDetails ? "Hide Details" : "Show Details"}</Button>
        {/* <Button onClick={this.props.history.push(`http://localhost:3000/posts/{this.props.id}`)}>More info</Button> */}
        <hr />
        <br />
        <br />
      </div>
    );
  }
}

export default PostCard;
