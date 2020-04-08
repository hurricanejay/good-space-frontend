import React, { useState } from "react";
import { Button } from "react-bootstrap";

const PostItem = props => {
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(props.description);

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
      .then(() => {
        setDescription(description);
        setEditing(false);
      });
  };

  const deletePost = () => {
    fetch(`http://localhost:3000/posts/${props.id}`, {
      method: "DELETE"
    });
    props.afterDelete(props);
  };

  return (
    <div className="post-item">
      <h6>{props.title}</h6>
      <h6>Category: {props.category}</h6>
      <h6>Tag: {props.tag}</h6>
      <h6>Location: {props.location}</h6>
      <h6>Date: {new Date(props.date).toLocaleDateString()}</h6>
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
      <br />
      {editing && <Button onClick={handleSubmit}>Save</Button>}
      {props.test && <Button onClick={editingHandler}>Edit</Button>}
      {props.test && <Button onClick={deletePost}>Delete</Button>}
      <br/><br/>

      {/* <p>Leave A Comment</p><textarea type="text"/><br/><br/> */}
      {/* <Button>Submit</Button><br/><br/> */}
    </div>
  );
};

export default PostItem;
