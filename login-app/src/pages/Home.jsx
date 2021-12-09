import React, { Component } from 'react';
import image from '../image/undraw_mobile_life_re_jtih.svg';

export default class Home extends Component {
  render() {
    return (
      <section className="flex items-center bg-gradient-to-r from-green-400
        via-green-200 to-blue-400"
      >
        <div className="flex items-center justify-center w-6/12">
          <img src={ image } alt="shop-puts-family" className="mt-32 mb-9 ml-20"/>
        </div>
        <div className="flex flex-col items-center justify-center w-2/3">
          <div className="flex items-center justify-center w-full">
            <h1 className="bg-clip-text text-transparent
            bg-gradient-to-r from-green-800 via-green-500 to-blue-800
            font-extrabold text-9xl tracking-tight py-4"
            >
              Lifestyle
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
