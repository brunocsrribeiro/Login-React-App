import React, { Component } from 'react';

const styleInput = `border-b-2 border-green-400
  flex focus:outline-none
  font-bold mb-2 p-3
  placeholder-green-700
  placeholder-opacity-50
  text-center text-green-600
  text-sm tracking-wide w-full`;

class Inputemailform extends Component {
  render() {
    return (
      <div className="w-9/12">
        <input
          type="email"
          className= { styleInput }
          placeholder="Email/Usuário"
          required
        />
      </div>
    );
  }
}

export default Inputemailform;
