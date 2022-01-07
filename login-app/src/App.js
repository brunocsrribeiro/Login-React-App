import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home-page/Home';
import Login from './pages/login-page/Login';
import Notfound from './pages/notfound-page/NotFound';

export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/login" render={ (propsRouter) => <Login {...propsRouter} /> } />
          <Route exact path="/" render={ (propsRouter) => <Home {...propsRouter} /> } />
          <Route exact path="*" component={ Notfound } />
        </Switch>
    );
  }
}
