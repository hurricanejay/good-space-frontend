import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors);
        } else {
          this.props.setUser(response);
          window.close();
        }
      });
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div className="login">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit} id="form">
          <FormGroup controlId="email" bssize="large">
            <label>Username</label>
            <FormControl
              autoFocus
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <label>Password</label>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button block bsSize="large" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
