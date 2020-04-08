import React from "react";
import { Button } from "react-bootstrap";
import PostItem from "./PostItem";

class PostCard extends React.Component {
  state = {
    toggleDetails: false,
    // likes: 0
  };

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


  clickHandler = event => {
    event.persist();
    this.setState(prevState => {
      return {
        toggleDetails: !prevState.toggleDetails
      };
    });
  };

  render() {
console.log(this.state.likes, 'how many likes?')
    return (
      <div className="post-card">
        <h5>{this.props.title}</h5><br/>
        <h6>Category:</h6> <p>{this.props.category}</p>
        <h6>Location:</h6><p>{this.props.location}</p>
        <h6>Date Posted:</h6><p>{new Date(this.props.date).toLocaleDateString()}</p>
        {/* <Button
          onClick={this.increaseLikes}
          increaseLikesToDB={this.addLikesToDB}
        >
          Likes: {this.state.likes}{" "}
        </Button> */}
        {this.state.toggleDetails ? <PostItem {...this.props} /> : null}
        <Button onClick={this.clickHandler}>
          {this.state.toggleDetails ? "Hide Details" : "Show Details"}
        </Button>
        <hr />
        <br />
        <br />
      </div>
    );
  }
}

export default PostCard;
