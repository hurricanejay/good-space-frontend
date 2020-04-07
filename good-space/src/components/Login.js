import React, {Component} from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

class Login extends Component {

  state = {
    username: '',
    password: '',
//save id in state, when you click the page with post, get id from state and fetch from backend  and render posts
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify(this.state)
        
    }).then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        console.log(response, 'response??')
        this.props.setUser(response)
        window.close()
      }
    })
    this.setState({username: '', password: ''})

  }

  render() {
    console.log(this.state.username, 'username?')
    // console.log(this.props.setUser, 'props?')
    return (
  
      <div className="Login">
      <h3>Login</h3>
      <form onSubmit={this.handleSubmit} id='form'>
          <FormGroup controlId="email" bssize="large">
              <label>Name</label>
              <FormControl
                  autoFocus
                  type="text"
                  name='username'
                  placeholder='Username'
                  value={this.state.username}
                  onChange={this.handleChange}
              />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
              <label>Password</label>
              <FormControl
                  type="password"
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
              />
          </FormGroup>
          <Button block bsSize="large" type="submit">
              Login
          </Button>
      </form>
  </div>

            // <form>
            //   <div>
            //       <h4>Login</h4>
            //     <input type="text" name="username" placeholder="Username" />
            //     <label htmlFor="username">Username</label>
            //   </div>
            //   <div>
            //     <input type="password" name="password" placeholder="Password" />
            //     <label htmlFor="password">Password</label>
            //   </div>
            //   <input type="submit" value="Login" />
            // </form>
  
          
    )

  }
};

export default Login;
