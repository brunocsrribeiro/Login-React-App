import React, { Component } from 'react';
import image from '../image/undraw_business_shop_qw-5-t.svg';

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
          <div className="flex items-center flex-col mb-4 w-full">
            <h1 className="font-extrabold text-9xl
            tracking-tight text-green-800"
            >
              ShopPutz
            </h1>
          </div>
          <div className="flex">
            <p className="font-semibold text-gray-700
              uppercase antialiased"
            >
              O shopping de variedades para você e toda sua família
            </p>
          </div>
        </div>
      </section>
    );
  }
}
