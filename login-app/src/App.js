import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

