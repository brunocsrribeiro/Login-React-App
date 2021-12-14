import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styleInput = `border-b-2 border-green-400
  flex focus:outline-none
  font-bold mb-2 p-3
  placeholder-green-700
  placeholder-opacity-50
  text-center text-green-600
  text-sm tracking-wide w-full`;

  export default class Inputemailform extends Component {
  render() {
    const { email, handleChange } = this.props;
    return (
      <div className="w-9/12">
        <input
          type="email"
          value={ email }
          onChange={ handleChange }
          name="email"
          className= { styleInput }
          placeholder="Email/Usuário"
          required
        />
      </div>
    );
  }
}

Inputemailform.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
