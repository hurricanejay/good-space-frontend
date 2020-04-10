import { Button } from "react-bootstrap";
import PostItem from "./PostItem";
import { useHistory } from "react-router-dom";
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
      <h5>{props.title}</h5>
      <br />
      <h6>Category:</h6> <p>{props.category}</p>
      <h6>Location:</h6>
      <p>{props.location}</p>
      <h6>Date Posted:</h6>
      <p>{new Date(props.date).toLocaleDateString()}</p>
      {props.showDetails ? (
        <Button onClick={handleClick}>Show Details</Button>
      ) : null}
      <br />
      {props.showEdit ? (
        <p>
          {editing ? (
            <textarea
              rows={5}
              value={description}
              onChange={changeInput}
            ></textarea>
          ) : (
            description
          )}
        </p>
      ) : null}
      {props.showEdit ? <Button onClick={editingHandler}>Edit</Button> : null}
      {props.showSave ? <Button onClick={handleSubmit}>Save</Button> : null}
      {props.showDelete ? <Button onClick={deletePost}>Delete</Button> : null}
      <hr />
      <br />
      <br />
    </div>
  );
};

export default PostCard;
