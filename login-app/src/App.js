import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="fixed w-full border-b-2 border-gray-200">
          <Header />
        </div>
        <div className="h-full">
          <Main />
        </div>
      </div>
    );
  }
}

