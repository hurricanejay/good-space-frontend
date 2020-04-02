import React from 'react';
import Welcome from '../components/Welcome';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class MainContainer extends React.Component {
    render() {
        return(
            <Router>

           
        <Switch>
          {/* <Route path='/signup' render={() => <SignUp setUser={this.setUser} />} />
          <Route path='/login' render={() => <Login setUser={this.setUser} userCart={this.fillCart} />} />
          <Route path='/post-form' render={(routerProps) => <Store currentUser={this.state.currentUser} {...routerProps} stores={this.state.stores} />} />
          <Route path='/my-posts' render={() => <Store currentUser={this.state.currentUser} />} />
          <Route path='/all-posts' render={(routerProps) => <MallContainer currentUser={this.state.currentUser} {...routerProps} stores={this.state.stores} />} /> */}
          <Route path='/' component={Welcome} />
        </Switch>
        </Router>
        )
    }
}

export default MainContainer;