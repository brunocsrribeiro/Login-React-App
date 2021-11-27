import React, { Component } from 'react';
import Form from './Form';
import image from '../image/undraw_secure_login_pdn4.svg';

export default class Main extends Component {
  render() {
    return (
      <div className="flex h-screen">
        <section className="
          flex flex-col bg-black
          items-center
          justify-center
          w-2/3"
        >
          <div className="flex flex-cols w-1/2 mb-10">
            <img src={ image } alt={ image } />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="
              font-extrabold text-5xl
              tracking-tight
              text-blue-500
              text-opacity-50"
            >
            Seja bem vindo
            </h1>
            <p className="font-semibold text-center text-white">
              Faça seu login
            </p>
          </div>
        </section>
        
        <section className="
          flex flex-col items-center
          justify-center
          bg-white
          box-border
          w-1/3"
        >
          <Form />
        </section>
      </div>
    );
  }
}

