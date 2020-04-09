import React from "react";
import { Button } from "react-bootstrap";
import PostItem from "./PostItem";


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

  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => this.setState({ users }));
}

  sendEmail = () => {
const userId = this.state.users.find(user => {
  return user.id === this.props.user_id
})
    window.location.assign(`mailto:${userId.email}`)
  }

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
  
        {this.state.toggleDetails ? <PostItem {...this.props} /> : null}
        {/* <Button onClick={this.handleClick}> */}
        <Button onClick={this.clickHandler}>
          {this.state.toggleDetails ? "Hide Details" : "Show Details"}
        </Button><br/>
        {this.state.toggleDetails ? 
        <Button onClick={this.sendEmail}>Reply</Button> : null}
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
      {/* <Button
          onClick={this.increaseLikes}
          increaseLikesToDB={this.addLikesToDB}
        >
          Likes: {this.state.likes}{" "}
        </Button> */}