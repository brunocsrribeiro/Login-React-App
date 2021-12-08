import React, { Component } from 'react';
import image from '../image/shop-puts-family.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="flex w-full">
            <div className="bg-gradient-to-r
              from-green-800 via-green-300
              justify-start h-full w-11/12"
            >
              <img src={ image } alt="shop-puts-family" className="flex mt-20 w-1/3"/>
              <div className="flex w-2/3">
                 <h1>Texto 1</h1>
              </div>
            </div>
        </section>
      </div>
    );
  }
}
