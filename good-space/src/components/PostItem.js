import React from "react";
import { Button } from "react-bootstrap";

const PostItem = props => {
  return (
    <div className="post-item">
      <h3>{props.post.title}</h3>
      <h4>Category: {props.post.category}</h4>
      <h5>Tag: {props.post.tag}</h5>
      <h5>Location: {props.post.location}</h5>
      <h6>Date: {new Date(props.post.date).toLocaleDateString()}</h6>
      <p>{props.post.description}</p>
      <Button>Submit</Button>
    </div>
  );
};

export default PostItem;
