import React, { Component } from 'react';

const divButton = `flex justify-center w-full`;

const buttonForm = `bg-gradient-to-r items-center 
flex focus:ring font-semibold
from-green-500 via-green-400 hover:border-green-400
hover:from-green-400 hover:via-green-500 hover:to-green-400
hover:text-gray-800 hover:shadow-outline justify-center
mt-2 mb-6 p-2 ring-indigo-200 ring-offset-2 rounded-lg
shadow text-white to-green-500 focus:outline-none w-9/12`;

class Buttonenterform extends Component {
  render() {
    return (
      <div className={ divButton }>
        <button className={ buttonForm }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Buttonenterform;
