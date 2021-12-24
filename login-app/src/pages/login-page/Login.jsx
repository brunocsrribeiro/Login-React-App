import React, { Component } from 'react';
import Form from '../../components/FormComponents/Form';
import Header from '../../components/HeaderComponents/Header';
import image from '../../image/undraw_authentication_fsn5.svg';

const divLogin = `flex h-screen w-full`;

const sectionLogin = `flex flex-col bg-gradient-to-r
from-green-800 via-green-300 items-center
justify-center w-2/3`;

const divImageLogin = `flex flex-cols w-96 mb-10`;

const divWelcome = `flex flex-col items-center`;

const headingWelcome = `font-extrabold text-5xl
tracking-tight text-white`;

const paragraphLogin = `animate-bounce font-semibold
text-center text-xl text-blue-900 mt-3`;

const sectionForm = `flex flex-col items-center
justify-center bg-white box-border w-1/3`;

class Login extends Component {
  render() {
    return (
      <div className={ divLogin }>
        <Header />
        <section className={ sectionLogin }>
          <div className={ divImageLogin }>
            <img src={ image } alt={ image } />
          </div>
          <div className={ divWelcome }>
            <h1 className={ headingWelcome }>
            Seja bem vindo
            </h1>
            <p className={ paragraphLogin }>
              Faça seu login
            </p>
          </div>
        </section>
        
        <section className={ sectionForm }>
          <Form />
        </section>
      </div>
    );
  }
}

export default Login;
