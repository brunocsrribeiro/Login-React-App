import React, { Component } from 'react';
import { LoginIcon, LockClosedIcon } from '@heroicons/react/outline';

const styleInput = `border-b-2 border-green-400
  flex focus:outline-none
  font-bold mb-2 p-3
  placeholder-green-700
  placeholder-opacity-25
  text-center text-gray-700
  text-sm tracking-wide w-5/6`;

export default class Form extends Component {
  render() {
    return (
      <>
        <form className="flex flex-col items-center w-full max-w-lg">
            <LoginIcon className="relative -bottom-11 -left-40 w-10 text-green-400" />
            <input 
              type="email"
              className= { styleInput }
              placeholder="Email/Usuário"
            />
            <LockClosedIcon className="relative -bottom-10 -left-40 w-10 text-green-400" />
            <input
              type="password"
              className={ styleInput }
              placeholder="Senha"
            />
            <button
              className="bg-gradient-to-r
                flex focus:ring font-semibold
                from-green-700 hover:border-green-400
                hover:from-green-300 hover:text-gray-800
                justify-center mt-2 p-2
                ring-indigo-200 ring-offset-2
                rounded-sm text-white
                to-green-400 w-4/6"
            >
              Entrar
            </button>
          </form>
      </>
    );
  }
}
