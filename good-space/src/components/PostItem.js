import React, { useState } from "react";
import { Button } from "react-bootstrap";

const PostItem = props => {
  const [editing, setEditing] = useState(false)
  const [description , setDescription] = useState(props.description)

  const editingHandler = () => {
    if(editing){
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

const changeInput = (e) => {
  setDescription(e.target.value)
}

    const handleSubmit = () => {

      let data = {
        title: props.title,
        category: props.category,
        date: props.date,
        location: props.location,
        tag: props.tag,
        description: description
      }
      
    fetch(`http://localhost:3000/posts/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(console.log)
    }

  return (
    <div className="post-item">
      <h3>{props.title}</h3>
      <h4>Category: {props.category}</h4>
      <h5>Tag: {props.tag}</h5>
      <h5>Location: {props.location}</h5>
      <h6>Date: {new Date(props.date).toLocaleDateString()}</h6>
      <p>{editing ? <input value={description} onChange={changeInput}></input> : props.description}</p><br/>
      {editing && <Button onClick={handleSubmit}>Save</Button>}
      {props.test && <Button onClick={editingHandler}>Edit</Button>}
      {props.test && <Button>Delete</Button>}

      {/* <p>Leave A Comment</p><textarea type="text"/><br/><br/> */}
      {/* <Button>Submit</Button><br/><br/> */}
    </div>
  );
};

export default PostItem;
