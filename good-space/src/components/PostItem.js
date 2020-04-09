import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PostItem = props => {
  const [users, setUsers] = useState({});
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [post, setPost] = useState({});
  const location = useLocation().pathname.split("/")[2];

  // const [title, setTitle] = useState(props.title);

  const clickBack = () => {
    props.history.push("/allposts");
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

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${location}`)
      .then(response => response.json())
      .then(post => setPost(post));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  const sendEmail = () => {
    const userId = users.find(user => {
      // console.log(localStorage.user_id, 'user?')
      return user.id === parseInt(localStorage.user_id);
    });
    window.location.assign(`mailto:${userId.email}`);
    console.log(userId)
  };

  // console.log(users, "users in postitem");

  
  return (
    <div className="post-item">
      <div>
        <h6>{post.title}</h6>

        {/* {editing? (<h6 value={title} onchange={changeInput}></h6>) : (title)} */}
        <h6>Category: {post.category}</h6>
        <h6>Tag: {post.tag}</h6>
        <h6>Location: {post.location}</h6>
        <h6>Date: {new Date(post.date).toLocaleDateString()}</h6>
        <p>
          {editing ? (
            <textarea
              rows={5}
              value={description}
              onChange={changeInput}
            ></textarea>
          ) : (
            post.description
          )}
        </p>
        <Button onClick={sendEmail}>Reply</Button>
        <br />
        <br />
        <Button onClick={clickBack}>Back</Button>
        <br />

      </div>
    </div>
  );
};

export default PostItem;
