import React, { Component } from 'react';
import { LoginIcon, LockClosedIcon } from '@heroicons/react/outline';

const styleInput = `border-b-2 border-purple-500
  flex tracking-wide
  focus:outline-none
  p-3 text-center mb-2
  text-gray-700 font-bold
  w-full`;

export default class Form extends Component {
  render() {
    return (
      <>
        <form className="w-full max-w-lg">
            <LoginIcon className="relative -bottom-11 -left-1 w-11 text-purple-700" />
            <input 
              type="email"
              className= { styleInput }
              placeholder="Email/Usuário"
            />
            <LockClosedIcon className="relative -bottom-10 -left-1 w-11 text-purple-700" />
            <input
              type="password"
              className={ styleInput }
              placeholder="Senha"
            />
            <button
              className="
                bg-gradient-to-r
                flex focus:ring
                font-semibold
                from-blue-700
                hover:border-blue-400
                hover:from-blue-300
                hover:text-gray-500
                justify-center
                mt-2 p-2 ring-indigo-200
                ring-offset-2
                rounded-sm
                text-opacity-80
                text-white
                to-blue-400
                w-full"
            >
              Entrar
            </button>
          </form>
      </>
    );
  }
}
