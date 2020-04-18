import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MapContainer from "../containers/MapContainer";

const PostItem = props => {
  const [users, setUsers] = useState({});
  const [post, setPost] = useState({});
  const postId = useLocation().pathname.split("/")[2]; 

  const clickBack = () => {
    props.history.push("/allposts");
  };

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postId}`)
      .then(response => response.json())
      .then(post => setPost(post));
  }, []);
// console.log(location, 'loc?')
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  const sendEmail = () => {
    const userId = users.find(user => {
      return user.id === parseInt(post.user_id);
    });
    window.open(`mailto:${userId.email}?&subject=Responding To Your Good Space Post: ${post.title}`);
  };
  return (
    <div className="post-item">
      <br/>
      <div>
        <h3>More Details...</h3><br/>
        <Card border="warning" style={{ width: '32rem'}}>
         <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <br />
        <Card.Text>Category: {post.category}</Card.Text>
        {/* <Card.Text>Tag: {post.tag}</Card.Text> */}
        <Card.Text>Location: {post.location}</Card.Text>
        <Card.Text>Date: {new Date(post.date).toLocaleDateString()}</Card.Text>
        <Card.Text>{post.description}</Card.Text>
        <div className="btns">
        <Button size="sm" variant="success" onClick={sendEmail} >Reply</Button>
        <Button size="sm" variant="outline-dark" onClick={clickBack}>Back</Button>
        </div>
        </Card.Body>
        </Card>
        <div className='map'>
        {post.location ? 
        <MapContainer postLocation={post.location}/> : null }

        </div>
        
      </div>
    </div>
  );
};

export default PostItem;
