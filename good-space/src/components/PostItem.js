import React from "react";
import { Button } from "react-bootstrap";

const PostItem = props => {
  return (
    <div className="post-item">
      <h3>{props.title}</h3>
      <h4>Category: {props.category}</h4>
      <h5>Tag: {props.tag}</h5>
      <h5>Location: {props.location}</h5>
      <h6>Date: {new Date(props.date).toLocaleDateString()}</h6>
      <p>{props.description}</p><br/>
      <p>Leave A Comment</p><textarea type="text"/><br/><br/>
      <Button>Submit</Button><br/><br/>
    </div>
  );
};

export default PostItem;
