import React from "react";
import { Button } from "react-bootstrap";

class PostCard extends React.Component {

// state = {
//   toggleDetails: false
// }

// handleClick = (event) => {
//   event.preventDefault();
// }

  render() {
    return (
      <div className="post-card">
        <h3>{this.props.post.title}</h3>
        <h4>Category: {this.props.post.category}</h4>
        <h5>Location: {this.props.post.location}</h5>
        {/* if (this.state.toggleDetails ? ) */}
        <Button onClick={this.handleClick}>Click for more info</Button>
      </div>
    );
  }


};

export default PostCard;
