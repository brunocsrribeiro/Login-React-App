import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home-page/Home';
import Login from './pages/login-page/Login';

export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/login" render={ (props) => <Login {...props} /> } />
          <Route exact path="/" render={ () => <Home /> } />
        </Switch>
    );
  }
}

