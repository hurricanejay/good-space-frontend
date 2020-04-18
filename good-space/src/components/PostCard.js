import { Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const PostCard = props => {
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(props.description);

  const handleClick = () => {
    props.history.push(`/postitem/${props.id}`);
  };

  const deletePost = () => {
    fetch(`http://localhost:3000/posts/${props.id}`, {
      method: "DELETE"
    });
    props.afterDelete(props);
  };

  const editingHandler = () => {
    if (editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  const changeInput = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    let data = {
      title: props.title,
      category: props.category,
      date: props.date,
      location: props.location,
      tag: props.tag,
      description: description
    };

    fetch(`http://localhost:3000/posts/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(body => {
        setDescription(body.description);
        setEditing(false);
      });
  };

  return (
  
    <div className="post-card">
    
      <Card border="warning" style={{ width: '33rem'}}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <br />
          {/* <Card.Text>Category: {props.category}</Card.Text> */}
          <Card.Text>Location: {props.location}</Card.Text>
          <Card.Text>
            Date:  
               {new Date (props.date).toLocaleDateString()}
          </Card.Text>
          {props.showDetails ? (
            <Button size="sm" variant="outline-dark" onClick={handleClick}>
              Show Details
            </Button>
          ) : null}
      {props.showEdit ? (
        <p>
          {editing ? (
            <textarea
            className="form-control"
              rows={6}
              value={description}
              onChange={changeInput}
            ></textarea>
          ) : (
            description
          )}
        </p>
      ) : null}
      <div className="btns">
      {props.showEdit ? <Button size="sm" variant="outline-dark" onClick={editingHandler}>Edit</Button> : null}
      {props.showSave ? <Button size="sm" variant="outline-dark" onClick={handleSubmit}>Save</Button> : null}
      {props.showDelete ? <Button size="sm" variant="outline-dark" onClick={deletePost}>Delete</Button> : null}
      </div>
      </Card.Body>
      </Card>
    </div>
  );
};

export default PostCard;
