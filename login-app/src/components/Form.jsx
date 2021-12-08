import React, { Component } from 'react';
// import { LoginIcon, LockClosedIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const styleInput = `border-b-2 border-green-400
  flex focus:outline-none
  font-bold mb-2 p-3
  placeholder-green-700
  placeholder-opacity-50
  text-center text-green-600
  text-sm tracking-wide w-5/6`;

export default class Form extends Component {
  render() {
    return (
      <>
        <form className="flex flex-col items-center w-full max-w-lg">
            {/* <LoginIcon className="relative -bottom-11 -left-44 w-8 text-green-400" /> */}
            <input 
              type="email"
              className= { styleInput }
              placeholder="Email/Usuário"
              required
            />
            {/* <LockClosedIcon className="relative -bottom-10 -left-44 w-8 text-green-400" /> */}
            <input
              type="password"
              className={ styleInput }
              placeholder="Senha"
              required
            />
            <button
              className="bg-gradient-to-r
                flex focus:ring font-semibold
                from-green-500 via-green-400 hover:border-green-400
                hover:from-green-400
                hover:via-green-500 hover:to-green-400
                hover:text-gray-800
                hover:shadow-outline
                justify-center mt-2 mb-6 p-2
                ring-indigo-200 ring-offset-2
                rounded-lg shadow text-white
                to-green-500
                focus:outline-none w-4/6"
            >
              Entrar
            </button>
            <Link className="flex align-baseline
              font-bold text-sm
              text-green-400
              hover:text-green-600
              focus:outline-none"
            >
              Esqueci minha senha?
            </Link>
            <Link className="flex align-baseline
              font-bold text-sm
              text-green-400
              hover:text-green-600
              focus:outline-none"
            >
              Cadastre-se
            </Link>
          </form>
      </>
    );
  }
}
