import React, { Component } from 'react';
import Form from './Form';
import image from '../image/undraw_shopping_app_flsj.svg';

export default class Main extends Component {
  render() {
    return (
      <div className="flex h-screen w-full">
        <section className="
          flex flex-col bg-gradient-to-r
          from-green-800
          via-green-300
          to-green-50
          items-center
          justify-center
          w-2/3"
        >
          <div className="flex flex-cols w-96 mb-10">
            <img src={ image } alt={ image } />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="
              font-extrabold text-5xl
              tracking-tight
              text-white"
            >
            Seja bem vindo
            </h1>
            <p className="font-semibold text-center text-gray-700">
              Faça seu login
            </p>
          </div>
        </section>
        
        <section className="
          flex flex-col items-center
          justify-center bg-white
          box-border w-1/3"
        >
          <Form />
        </section>
      </div>
    );
  }
}

