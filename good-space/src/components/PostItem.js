import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PostItem = props => {
  const [users, setUsers] = useState({});
  const [post, setPost] = useState({});
  const location = useLocation().pathname.split("/")[2];

  const clickBack = () => {
    props.history.push("/allposts");
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
      return user.id === parseInt(post.user_id);
    });
    window.location.assign(`mailto:${userId.email}`);
  };

  return (
    <div className="post-item">
      <div>
        <h3>Post Details</h3>
        <br />
        <h6>{post.title}</h6>
        <h6>Category: {post.category}</h6>
        <h6>Tag: {post.tag}</h6>
        <h6>Location: {post.location}</h6>
        <h6>Date: {new Date(post.date).toLocaleDateString()}</h6>
        <p>{post.description}</p>

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
