import React, { Component } from 'react';
import Header from '../../components/HeaderComponents/Header';
import Main from '../../components/MainComponents/Main';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
