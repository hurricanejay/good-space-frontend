import React from "react";
import { Button } from "react-bootstrap";
// import PostItem from './PostItem'

class PostCard extends React.Component {

state = {
  toggleDetails: false
}

clickHandler = (event) => {
  event.preventDefault()
  this.setState(prevState => {
    return {
      toggleDetails: !prevState.toggleDetails
    }
  })
}

//onclick need to get the id of the post and show that particular post




  render() {
    console.log(this.state.toggleDetails, 'click or no click')
    return (
      <div className="post-card">
        <h3>{this.props.post.title}</h3>
        <h4>Category: {this.props.post.category}</h4>
        <h5>Location: {this.props.post.location}</h5>
        {/* {this.state.toggleDetails ? null : <PostItem />} */}
        <Button onClick={this.clickHandler}>More info</Button>
      </div>
    );
  }


};

export default PostCard;
