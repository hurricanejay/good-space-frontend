import React from "react";
import { Button } from "react-bootstrap";
import PostItem from "./PostItem";
import { useHistory } from "react-router-dom";

class PostCard extends React.Component {
  state = {
    toggleDetails: false,
    // likes: 0
    users: []
  };

  clickHandler = event => {
    event.persist();
    this.setState(prevState => {
      return {
        toggleDetails: !prevState.toggleDetails
      };
    });
  };

  handleClick = () => {
    this.props.history.push(`/postitem/${this.props.id}`);
  };

  render() {
    return (
      <div className="post-card">
        <h5>{this.props.title}</h5>
        <br />
        <h6>Category:</h6> <p>{this.props.category}</p>
        <h6>Location:</h6>
        <p>{this.props.location}</p>
        <h6>Date Posted:</h6>
        <p>{new Date(this.props.date).toLocaleDateString()}</p>
        <Button onClick={this.handleClick}>Show Details</Button>
        <br />
        <hr />
        <br />
        <br />
      </div>
    );
  }
}

export default PostCard;

// increaseLikes = () => {
//   this.setState(prevState => ({ likes: prevState.likes + 1 }));
// };

// addLikesToDB = (likes) => {
//   fetch("http://localhost:3000/likes", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       accept: "application/json"
//     },
//     body: JSON.stringify(this.state)
//   })
//     .then(res => res.json())
//     .then(likes => {
//       this.setState({ likes: [likes, ...this.state.likes] });
//     });
// };
{
  /* <Button
          onClick={this.increaseLikes}
          increaseLikesToDB={this.addLikesToDB}
        >
          Likes: {this.state.likes}{" "}
        </Button> */
}
